
let object = {
technician: 'Leo',
dateOfReport: '11-16-2018'
vesselInformation: {
	owner: 'Bill Keating',
	vesselModel: null,
	hullNumber: null,
	engineSerial: null,
	engineHours: null
},
hullCondition: {
	waterlineCondition: true,
	hullDamage: true,
	deckHardware: 'Port Side Winch Stuck on'
},
riggingHardware: {
	hardwareCondition: true,
	riggingCondition: true
},	
helmArea: {
	steeringSystem: true,
	electronicsCondition: true
},
engineCompartment: {
	thruhulls: true,
	seaStrainer: true,
	starterBatteryCables: true,
	alternatorBatteryCables: true,
	groundingCables: true,
	engineHarness: true,
	auxWiring: true,
	bilge: true,
	shaft: true,
	oillevel: true,
	transoillevel: true,
	coolantlevel: true,
	expansiontanklevel: true,
	belts: true,
	oilcooler: true,
	watercooler: true,
	rawwaterpump: true,
	exhaustSystem: true
},
runEngine: {
	engineAlarms: true,
	runEngine: true,
	exhaustWater: true,
	exhaustColor: true,
	transmission: true
},
electricalSystem: {
	shorePowerChord: true,
	shorePowerRecepitcle: true,
	polarity: true,
	chargingSystem: true,
	inverterSystem: true,
	batteryBanks: true,
	batteryBanksSecure: true,
	batteryCablesSecure: true,
	batteryCables: true,
	batterySwitches: true,
	dCElectricalPanel: true,
	aCElectricalPanel: true,
	gauges:
},
allLights: {
	lights: true
},
audioSystem: {
	headUnit: true,
	speakers: true
},
mainGenerator: {
 	genThruHulls: true,
	genSeaStrainer:
	genStarterBatteryCables: true, 
	generatorCables: true,
	genGroundingCables: true,
	genEngineHarness: true,
	genAuxWiring: true,
	genBilge: true,
	genOilLevel: true,
	genCoolantLevel: true,
	genExpansionTankLevel: true,
	genBelts: true,
	genOilCooler: true,
	genWaterCooler: true,
	genRawWaterPump: true,
	genExhaustSystem: true
},
runGenerator: {
	genEngineAlarms: true,
	genRunEngine: true,
	genExhaustWater: true,
	genExhaustColor: true
},
navigationEquipment: {
	vhf: true,
	mfds: true,
	compasses: true,
	navLights: true,
	wind: true,
	depth: true,
	gps: true,
	ais: true,
	autopilot: true
},
waterSystems: {
 	testToilets: true,
	maceratorPump: true,
	holdingTank: true,
	waterSupply: true,
	thruHulls: true,
	waterTank: true,
	waterHoses: true,
	sanitaryHoses: true,
	reportLeaks: true
},
steeringSystem: {
	steering: true,
	chain: true,
	hyrdraulic: true,
	shaft: true, 
	autopilot: true
},
dCEquipment: {
	waterPressure: true,
	bilgePumps: true,
	dcRefrigerator: true,
	tv: true,
	dvd: true,
	stove: true,
	propane: true
},
aCAppliances: {
	acRefrigerator: true,
	microwave: true
},
anchorEquipment: {
	anchorWindlass: true,
	anchorGear: true
},
waterHeater: {
	testElectrical: true,
	testConvection: true
},
airConditioning: {
	testHeat: true,
	testCold: true
}
}

export default object;
