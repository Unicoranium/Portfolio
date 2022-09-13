const DATA = {
	strats: [
		{
			name: 'Kill-anthropist',
			desc: 'The player with the most cash must buy for everyone on the team, nobody else can purchase anything (not even armour).',
		},
		{
			name: 'Stand Still',
			desc: 'If someone on your team kills the enemy teams top or bottom frag, the player who killed them cannot do anything until the round ends.',
		},
		{
			name: 'Limit One',
			desc: 'You can only buy 1 item this round.',
		},
		{
			name: 'Duplicator',
			desc: 'You can only buy duplicates of things your team already owns (somebody carried over a %% from the previous round? you can buy that gun again).',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'gun' }] }],
		},
		{
			name: 'Unique',
			desc: "Buy a weapon you haven't used this game.",
		},
		{
			name: 'Limited Communication',
			desc: "You can only say swear words, the word 'A', and the word 'B'.",
		},
		{
			name: 'Limited Time',
			desc: 'When the timer hits 1:00 everyone must stop moving and shooting.',
		},
		{
			name: 'Evenly Matched',
			desc: 'If you kill the person parallel to you on the scoreboard (top frag kills top frag) then the player who killed them cannot do anything until the round ends.',
		},
		{
			name: 'The Opener',
			desc: 'Guns cannot be used until a knife, zeus, or grenade kill is achieved by anyone on the team.',
		},
		{
			name: 'Gungame',
			desc: 'You cannot use your primary, until you get a kill by other means (pistols, knife, etc.).',
		},
		{
			name: 'CRABS',
			desc: 'Only crouch walking and Dual Berrettas.',
		},
		{
			name: 'Artillery',
			desc: 'Move slowly as a group and throw ALL of your nades at the first enemy you see.',
		},
		{
			name: 'Is that a Jet Engine?',
			desc: 'If anyone on the team dies, they must blow into their mics until the round ends.',
		},
		{
			name: 'One in the Chamber',
			desc: 'You only have 1 shot, however if you get a kill you may shoot again.',
		},
		{
			name: 'Invisible Aiming',
			desc: "Set your crosshair's alpha value to 0.",
		},
		{
			name: 'Decoy',
			desc: 'Everyone buy a decoy grenade and throw it %%, then stack %%.',
			params: [
				{ type: 'select', list: [{ type: 'tag', tag: 'site' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'site' }] },
			],
		},
		{
			name: 'Point me the Way',
			desc: 'Everyone must group up, then upon coming to an intersection must draw an arrow with bullets indicating where they are going, take turns drawing arrows.',
		},
		{
			name: 'SMG Jumpshot',
			desc: 'You can only get kills with %% in the air.',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'smg' }] }],
		},
		{
			name: 'Big PP',
			desc: '%% must use an M249 (or negev if too expensive) and armour, everyone else must use a PP-Bizon and no armour.',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'player' }] }],
		},
		{
			name: 'Merry-Go-Round',
			desc: 'Everyone must play with +%% typed into the console (after the round you can stop it by replacing the + with a -).',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'direction' }] }],
		},
		{
			name: 'Grave Robbery',
			desc: 'Upon getting a kill you MUST use the weapon your victim dropped, no getting attacking before you pick up their weapon.',
		},
		{
			name: 'MR. PRESIDENT',
			desc: "%% is the president, they must get rid of all their weapons. The rest of the team has to protect them at all costs while yelling secret service quotes ('GET DOWN MR.PRESIDENT', 'BREACH BREACH BREACH', etc.).",
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'player' }] }],
		},
		{
			name: 'Autobuy',
			desc: 'You must use whatever the F3 autobuy gives you.',
		},
		{
			name: 'RETREAT!!!',
			desc: 'The only movement key you can use is S.',
		},
		{
			name: 'Strafing is all I Know',
			desc: 'The only movement keys you can use are A and D.',
		},
		{
			name: 'Swapped Hands',
			desc: 'Switch your mouse hand and your keyboard hand.',
		},
		{
			name: 'Double or Nothing',
			desc: 'Do 2 random Strats and do your best to complete both of them at once.',
		},
		{
			name: 'BULLET HELL',
			desc: 'Everyone buy a %% (or a PP-Bizon ONLY if you are too poor), once you start firing you cannot stop, when you run out of ammo you cannot attack.',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'lmg' }] }],
		},
		{
			name: 'Da Hood',
			desc: "Before the round starts everyone type 'finna shoot you up' then buy an %% and preform 'drive-bys' on the enemy, never stopping.",
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'smg' }] }],
		},
		{
			name: 'Even or Odd?',
			desc: 'If your score on the leaderboard is even, you can use a %% and armour, if it is odd then you can only use a %% and %% with no armour.',
			params: [
				{ type: 'select', list: [{ type: 'tag', tag: 'rifle' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'shotgun' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'pistol' }] },
			],
		},
		{
			name: 'So no head?',
			desc: 'If you get a headshot you cannot move until the round ends, aim for the body!',
		},
		{
			name: 'Pistol -> Primary',
			desc: 'To kill an enemy you must first hit them once with your pistol, then you must finish them off with your primary.',
		},
		{
			name: 'Full Composition',
			desc: 'From %% on the scoreboard, each person must pick one of these weapons: %%, %%, %%, %%, and %%. No weapon can be repeated.',
			params: [
				{ type: 'select', list: ['top to bottom', 'bottom to top'] },
				{
					type: 'slice',
					start: 0,
					end: 5,
					list: [
						{
							type: 'shuffle',
							list: [
								{ type: 'select', list: [{ type: 'tag', tag: 'pistol' }] },
								{ type: 'select', list: [{ type: 'tag', tag: 'shotgun' }] },
								{ type: 'select', list: [{ type: 'tag', tag: 'lmg' }] },
								{ type: 'select', list: [{ type: 'tag', tag: 'smg' }] },
								{ type: 'select', list: [{ type: 'tag', tag: 'assault' }] },
								{ type: 'select', list: [{ type: 'tag', tag: 'sniper' }] },
							],
						},
					],
				},
			],
		},
		{
			name: 'Wealth Imbalance',
			desc: 'If you have over $4000 buy a %%, otherwise use whatever guns you can find from dead enemies.',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'shotgun' }] }],
		},
		{
			name: 'Family Heirloom',
			desc: 'Have your team drop all their weapons. Have %% and %% buy either a %% or %%, those are the only guns that can be used, when those people die pick up their gun.',
			params: [
				{ type: 'slice', start: 0, end: 2, list: [{ type: 'shuffle', list: [{ type: 'tag', tag: 'color' }] }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'rifle' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'heavy' }] },
			],
		},
		{
			name: 'NEGEV NEGEV NEGEV',
			desc: 'Buy a Negev and a decoy grenade and ruin your enemies ears.',
		},
		{
			name: 'Dog Tags',
			desc: 'When you kill an enemy you must drop everything and type the enemys name into chat.',
		},
		{
			name: 'Gun Flex',
			desc: 'When you kill an enemy you must drop everything and type the name of the gun you killed them with into chat.',
		},
		{
			name: 'Rich get Richer',
			desc: '%% must get the first kill before anyone else can attack, if they die before they get a kill then the next highest person takes their place.',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'money' }] }],
		},
		{
			name: 'One Handed',
			desc: 'You may only use your %% hand to play.',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'direction' }] }],
		},
		{
			name: 'One Clip to Rule Them All',
			desc: 'Buy a %% or %% (your choice) and win the round without ever reloading.',
			params: [
				{ type: 'select', list: [{ type: 'tag', tag: 'rifle' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'smg' }] },
			],
		},
		{
			name: 'Split',
			desc: '%% is defended by %%, %%, %% with %%, the remaining 2 go to the other site with %%, once you reach your assigned site you cannot leave it.',
			params: [
				{ type: 'select', list: [{ type: 'tag', tag: 'site' }] },
				{ type: 'slice', start: 0, end: 3, list: [{ type: 'shuffle', list: [{ type: 'tag', tag: 'color' }] }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'smg' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'rifle' }] },
			],
		},
		{
			name: 'Making Enemies of Friends',
			desc: 'Every player buys their most hated gun and gives it to the teammate below them on the scoreboard (bottom gives to top).',
		},
		{
			name: 'Making Friends of Friends',
			desc: 'Every player buys their favorite gun and gives it to the teammate below them on the scoreboard (bottom gives to top).',
		},
		{
			name: 'Charge your gun',
			desc: 'Before shooting your primary you must first get a kill with a zeus, if you miss with your zeus you can only use your knife.',
		},
		{
			name: 'Stay Low',
			desc: 'You must crouch the whole round (use +duck if you would like).',
		},
		{
			name: 'Back to the Basics',
			desc: 'No jumping, crouching, walking, or aiming down sights.',
		},
		{
			name: 'Wounded',
			desc: 'You cannot attack until you lose health because of an enemy.',
		},
		{
			name: "Don't Scratch the Guns",
			desc: 'You can only use guns while at 100 health.',
		},
		{
			name: "I've Got You in My Sights",
			desc: 'Scope for the whole round, never unscope.',
		},
		{
			name: 'Asleep at the Mouse',
			desc: 'You cannot touch your mouse until the timer hits 1:15, however you can use your keyboard.',
		},
		{
			name: 'Bro You Deaf?',
			desc: "Set CS:GO's 'master volume' to zero.",
		},
		{
			name: 'Guide the blind',
			desc: '%% and %% must play with their eyes closed.',
			params: [{ type: 'slice', start: 0, end: 2, list: [{ type: 'tag', tag: 'color' }] }],
		},
		{
			name: 'Full Speed ahead',
			desc: 'You must hold the W key, no other movement keys can be pressed.',
		},
		{
			name: 'Bunny Hops',
			desc: 'Spam Jump for the whole round, mouse wheel is your friend here.',
		},
		{
			name: 'Gladiator',
			desc: 'Only two people can leave spawn at one time, upon one of them getting killed one more person can leave spawn.',
		},
		{
			name: 'Gladiator',
			desc: 'Only two people can leave spawn at one time, upon one of them getting killed one more person can leave spawn.\nUse this order: %%, %%, %%, %%, %%',
			params: [{ type: 'shuffle', list: [{ type: 'tag', tag: 'color' }] }],
		},
		{
			name: 'Rich Kids',
			desc: 'You can only use weapons that have skins with qualities purple or above (zeus is also allowed).',
		},
		{
			name: 'Poor Kids',
			desc: 'You can only use weapons that have skins with qualities blue or below (zeus is also allowed).',
		},
		{
			name: 'Give them a Chance',
			desc: "You can only buy this round if you didn't get a kill last round.",
		},
		{
			name: 'Round Robin Rifle',
			desc: 'Your team must compose of one of each rifle (ex. one Scout, one awp, etc.).',
		},
		{
			name: 'Round Robin SMG',
			desc: 'Your team must compose of one of each SMG (ex. one UMP, one P90, etc.).',
		},
		{
			name: 'Helper',
			desc: 'The person with the most assists is the only one allowed a mic, everyone else must mute themselves. No pinging.',
		},
		{
			name: 'Shotgun RUSHER',
			desc: 'Rush into the enemy spawn with a %% or %%, once you reach there you can return to the regular game.',
			params: [
				{ type: 'select', list: [{ type: 'tag', tag: 'shotgun' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'smg' }] },
			],
		},
		{
			name: 'PUULLLLLLLL',
			desc: "Buy a %% or a %% and everytime you fire you have to yell 'PUUULLLLLL!' as if you were on a shooting range.",
			params: [
				{ type: 'select', list: [{ type: 'tag', tag: 'shotgun' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'sniper' }] },
			],
		},
		{
			name: 'Bad Habits',
			desc: 'You must reload your gun early. If it drops below 50% you must throw it away.',
		},
		{
			name: 'Discharge',
			desc: 'You must buy 4 grenades and throw them all before shooting your gun.',
		},
		{
			name: 'Special Snowflake',
			desc: 'Nobody on your team can be using the same gun, pistols included.',
		},
		{
			name: 'Social Distancing',
			desc: 'Nobody can be in the same room as another person.',
		},
		{
			name: 'Habenero Taco Mexicano',
			desc: "Refer to everything as 'amigo' and speak in an awful Spanish/Mexican accent.",
		},
		{
			name: 'Nuke',
			desc: 'Buy grenades first, throw ALL of them %%, then run back to the other site.',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'site' }] }],
		},
		{
			name: 'Incorrect Callouts',
			desc: 'You must incorrectly callout everything.',
		},
		{
			name: 'Stockpile',
			desc: 'If you kill an enemy you must take their gun back to spawn and place it in a pile.',
		},
		{
			name: 'The Decider',
			desc: 'From %% on the scoreboard, players must use %%, %%, %%, %%, %%. %% can swap weapons with anyone else.',
			params: [
				{ type: 'select', list: ['top to bottom', 'bottom to top'] },
				{
					type: 'slice',
					start: 0,
					end: 5,
					list: [
						{
							type: 'shuffle',
							list: [
								{ type: 'select', list: [{ type: 'tag', tag: 'pistol' }] },
								{ type: 'select', list: [{ type: 'tag', tag: 'shotgun' }] },
								{ type: 'select', list: [{ type: 'tag', tag: 'lmg' }] },
								{ type: 'select', list: [{ type: 'tag', tag: 'smg' }] },
								{ type: 'select', list: [{ type: 'tag', tag: 'assault' }] },
								{ type: 'select', list: [{ type: 'tag', tag: 'sniper' }] },
							],
						},
					],
				},

				{ type: 'select', list: [{ type: 'tag', tag: 'player' }] },
			],
		},
		{
			name: 'The Decision',
			desc: '%% must pick between one of these options. \n1. No armour, if you carried it over from previous rounds you must stay in spawn the whole round. \n2. Everyone must use a %%.',
			params: [
				{ type: 'select', list: [{ type: 'tag', tag: 'player' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'smg' }] },
			],
		},
		{
			name: 'One of two',
			desc: '%% must pick between one of these options. \n1. Everyone must use a %% and %% without armour. \n2. Everyone must use a %% and no pistol with armour.',
			params: [
				{ type: 'select', list: [{ type: 'tag', tag: 'player' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'smg' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'pistol' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'shotgun' }] },
			],
		},
		{
			name: 'Top Frag decides',
			desc: '%% must pick between one of these options. \n1. Everyone stack %% site with %%. \n2. %% only.',
			params: [
				{ type: 'select', list: [{ type: 'tag', tag: 'player' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'site' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'lmg' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'pistol' }] },
			],
		},
		{
			name: 'Middle Frag decides',
			desc: '%% must pick between one of these options. \n1. Only %% and %% with no armour or grenades. \n2. %% and no pistol with armour and grenades.',
			params: [
				{ type: 'select', list: [{ type: 'tag', tag: 'player' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'smg' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'pistol' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'shotgun' }] },
			],
		},
		{
			name: 'Bottom Frag decides',
			desc: '%% must pick between one of these options. \n1. The bottom frag is the only one allowed to have armour. \n2. Everyone but the bottom frag can have armour.',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'player' }] }],
		},
		{
			name: 'Site Specific',
			desc: 'If you go %% you have to use an %% or %%, if you go to the other site you have to use a %%.',
			params: [
				{ type: 'select', list: [{ type: 'tag', tag: 'site' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'smg' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'shotgun' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'rifle' }] },
			],
		},
		{
			name: 'Armour Specific',
			desc: "If you use armour you have to use a shotgun, if you don't have armour you can use anything other than a shotgun.",
		},
		{
			name: 'Nascar',
			desc: 'Everytime you are running you have to make car noises.',
		},

		//========================================================================================
		//========================================================================================

		{
			name: 'Hard Carry',
			desc: 'The 3 top frags try their absolute best to win the round, the others try to stop them without directly hurting them (ex. you can flash, body block, etc.).',
		},
		{
			name: 'Bottom Carry',
			desc: 'The 4 bottom frags try their absolute best to win the round, the top frag trys to stop them without directly hurting them (ex. you can flash, body block, etc.).',
		},
		{
			name: 'An Even Carry',
			desc: 'Every one with an even score on the scoreboard trys their absolute best to win the round, the others try to stop them without directly hurting them (ex. you can flash, body block, etc.).',
		},
		{
			name: 'A Traitor',
			desc: 'The bottom frag trys their absolute best to lose the round by flashing their team, body blocking, stealing the bomb, etc.',
		},
		{
			name: 'Harrassment',
			desc: 'You must follow the plan layed out by your teams bottom frag, you also must insult the plan for its every possible failure.',
		},
		{
			name: 'Highly Funded Government Operation',
			desc: 'You can only buy if you have over $5000.',
		},
		{
			name: 'Even Split',
			desc: 'If your score on the scoreboard is even then go %%, otherwise go to the other site. You cannot leave your site until the bomb is planted.',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'site' }] }],
		},
		{
			name: 'Campers',
			desc: 'Nobody can leave spawn until one of your teammates gets a kill.',
		},
		{
			name: 'Underfunded Cave Dwellers',
			desc: 'You can spend a max of $1500 this round.',
		},
		{
			name: 'Numbered Purchase',
			desc: 'You can only buy a weapon in the same slot number as your place on the scoreboard.',
		},

		//========================================================================================
		//========================================================================================

		{
			name: 'CT Specific',
			desc: 'Use only CT specific guns, no rifles.',
			conditions: [{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] }],
		},
		{
			name: 'CT Crickets',
			desc: "Buy a FAMAS and whenever you aren't shooting, hold down the 'scope button'.",
			conditions: [{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] }],
		},
		{
			name: 'SpecOps',
			desc: 'Only silenced weapons are allowed, you must walk constantly, and you can only whisper into the mic.',
			conditions: [{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] }],
		},
		{
			name: 'Ready to Strike',
			desc: 'Hide in spawn until the bomb is planted, then you may leave.',
			conditions: [{ type: 'tag', tag: 'ctDefuse' }],
		},
		{
			name: 'Behind enemy lines',
			desc: 'Nobody can use guns until one member of your team makes it to the enemy spawn.',
			conditions: [{ type: 'tag', tag: 'defender' }],
		},
		{
			name: 'Ninja Clan',
			desc: 'Everyone tries to Ninja Defuse (defuse in smoke infront of the enemy team).',
			conditions: [{ type: 'tag', tag: 'ctDefuse' }],
		},
		{
			name: 'Hide and Bide',
			desc: 'Everyone stack %% and hide in smoke until the bomb is planted.',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'site' }] }],
			conditions: [{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] }],
		},
		{
			name: 'Juggernaut',
			desc: '%% buys a %% or %% (your choice) and armour, while everyone else ONLY buys a defuse kit, zues and grenades. Only when the juggernaut dies can anybody else attack.',
			params: [
				{ type: 'select', list: [{ type: 'tag', tag: 'player' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'lmg' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'shotgun' }] },
			],
			conditions: [{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] }],
		},
		{
			name: 'Always Rotating',
			desc: 'Constantly run between A and B until the bomb is planted.',
			conditions: [{ type: 'tag', tag: 'ctDefuse' }],
		},
		{
			name: 'Turrets',
			desc: 'Make a 2 man tower on each bomb site, the person on top has to use a %% or %% (your choice), the person on bottom has to use a %%.',
			params: [
				{ type: 'select', list: [{ type: 'tag', tag: 'lmg' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'rifle' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'smg' }] },
			],
			conditions: [{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] }],
		},
		{
			name: 'No Losses',
			desc: 'You cannot defuse the bomb, you better rotate quick.',
			conditions: [{ type: 'tag', tag: 'ctDefuse' }],
		},
		{
			name: 'The Ultimate Trick',
			desc: 'Buy smokes and decoys, throw all of your decoys at %% then hide in smoke on the other site.',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'site' }] }],
			conditions: [{ type: 'tag', tag: 'ctDefuse' }],
		},
		{
			name: 'Bottom Hold',
			desc: '%% camps on %%, everyone else goes to the other site, you can only rotate if the bottom frag dies.',
			params: [
				{ type: 'select', list: [{ type: 'tag', tag: 'player' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'site' }] },
			],
			conditions: [{ type: 'tag', tag: 'ctDefuse' }],
		},
		{
			name: 'Let them Grow',
			desc: 'Kill 4 enemies, then let the last plant the bomb, then kill them.',
			conditions: [{ type: 'tag', tag: 'ctDefuse' }],
		},
		{
			name: 'SWAG-7',
			desc: "Everyone buy a MAG-7, when you get a kill with it drop everything and type in chat 'swag-7 :)'.",
			conditions: [{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] }],
		},
		{
			name: 'Take Their Base',
			desc: 'Buy a %% and run back and forth between CT spawn and T spawn until the bomb is planted.',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'shotgun' }] }],
			conditions: [{ type: 'tag', tag: 'ctDefuse' }],
		},

		//========================================================================================
		//========================================================================================

		{
			name: 'T Specific',
			desc: 'Use only T specific guns, no rifles.',
			conditions: [{ type: 'cond', operator: 'setting', operands: ['side', 't'] }],
		},
		{
			name: 'T Crickets',
			desc: "Rush %% with only the Glock while holding down the 'scope button'.",
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'site' }] }],
			conditions: [{ type: 'tag', tag: 'tDefuse' }],
		},
		{
			name: 'Afterplant',
			desc: 'Once the bomb is planted you can no longer move.',
			conditions: [{ type: 'tag', tag: 'tDefuse' }],
		},
		{
			name: 'Frozen Bomb',
			desc: 'While you are holding the bomb you cannot move.',
			conditions: [{ type: 'tag', tag: 'tDefuse' }],
		},
		{
			name: 'Fragile Cargo',
			desc: 'The bomb carrier must throw away all their weapons and can only crouch walk.',
			conditions: [{ type: 'tag', tag: 'tDefuse' }],
		},
		{
			name: 'Surprise',
			desc: 'Use 10 flashes to rush %% with no regard for flashing your teammates.',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'site' }] }],
			conditions: [{ type: 'tag', tag: 'attacker' }],
		},
		{
			name: 'Sssneaky Sssnake',
			desc: "Make a 'smoke train' to silently enter the bomb site.",
			conditions: [{ type: 'tag', tag: 'attacker' }],
		},
		{
			name: 'Special Delivery',
			desc: 'Have the bomb carrier rush %% and (probably) die, everyone else must first go to the other site before retrieving the bomb.',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'site' }] }],
			conditions: [{ type: 'tag', tag: 'tDefuse' }],
		},
		{
			name: 'Moral Support',
			desc: "4 players rush %% while the other stays behind 'inspiring' them.",
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'site' }] }],
			conditions: [{ type: 'tag', tag: 'attacker' }],
		},
		{
			name: 'Boomerang',
			desc: 'Rush %%, then back to spawn, then back to the site, then plant.',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'site' }] }],
			conditions: [{ type: 'tag', tag: 'attacker' }],
		},
		{
			name: 'Never Out Of My Sight',
			desc: 'The bomb carrier buys a %% and does whatever they want, the remaining people pair up and must face their partner.',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'smg' }] }],
			conditions: [{ type: 'tag', tag: 'tDefuse' }],
		},
		{
			name: 'The Supplier',
			desc: 'The bomb carrier is the only one on the team who can buy weapons for the whole team.',
			conditions: [{ type: 'tag', tag: 'tDefuse' }],
		},
		{
			name: 'Like Chickens to a...',
			desc: 'Rush the tighest chokepoint on the map one by one.',
			conditions: [{ type: 'tag', tag: 'attacker' }],
		},
		{
			name: 'Lie in Wait',
			desc: "You can't enter a bomb site until there is 30 seconds remaining.",
			conditions: [{ type: 'tag', tag: 'tDefuse' }],
		},
		{
			name: 'Strike Fear',
			desc: 'Plant the bomb using only grenades, once the bomb is planted you can use your guns.',
			conditions: [{ type: 'tag', tag: 'tDefuse' }],
		},
		{
			name: 'The Greatest Plan',
			desc: 'Follow this plan: Mid -> %% -> CT Spawn -> Then plant on %%.',
			params: [
				{ type: 'select', list: [{ type: 'tag', tag: 'site' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'site' }] },
			],
			conditions: [{ type: 'tag', tag: 'tDefuse' }],
		},
		{
			name: 'The Fake Plan',
			desc: 'Follow this plan: Mid -> Fake a plant on %% -> Mid -> Fake a plant on %% -> Mid -> Fake a plant on %% -> Then plant on %%.',
			params: [
				{ type: 'select', list: [{ type: 'tag', tag: 'site' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'site' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'site' }] },
				{ type: 'select', list: [{ type: 'tag', tag: 'site' }] },
			],
			conditions: [{ type: 'tag', tag: 'tDefuse' }],
		},
		{
			name: 'McDonalds',
			desc: "Everyone buy a MAC-10, when you get a kill with it drop everything and type in chat 'big mac?'.",
			conditions: [{ type: 'cond', operator: 'setting', operands: ['side', 't'] }],
		},

		//========================================================================================
		//========================================================================================

		{
			name: 'Mirage CT: 5 Man Sniper',
			desc: 'Everyone needs to sit at snipers nest, nobody can leave until one of you gets a kill.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'mirage'] },
			],
		},
		{
			name: 'Mirage CT: 5 Man Truck',
			desc: 'Everyone buy a %% and hide at the truck under appartments on B, nobody can leave until one of you gets a kill.',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'shotgun' }] }],
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'mirage'] },
			],
		},
		{
			name: 'Mirage CT: 5 Man Palace',
			desc: 'Everyone buy a %% and hide under palace, nobody can leave until one of you gets a kill.',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'shotgun' }] }],
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'mirage'] },
			],
		},
		{
			name: 'Mirage T: Leeroy Jenkins',
			desc: "Have the bomb carrier wait at A main, everyone else goes palace, the bomb must run in first and yell 'LEEROY JENKINS'.",
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'mirage'] },
			],
		},
		{
			name: 'Mirage T: Boosted',
			desc: 'Mid -> Boost into Snipers -> Market -> B',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'mirage'] },
			],
		},
		{
			name: 'Mirage T: Plan #1',
			desc: 'Mid -> Cat -> B -> Apartments -> Underpass -> Connector -> A',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'mirage'] },
			],
		},

		//========================================================================================
		//========================================================================================

		{
			name: 'Cache CT: 5 Man Mid',
			desc: 'Have 5 people watch mid, 3 on the window, 2 on the door.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'cache'] },
			],
		},
		{
			name: 'Cache CT: Operation Angels',
			desc: 'Everyone sit perfectly silently heaven, when they start planting jump out at them.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'cache'] },
			],
		},
		{
			name: 'Cache CT: Sneaky Squeaky',
			desc: 'Everyone stand on eachothers heads behind squeaky door, when the enemys turn the corner they should see 5 people on each others heads.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'cache'] },
			],
		},
		{
			name: 'Cache T: Boosted',
			desc: 'B Main -> Boost into Vents -> Mid -> Mid Room -> A.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'cache'] },
			],
		},
		{
			name: 'Cache T: Squeaky',
			desc: 'Have 1 person go A, sit in smoke and just open and close squeaky until they die. As soon as they die, rush B.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'cache'] },
			],
		},
		{
			name: 'Cache T: Vent Repair',
			desc: 'Go mid to vent, but have 5 people sit in the vent until you get a kill. Once somebody gets a kill you may leave.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'cache'] },
			],
		},

		//========================================================================================
		//========================================================================================

		{
			name: 'Inferno CT: Banana Bomb',
			desc: 'Everyone must buy an incendiary, HE, smoke, and a flashbang. Once you throw all of the nades down banana you may use your guns.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'inferno'] },
			],
		},
		{
			name: 'Inferno CT: Party Pit',
			desc: 'Have everyone hide in smoke on pit.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'inferno'] },
			],
		},
		{
			name: 'Inferno CT: Chapel Time',
			desc: 'Have everyone go chapel near B, have one of your team lead you all in prayer.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'inferno'] },
			],
		},
		{
			name: 'Inferno T: Bomb and a Dream',
			desc: 'Have the bomb carrier close his eyes and run up banana, try your best to not let them die.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'inferno'] },
			],
		},
		{
			name: 'Inferno T: Plan #1',
			desc: 'Alt Mid -> Apartments -> Boiler -> Mid -> Banana -> B',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'inferno'] },
			],
		},
		{
			name: 'Inferno T: 4,000,000 IQ',
			desc: 'Everyone silently hide at the base of mid (near the stairs of one of the buildings), wait there until some gets a kill. Once someone gets a kill throw smokes top mid and RUSH B.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'inferno'] },
			],
		},

		//========================================================================================
		//========================================================================================

		{
			name: 'Overpass CT: Highway Robbery',
			desc: 'Everyone hide in bank and argue about the economy until the bomb is planted.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'overpass'] },
			],
		},
		{
			name: 'Overpass CT: From the Heavens',
			desc: 'Have everyone hide in heaven, when the bomb is planted smoke off the entrance to heaven and jump down.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'overpass'] },
			],
		},
		{
			name: 'Overpass CT: Take a Bath',
			desc: 'Before anybody can shoot their guns they have to jump into the fountain.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'overpass'] },
			],
		},
		{
			name: 'Overpass T: Plan #1',
			desc: 'Playground -> Long -> Bathrooms -> Connector -> Water -> B',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'overpass'] },
			],
		},
		{
			name: 'Overpass T: Plan #2',
			desc: 'Monster -> Water -> Connector -> Bathrooms -> Long -> A',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'overpass'] },
			],
		},
		{
			name: 'Overpass T: Short Death',
			desc: 'Rush long making as much noise as possible, what could go wrong?',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'overpass'] },
			],
		},

		//========================================================================================
		//========================================================================================

		{
			name: 'Train CT: Ladder Huddle',
			desc: 'Everyone hide in ladder room until one of you gets a kill, then you may leave.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'train'] },
			],
		},
		{
			name: 'Train CT: OIIILLLLL!',
			desc: 'Have everyone hide behind the oil tanker until bomb is planted.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'train'] },
			],
		},
		{
			name: 'Train CT: Aggresive Government',
			desc: 'Everyone buy a %% and decoy grenades and rush up B ramp. Then down ladder if they go A.',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'shotgun' }] }],
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'train'] },
			],
		},
		{
			name: 'Train T: Training Time',
			desc: 'Before leaving spawn have the bomb carrier lead you in some exercises.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'train'] },
			],
		},
		{
			name: 'Train T: Plan #1',
			desc: 'A Main -> Ladder -> T Spawn -> Ivy -> A',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'train'] },
			],
		},
		{
			name: 'Train T: Plan #2',
			desc: 'Ivy -> A -> Ladder -> B',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'train'] },
			],
		},

		//========================================================================================
		//========================================================================================

		{
			name: 'Nuke CT: Boosted',
			desc: 'Boost 4 people onto the boxes in ramp room, %% tries to bait the people into ramp room.',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'player' }] }],
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'nuke'] },
			],
		},
		{
			name: 'Nuke CT: Heaven Sent',
			desc: 'Have everyone wait in smoke at heaven, when the bomb is planted jump down.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'nuke'] },
			],
		},
		{
			name: 'Nuke CT: Vent Repair',
			desc: 'Everyone go either ramp room or squeaky to the vents, hide in them until one person gets a kill.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'nuke'] },
			],
		},
		{
			name: 'Nuke T: Lobby',
			desc: 'Everyone stay on the rafters in lobby until the timer hits 20 seconds, then run into A quickly.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'nuke'] },
			],
		},
		{
			name: 'Nuke T: Plan #1',
			desc: 'Outside -> Secret -> Vents -> A -> Squeaky -> Ramp -> Heaven -> A',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'nuke'] },
			],
		},
		{
			name: 'Nuke T: Plan #2',
			desc: 'Ramp -> Heaven -> A -> Vents -> B',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'nuke'] },
			],
		},

		//========================================================================================
		//========================================================================================

		{
			name: 'Dust 2 CT: Mid Rush',
			desc: 'Everyone run up mid to T spawn, once you reach T spawn you may play as normal.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'dust'] },
			],
		},
		{
			name: 'Dust 2 CT: Spawn Killer',
			desc: "Don't leave CT Spawn until someone one your team gets a kill.",
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'dust'] },
			],
		},
		{
			name: 'Dust 2 CT: Home of the Silvers',
			desc: 'The person with the lowest competitive rank has to buy guns for the entire team, and craft the strategy.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'dust'] },
			],
		},
		{
			name: 'Dust 2 T: Are we Russian In?',
			desc: 'Everyone buy a P90 speak in a Russian accent and RUSH B, CYKA BLYAT.',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'dust'] },
			],
		},
		{
			name: 'Dust 2 T: Plan #1',
			desc: 'Suicide -> Cat -> A -> CT Spawn -> B',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'dust'] },
			],
		},
		{
			name: 'Dust 2 T: Plan #2',
			desc: 'Long -> A -> CT Spawn -> Mid -> Cat -> A',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'dust'] },
			],
		},

		//========================================================================================
		//========================================================================================

		{
			name: 'Office T: Plan #1',
			desc: 'Rush Long Hall to Front Office and camp Snowman until the enemy team picks up a hostage',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'office'] },
			],
		},
		{
			name: 'Office T: Plan #2',
			desc: 'Rush Elevators to Garage and camp Short Snipe until the enemy team picks up a hostage',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'office'] },
			],
		},
		{
			name: 'Office T: Plan #3',
			desc: 'Camp Kitchen until the enemy team picks up a hostage',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'office'] },
			],
		},
		{
			name: 'Office T: Plan #4',
			desc: 'Camp Projector until the enemy team picks up a hostage',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'office'] },
			],
		},
		{
			name: 'Office CT: Plan #1',
			desc: 'Rush Paper',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'office'] },
			],
		},
		{
			name: 'Office CT: Plan #2',
			desc: 'Rush Garage -> Elevators -> Long Hall -> T Spawn -> Projector -> Kitchen hostage',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'office'] },
			],
		},
		{
			name: 'Office CT: Plan #3',
			desc: 'Everyone buy %% and peak Long Snipe then rush Long Hall',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'sniper' }] }],
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'office'] },
			],
		},

		//========================================================================================
		//========================================================================================

		{
			name: 'Vertigo T: Plan #1',
			desc: 'Camp Toilets',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'vertigo'] },
			],
		},
		{
			name: 'Vertigo T: Plan #2',
			desc: 'Clear Mid -> Down Ladder -> Rush A Ramp -> CT Spawn -> Plant B',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'vertigo'] },
			],
		},
		{
			name: 'Vertigo T: Plan #3',
			desc: 'A Scaffolding -> Fake Plant A -> A Ramp -> Ladder -> Mid -> Elevator -> A',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'vertigo'] },
			],
		},
		{
			name: 'Vertigo CT: Plan #1',
			desc: '4 on Mid Boost, %% tries to lure the enemy',
			params: [{ type: 'select', list: [{ type: 'tag', tag: 'player' }] }],
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'vertigo'] },
			],
		},
		{
			name: 'Vertigo CT: Plan #2',
			desc: '5 stack A Sandbags',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'vertigo'] },
			],
		},
		{
			name: 'Vertigo CT: Plan #3',
			desc: 'Rush B Stairs -> Toilets, wait for enemy to plant',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'vertigo'] },
			],
		},

		//========================================================================================
		//========================================================================================

		{
			name: 'Agency T: Plan #1',
			desc: 'Camp Storage',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'agency'] },
			],
		},
		{
			name: 'Agency T: Plan #2',
			desc: 'Rush Long -> Outside Entrance -> CT Spawn, wait for hostage',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'agency'] },
			],
		},
		{
			name: 'Agency T: Plan #3',
			desc: 'Rush Cantine -> Alley -> Toilets -> Lobby -> Beep, Spam beep until hostage is picked up',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'agency'] },
			],
		},
		{
			name: 'Agency T: Plan #4',
			desc: 'Jump out Balcony, run to heaven',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'agency'] },
			],
		},
		{
			name: 'Agency CT: Plan #1',
			desc: 'Lobby -> Stairs -> Boost Room -> Construction -> Meeting -> T Spawn -> Storage -> Hostage',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'agency'] },
			],
		},
		{
			name: 'Agency CT: Plan #2',
			desc: 'Outside Entrance -> Stairs -> Balcony -> Connector -> Cantine -> Stairs -> Table Room -> Hostage',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'agency'] },
			],
		},
		{
			name: 'Agency CT: Plan #3',
			desc: 'Camp Toilets until 1:00',
			conditions: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['map', 'agency'] },
			],
		},
	],
	tags: {
		pistol: { type: 'side', ct: ['USP-S/P2000', 'Five-SeveN/CZ75-Auto'], t: ['Glock-18', 'Tec-9/CZ75-Auto'], any: ['Dual Berettas', 'P250', 'Desert Eagle/R8 Revolver'] },
		shotgun: { type: 'side', ct: ['MAG-7'], t: ['Sawed-off'], any: ['Nova', 'XM1014'] },
		lmg: ['M249', 'Negev'],
		heavy: [
			{ type: 'tag', tag: 'shotgun' },
			{ type: 'tag', tag: 'lmg' },
		],
		smg: { type: 'side', ct: ['MP9'], t: ['MAC-10'], any: ['PP-Bizon', 'UMP-45', 'MP7/MP5-SD', 'P90'] },
		assault: { type: 'side', ct: ['FAMAS', 'M4A4/M4A1-S', 'AUG'], t: ['GALIL', 'AK-47', 'SG 553'] },
		sniper: { type: 'side', ct: ['SCAR-20'], t: ['G3SG1'], any: ['SSG 08', 'AWP'] },
		rifle: [
			{ type: 'tag', tag: 'assault' },
			{ type: 'tag', tag: 'sniper' },
		],
		gun: [
			{ type: 'tag', tag: 'pistol' },
			{ type: 'tag', tag: 'heavy' },
			{ type: 'tag', tag: 'smg' },
			{ type: 'tag', tag: 'rifle' },
		],
		site: ['A', 'B'],
		color: ['Yellow', 'Orange', 'Green', 'Blue', 'Purple'],
		playerRole: { type: 'side', ct: [], t: [{ type: 'gamemode', defuse: 'the bomb carrier' }], any: [] },
		score: [
			'the player with the most kills',
			'the player with the least kills',
			'the player with the highest score',
			'the player with the lowest score',
			'the player with the highest headshot %',
			'the player with the lowest headshot %',
			'the player with the highest ADR',
			'the player with the lowest ADR',
			'the player with the highest K/D',
			'the player with the lowest K/D',
			'the player with the most MVPs',
			'the player with the least MVPs',
		],
		money: ['the player with the most money', 'the player with the least money'],
		player: [
			{ type: 'tag', tag: 'color' },
			{ type: 'tag', tag: 'playerRole' },
			{ type: 'tag', tag: 'score' },
			{ type: 'tag', tag: 'money' },
		],
		direction: ['left', 'right'],
		attacker: {
			type: 'cond',
			operator: 'or',
			operands: [
				{ type: 'tag', tag: 'tDefuse' },
				{ type: 'tag', tag: 'ctHostage' },
			],
		},
		defender: {
			type: 'cond',
			operator: 'or',
			operands: [
				{ type: 'tag', tag: 'ctDefuse' },
				{ type: 'tag', tag: 'tHostage' },
			],
		},
		ctHostage: {
			type: 'cond',
			operator: 'and',
			operands: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['gamemode', 'hostage'] },
			],
		},
		tHostage: {
			type: 'cond',
			operator: 'and',
			operands: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['gamemode', 'hostage'] },
			],
		},
		ctDefuse: {
			type: 'cond',
			operator: 'and',
			operands: [
				{ type: 'cond', operator: 'setting', operands: ['side', 'ct'] },
				{ type: 'cond', operator: 'setting', operands: ['gamemode', 'defuse'] },
			],
		},
		tDefuse: {
			type: 'cond',
			operator: 'and',
			operands: [
				{ type: 'cond', operator: 'setting', operands: ['side', 't'] },
				{ type: 'cond', operator: 'setting', operands: ['gamemode', 'defuse'] },
			],
		},
	},
};
