const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_59_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDc0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDc3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDkyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDI2LFxuICAgICAgICAzMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDczLFxuICAgICAgICAzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICA4LFxuICAgICAgICAzNixcbiAgICAgICAgMjU1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAzLFxuICAgICAgICA1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNixcbiAgICAgICAgMTExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDkwLFxuICAgICAgICA1OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDczLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuOFNpR1RSdWlKUTVBRlB3V1YvTDB2dmdMOEJpNzRULzBJVEIyWFk1MEJvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJMERQY05aT1RhZWpCMGRydG9aVUlRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBiZjRlMDI0LTVhNTUtNDE1Ny1hMjc1LTdlOWZmNDU0YjE0YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTUsXG4gICAgICA1NyxcbiAgICAgIDE3LFxuICAgICAgMTA5LFxuICAgICAgMTg1LFxuICAgICAgMTMyLFxuICAgICAgMjEzLFxuICAgICAgMTExLFxuICAgICAgMTQyLFxuICAgICAgMTI5LFxuICAgICAgMjA5LFxuICAgICAgMTY5LFxuICAgICAgMTAwLFxuICAgICAgMTE4LFxuICAgICAgMTgxLFxuICAgICAgNixcbiAgICAgIDE5NyxcbiAgICAgIDIzMixcbiAgICAgIDIwLFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NCxcbiAgICAgIDEwOSxcbiAgICAgIDE5MixcbiAgICAgIDE1MCxcbiAgICAgIDE4NyxcbiAgICAgIDkyLFxuICAgICAgNCxcbiAgICAgIDE0NixcbiAgICAgIDI1MSxcbiAgICAgIDEzLFxuICAgICAgMTkxLFxuICAgICAgMTY2LFxuICAgICAgMTMsXG4gICAgICAyMDAsXG4gICAgICAzMixcbiAgICAgIDE2NyxcbiAgICAgIDExNyxcbiAgICAgIDE0MixcbiAgICAgIDE3OSxcbiAgICAgIDIwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDSDNHQlJMVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTMwNDc2OTc2OjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQmFkIE11bmRhXCIsXG4gICAgXCJsaWRcIjogXCIyNzc2ODI5NTY4MTIzMDM6NDBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTm1vMUpBQkVLMkx1clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4bzNrZDk1NlhseWN0VXRsUTN3UWdzQjZYQ2NyU1FMeHN0S1MyVXBGUGhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZkWnFLM3Bic3pJQ2JSalpSdmRWakJqMU1HY3ZWVHppRi9FTEZ1dVFSZGxJendXaXdsT3A4aW5FVTc3b09TNGM4SGdqYS91UWR4aURadndGTUMxSkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInlGeVl3K1FPMjNNSmxXbm9RNzE3Rk5ZOE9kQXN6YUJ3eEFSSmxCd0YxYVBqNmZaQzlLMWJBc1NMM3NCVDU3dkMyRmE2RTVRYk52aU9TL0M4NzJzVkFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzEzMDQ3Njk3Njo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDYxNjM2OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVAvWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUC9YLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
