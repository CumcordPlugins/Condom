(function(r,t){"use strict";const a=window._,o=r.findByProps("ApplicationStreamFPSButtons");var s=()=>({onLoad(){const e=o.ApplicationStreamSettingRequirements;this.original=a.cloneDeep(e);for(let n=0;n<e.length;n++)for(const i in e[n])~["resolution","fps"].indexOf(i)||(delete e[n][i],t.log("Cumcake has been loaded!"))},onUnload(){t.log("Cumcake has been un-loaded!"),o.ApplicationStreamSettingRequirements=this.original}});return s})(cumcord.modules.webpack,cumcord.utils.logger);