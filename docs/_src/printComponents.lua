local component = require("component")

for k, v in component.list("redstone") do
	print(k, v)
end
