//GHOST-MD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUUzeEhZV21DUXhVc3ZROUM3bkVTU3d3Q2Q4c0IrRlluMStocjdiTThXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHdmcER2ZFJEQ1o0V3psQ3dnbHdUSi9Cb0pmWWlJNU5rTDNlNUJQVTFWTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRzZSaFVaVXcxc01yVjU1UzVvRzcwUTJDUHlhTWVWODhUZG9yNUVvcTBBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiWmRtNUR6V3g1czlXbG01OW90T084UEk2QzNDVVoyZFVGNlRycUtTcFRVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldEcEx2NHdXdGg1SE8rYXRVbFIzaGY0Ylc5a00zRTBEUnNEemtkNXVvMXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjF6Z3dTeDMwQS9YN0V5QWZEZm9MSjE4WG90aWVLeWljNktxYXJDSnM2VGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUdQL3VtWHcwWW41MHhOUFpHaDNoZW5ZOTVDemJic09DaFpaRWJGejBsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVld2aytXaDRlN3grS3gvdU1GektGWmhYaHpndG9nenVuYzE1SkthNk1SND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQ0Vk93SlRndlEyalFLMkhPSGxyTE1uenBKZWs3REw1eFJITDFZckR1TTl3RVVyZ25lMkw5b0xGc09scVVGS3daSkV6VVFVck96QkNya3h6aHYvS0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA3LCJhZHZTZWNyZXRLZXkiOiIvMzFwVmVLSCt6aHRmdE5HVFJZRXRMZ3BCa29kNmxENFQ1Y2NoRCtKOTR3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVb0Rla0wtR1M2aThjTkw4cklNYmdBIiwicGhvbmVJZCI6IjRmNDY5OTgzLTEwZDctNGEzYS1iOWFmLTBlYmIxYzYxNjFiMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvV2Qxd1ZRRGpZYzUxaG1GVFNUYUVUMWhXYUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFF1YVZTdkVrekZsdjEyUWhuUnVycGcwc3RVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkREUEZBWEZUIiwibWUiOnsiaWQiOiI5NDc0MTE0MDYyMDo4OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCIIPCdkIDwnZCMIFxuXG7wnZCOXG7wnZCLXG7wnZCDXG5cblxuXG7wnZCKXG7wnZCIXG7wnZCNXG7wnZCGXG5cblxuXG7wnZCGXG7wnZCHXG7wnZCOXG7wnZCSXG7wnZCTIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJV3FpOElCRUx6c3pMd0dHQmdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIveGhDQit3ZXRaZ3pkeWhGK0JpWktheFV2WFRoS3NldVlBNTF3Ujl2UFVjPSIsImFjY291bnRTaWduYXR1cmUiOiJqbkZ3UVJuOTRuWkQ0QTBnUFd1d0RQM203Q2ZUYnNrKzhBdkRJWE9QR2lsVWVPT1JETVBhS2ZZenVyTjZIdlF3V3RvU1plcWtlbGlwWDEvbzBEZHlBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicjdYcEx5OFVCMGVEelJ5ZHlGd0xZTGhmTEJoMlFiZHhDZnNGelFFUjBCZEprd0M5Szl1czA3N21DSW5aTXF2OXNQdmIwTzd0eExDTU80K0NVR3RuREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MTE0MDYyMDo4OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmOFlRZ2ZzSHJXWU0zY29SZmdZbVNtc1ZMMTA0U3JIcm1BT2RjRWZiejFIIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM3NzAwOTM4fQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "94789958225";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://files.catbox.moe/41sdu1.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://files.catbox.moe/41sdu1.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`GHOST-MD`",
  author: process.env.PACK_AUTHER || "GHOST-MD",
  packname: process.env.PACK_NAME || "GHOST",
  botname: process.env.BOT_NAME || "GHOST-MD",
  ownername: process.env.OWNER_NAME || "GHOST",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/KIND-GHOST/GHOST-MD-V3.git";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaobbRhG8l5Mmhh2IA3O";
global.website = process.env.GURL || "https://chat.whatsapp.com/DhCdan60qzH0yoIxmybU3i";
global.devs = "94741140620";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
