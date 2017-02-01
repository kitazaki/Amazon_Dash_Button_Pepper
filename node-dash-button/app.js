const DashButton = require("dash-button");
//Wilkinson
const PHY_ADDR1 = "34:d2:70:87:b9:59";
//fabreze-pay
const PHY_ADDR2 = "88:71:e5:30:07:9d";
//kyukyutto
const PHY_ADDR3 = "88:71:e5:eb:9b:49";
//fabreze-nomi
const PHY_ADDR4 = "ac:63:be:d8:b3:6b";
//tennensui
const PHY_ADDR5 = "34:d2:70:f3:4f:0c";
//sheba
const PHY_ADDR6 = "34:d2:70:8c:0a:97";
//evian
const PHY_ADDR7 = "34:d2:70:95:aa:43";
//evian
const PHY_ADDR8 = "88:71:e5:19:65:bc";
var logger = require('/home/root/amazon-dash/logger');
let button1 = new DashButton(PHY_ADDR1);
let button2 = new DashButton(PHY_ADDR2);
let button3 = new DashButton(PHY_ADDR3);
let button4 = new DashButton(PHY_ADDR4);
let button5 = new DashButton(PHY_ADDR5);
let button6 = new DashButton(PHY_ADDR6);
let button7 = new DashButton(PHY_ADDR7);
let button8 = new DashButton(PHY_ADDR8);

console.log("I'm listening'")
let i = 0;

button1.addListener(() => {
	i++;
	console.log("["+i+"] It works.");
	logger.request.info("["+i+"]["+PHY_ADDR1+"] It works.");
	const exec = require('child_process').exec;
	exec('cd /home/root; java -cp java-naoqi-sdk-2.4.3.28-linux32.jar:. SayHello1', (err, stdout, stderr) => {
		if (err) { console.log(err); }
			console.log(stdout);
	        }
	);
	console.log("["+(i)+"] It is executed.");
	logger.request.info("["+(i)+"]["+PHY_ADDR1+"] It is executed.");
});

button2.addListener(() => {
	i++;
	console.log("["+i+"] It works.");
	logger.request.info("["+i+"]["+PHY_ADDR2+"] It works.");
	const exec = require('child_process').exec;
	exec('cd /home/root; java -cp java-naoqi-sdk-2.4.3.28-linux32.jar:. SayHello2', (err, stdout, stderr) => {
		if (err) { console.log(err); }
			console.log(stdout);
	        }
	);
	console.log("["+(i)+"] It is executed.");
	logger.request.info("["+(i)+"]["+PHY_ADDR1+"] It is executed.");
});

button3.addListener(() => {
	i++;
	console.log("["+i+"] It works.");
	logger.request.info("["+i+"]["+PHY_ADDR2+"] It works.");
	const exec = require('child_process').exec;
	exec('cd /home/root; java -cp java-naoqi-sdk-2.4.3.28-linux32.jar:. SayHello3', (err, stdout, stderr) => {
		if (err) { console.log(err); }
			console.log(stdout);
	        }
	);
	console.log("["+(i)+"] It is executed.");
	logger.request.info("["+(i)+"]["+PHY_ADDR1+"] It is executed.");
});

button4.addListener(() => {
	i++;
	console.log("["+i+"] It works.");
	logger.request.info("["+i+"]["+PHY_ADDR2+"] It works.");
	const exec = require('child_process').exec;
	exec('cd /home/root; java -cp java-naoqi-sdk-2.4.3.28-linux32.jar:. SayHello4', (err, stdout, stderr) => {
		if (err) { console.log(err); }
			console.log(stdout);
	        }
	);
	console.log("["+(i)+"] It is executed.");
	logger.request.info("["+(i)+"]["+PHY_ADDR1+"] It is executed.");
});

button5.addListener(() => {
	i++;
	console.log("["+i+"] It works.");
	logger.request.info("["+i+"]["+PHY_ADDR2+"] It works.");
	const exec = require('child_process').exec;
	exec('cd /home/root; java -cp java-naoqi-sdk-2.4.3.28-linux32.jar:. SayHello5', (err, stdout, stderr) => {
		if (err) { console.log(err); }
			console.log(stdout);
	        }
	);
	console.log("["+(i)+"] It is executed.");
	logger.request.info("["+(i)+"]["+PHY_ADDR1+"] It is executed.");
});

button6.addListener(() => {
	i++;
	console.log("["+i+"] It works.");
	logger.request.info("["+i+"]["+PHY_ADDR2+"] It works.");
	const exec = require('child_process').exec;
	exec('cd /home/root; java -cp java-naoqi-sdk-2.4.3.28-linux32.jar:. SayHello6', (err, stdout, stderr) => {
		if (err) { console.log(err); }
			console.log(stdout);
	        }
	);
	console.log("["+(i)+"] It is executed.");
	logger.request.info("["+(i)+"]["+PHY_ADDR1+"] It is executed.");
});

button7.addListener(() => {
	i++;
	console.log("["+i+"] It works.");
	logger.request.info("["+i+"]["+PHY_ADDR2+"] It works.");
	const exec = require('child_process').exec;
	exec('cd /home/root; java -cp java-naoqi-sdk-2.4.3.28-linux32.jar:. SayHello7', (err, stdout, stderr) => {
		if (err) { console.log(err); }
			console.log(stdout);
	        }
	);
	console.log("["+(i)+"] It is executed.");
	logger.request.info("["+(i)+"]["+PHY_ADDR1+"] It is executed.");
});

button8.addListener(() => {
	i++;
	console.log("["+i+"] It works.");
	logger.request.info("["+i+"]["+PHY_ADDR2+"] It works.");
	const exec = require('child_process').exec;
	exec('cd /home/root; java -cp java-naoqi-sdk-2.4.3.28-linux32.jar:. SayHello8', (err, stdout, stderr) => {
		if (err) { console.log(err); }
			console.log(stdout);
	        }
	);
	console.log("["+(i)+"] It is executed.");
	logger.request.info("["+(i)+"]["+PHY_ADDR1+"] It is executed.");
});

//button2.addListener(() => {
//	i++;
//	console.log("["+i+"] It works.");
//	const exec = require('child_process').exec;
//	exec('/usr/bin/python /home/root/test2.py', (err, stdout, stderr) => {
//		if (err) { console.log(err); }
//			console.log(stdout);
//		}
//	);
//	console.log("["+i+"] It is executed.");
//});

