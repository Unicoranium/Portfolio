local API = require("buttonAPI")
local computer = require("computer")
local event = require("event")
local term = require("term")
local component = require("component")
local sides = require("sides")
local gpu = component.gpu
component.screen.setTouchModeInverted(true)
local TYPES = { SPAWNER = "Spawner", GRINDER = "Grinder", FAN = "Fan" }
local currType = TYPES.SPAWNER
local currPage = 1
local cols = 3
local rows = 4
for k, v in component.list("redstone") do
	component.proxy(k).setOutput({ 0, 0, 0, 0, 0, 0 })
end
-- LuaFormatter off

-- UUID of the Redstone components for spawners
local spawnerIO = {
	"76212faa-f9f5-4857-a671-1c2837283547",
	"d712072e-5467-4884-9a77-ec8f0ed7a1c7",
}
-- Name for each spawner, in order of North East South Westa
local spawners = {
	"A", "B", "C", "D",
	"E", "F", "G", "H",

}
-- UUID of the Redstone components for grinders followed by a list of sides for the grinders
-- each list is associated with the grinder with the same index in the grinders table
local grinderIO = {
	{
		{ "1381f249-fa70-471a-ba9f-a1729517aacc", sides.west, sides.north }
		-- {"7d8418ae-f7ad-4933-9d03-bb7d30dced16", sides.south, sides.east},
		-- {"fe00b831-3b45-4128-b0c2-ce12a013f259", sides.west, sides.south},
		-- {"a2ba1188-6b08-4b66-b34c-3eb83002eb95", sides.north, sides.west},
		-- {"9ff90400-ca9e-42eb-9896-6600ab483b88", sides.east, sides.north}
	},
	{
		{ "1381f249-fa70-471a-ba9f-a1729517aacc", sides.south }

	},
	{
		{ "1381f249-fa70-471a-ba9f-a1729517aacc", sides.east }

	},
	{
		{ "1381f249-fa70-471a-ba9f-a1729517aacc", sides.up },

		-- { "a2ba1188-6b08-4b66-b34c-3eb83002eb95", sides.up },
		-- { "9ff90400-ca9e-42eb-9896-6600ab483b88", sides.up }
	}
}
local fanIO = {
	"6645f4c5-7730-4640-8966-3712e283fe60", sides.south, sides.east, sides.north, sides.west, sides.up
}
-- LuaFormatter on
local grinders = {
	"Mechanical Users", "Mob Crushers", "Mob Slaughter Factories", "Mob Mashers"
}
local fans = { "South", "East", "West", "North", "Top" }
local map = {}
local i = 0
local maxPages = {}
for k, v in pairs(spawners) do
	i = i + 1
	table.insert(map, {
		name = v,
		id = i,
		state = false,
		type = TYPES.SPAWNER,
		io = component.proxy(spawnerIO[math.floor((i - 1) / 4) + 1]),
		side = (i - 1) % 4 + 2
	})
end
maxPages[TYPES.SPAWNER] = math.ceil(i / (cols * rows))
local i = 0
for k, v in pairs(grinders) do
	i = i + 1
	local s = {}
	for k, v in pairs(grinderIO[i]) do
		table.insert(s, { component.proxy(v[1]), v[2] })
		if v[3] ~= nil then
			table.insert(s, { component.proxy(v[1]), v[3] })
		end
	end
	table.insert(map, {
		name = v,
		id = i,
		state = false,
		type = TYPES.GRINDER,
		ios = s
	})
end
maxPages[TYPES.GRINDER] = math.ceil(i / (cols * rows))
local i = 0
for k, v in pairs(fans) do
	i = i + 1
	table.insert(map, {
		name = v,
		id = i,
		state = true,
		type = TYPES.FAN,
		io = component.proxy(fanIO[1]),
		side = fanIO[i + 1]
	})
	component.proxy(fanIO[1]).setOutput(fanIO[i + 1], 1)
end
maxPages[TYPES.FAN] = math.ceil(i / (cols * rows))
function toggle(name)
	API.toggleButton(name)
	for k, v in pairs(map) do
		if v["name"] == name then
			v["state"] = buttonStatus
			local p = 0
			if v["state"] then p = 16 end
			if v["io"] ~= nil then
				v["io"].setOutput(v["side"], p)
			else
				for _, x in pairs(v["ios"]) do
					x[1].setOutput(x[2], p)
				end
			end
		end
	end
end

function showPage(p, t)
	currPage = p
	currType = t
	API.clearTable()
	local k = (p - 1) * cols * rows + 1
	local sw, sh = gpu.getResolution()
	local w = math.floor(sw / cols)
	local h = math.floor(sh / (rows + 2))
	local cw = math.floor(w * 0.8)
	local ch = math.floor(h * 0.8)
	for _, v in pairs(map) do
		if v["type"] == t then
			local id = v["id"]
			if id >= k and id < (k + rows * cols) then
				id = id - (k - 1)
				local i = (id - 1) % cols
				local j = (id - i - 1) / cols + 1
				local y = math.floor(j * h + h * 0.1)
				local x = math.floor(i * w + w * 0.1)
				API.setTable(v["name"], toggle, v["state"], x, x + cw, y, y + ch)
			end
		end
	end

	local sw, sh = gpu.getResolution()
	local w = math.floor(sw / (cols + 2))
	local h = math.floor(sh / (rows + 2))
	local cw = math.floor(w * 0.8)
	local ch = math.floor(h * 0.3)
	if p > 1 then
		local j = rows + 1
		local i = math.floor(sw / 5)
		local x = math.floor(1 * i + i * 0.1)
		local y = math.floor(j * h + h * 0.3)
		API.setTable("<<", (function(n)
			currPage = math.max(1, currPage - 1)
			API.flash("<<", 0.01)
			showPage(currPage, currType)
		end), false, x, x + cw, y, y + ch)
	end
	if p < maxPages[t] then
		local j = rows + 1
		local i = math.floor(sw / 5)
		local x = math.floor((cols) * i + i * 0.1)
		local y = math.floor(j * h + h * 0.3)
		API.setTable(">>", (function(n)
			currPage = math.min(maxPages[t], currPage + 1)
			API.flash(">>", 0.01)
			showPage(currPage, currType)
		end), false, x, x + cw, y, y + ch)
	end
	local types = {}
	if t == TYPES.SPAWNER then
		table.insert(types, TYPES.GRINDER)
		table.insert(types, TYPES.FAN)
	elseif t == TYPES.GRINDER then
		table.insert(types, TYPES.FAN)
		table.insert(types, TYPES.SPAWNER)
	elseif t == TYPES.FAN then
		table.insert(types, TYPES.SPAWNER)
		table.insert(types, TYPES.GRINDER)
	end
	for k, v in pairs(types) do
		local j = 0
		local i = math.floor(sw / 5)
		local x = math.floor(((k - 1) * (cols - 1) + 1) * i + i * 0.1)
		local y = math.floor(j * h + h * 0.3)
		API.setTable(v, (function(n)
			API.flash(v, 0.01)
			showPage(1, n)
		end), false, x, x + cw, y, y + ch)
	end
	local x = 1
	local y = 1
	local cw = math.floor(w * 0.6)
	API.setTable("Exit", (function(n)
		component.screen.setTouchModeInverted(false)
		API.clear()
		term.setCursor(1, 0)
		term.setCursorBlink(true)
		print("Exiting")
		for k, v in component.list("redstone") do
			component.proxy(k).setOutput({ 0, 0, 0, 0, 0, 0 })
		end
		os.exit()
	end), false, x, x + cw, y, y + ch)
	local mw, _ = gpu.getResolution()
	local x = mw - cw - 1
	API.setTable("Restart", function(n)
		component.screen.setTouchModeInverted(false)
		API.clear()
		term.setCursor(1, 0)
		term.setCursorBlink(true)
		print("Restarting")
		for k, v in component.list("redstone") do
			component.proxy(k).setOutput({ 0, 0, 0, 0, 0, 0 })
		end
		computer.shutdown(true)
	end, false, x, x + cw, y, y + ch)

	API.screen()
	API.heading("Uni's Mob Grinder")
	local w, _ = gpu.getResolution()
	local str = "Type: " .. tostring(t)
	API.label((w - string.len(str)) / 2, math.floor((0) * h + h * 0.5), str)
	local str = "Page: " .. tostring(p) .. "/" .. tostring(maxPages[t])
	API.label((w - string.len(str)) / 2, math.floor((rows + 1) * h + h * 0.5),
		str)
end

function getClick()
	local _, _, x, y = event.pull(1, touch)
	if x == nil or y == nil then
		local h, w = gpu.getResolution()
		gpu.set(h, w, ".")
		gpu.set(h, w, " ")
	else
		API.checkxy(x, y)
	end
end

term.setCursorBlink(false)
gpu.setResolution(gpu.maxResolution())
showPage(currPage, currType)
z = 1

API.screen()
computer.beep()
os.sleep(1)
while true do getClick() end

-- eof
