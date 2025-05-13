// <========== Client ==========> \\
const {
  Client,
  Collection,
  MessageActionRow,
  MessageSelectMenu,
  MessageButton,
  Modal,
  TextInputComponent,
  MessageEmbed,
    Interaction,
    Permissions,
    MessageFlags, 
    GatewayIntentBits,
} = require("discord.js");
const fs = require(`node:fs`);
const client = new Client({
  intents: [3276799],
}).setMaxListeners(0);
const { joinVoiceChannel } = require("@discordjs/voice");
const { inviteTracker } = require("discord-inviter");
const translate = require("@iamtraction/google-translate");
const discordTranscripts = require('discord-html-transcripts'); 
const axios = require(`axios`);
module.exports = client;
client.commands = new Collection();
client.cache = {
  guilds: {},
  channels: {},
};
const { prefix, Token } = require("./config.json");
const db = require("pro.db");
const ms = require("ms");

// <========== Status ==========>

client.on("ready", async () => {
  //[]\\
  const statuses = [`سرعة`, `دقة`, `امان`, `فلوريدا ستور`];
  console.log(`================`);
  console.log(``);
  console.log(`Bot Name : ${client.user.username}`);
  console.log(`Bot Tag : ${client.user.tag}`);
  console.log(`Bot Id : ${client.user.id}`);
  console.log(`Servers Count : ${client.guilds.cache.size}`);
  console.log(
    `Users Count : ${client.guilds.cache
      .reduce((total, guild) => total + guild.memberCount, 0)
      .toLocaleString()}`,
  );
  console.log(`bot online`);
  console.log(`================`);
  //[]\\
  const updateIntervalInSeconds = 2;
  const updateIntervalInMilliseconds = updateIntervalInSeconds * 1000;

  const updateStatus = () => {
    const randomIndex = Math.floor(Math.random() * statuses.length);

    const selectedStatus = statuses[randomIndex];
    client.user.setActivity(selectedStatus, {
      type: `STREAMING`,
      url: `https://www.twitch.tv/FloradiStore`,
    });
  };

  setInterval(updateStatus, updateIntervalInMilliseconds);
});

// <========== Vars ==========>



 
  
var azkar = [
  `أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ
  اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَg�ُوَ الْعَلِيُّ الْعَظِيمُ. `,
  `قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ`,
  `بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
  قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ. 
  `,
  `اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ. 
  `,
  `اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ. `,
  `سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه.`,
  `أَمْسَيْنَا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ. `,
  `اللّهُـمَّ بِكَ أَمْسَـينا وَبِكَ أَصْـبَحْنا، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ الْمَصِيرُ. `,
  `بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم.`,
  `حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم. `,
  `اللّهُـمَّ ما أَمسى بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـ��َكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر. `,
  `اللt�هُـمَّ إِنِّـي أَمسيتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك.`,
  `رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً. `,
  `اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ .`,
  `أَمْسَيْـنا وَأَمْسـى المـلكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذهِ اللَّـيْلَةِ وَخَـيرَ ما بَعْـدَهـا ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذهِ اللَّـيْلةِ وَشَرِّ ما بَعْـدَهـا ، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر. `,
  `بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
  قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ. `,
  `أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ
  آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَّسِينَآ أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ`,
  `اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي. `,
  `يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْ`,
  `أَمْسَيْنا وَأَمْسَى الْمُلْكُ للهِ رَبِّ الْعَالَمَيْنِ، اللَّهُمَّ إِنَّي أسْأَلُكَ خَيْرَ هَذَه اللَّيْلَةِ فَتْحَهَا ونَصْرَهَا، ونُوْرَهَا وبَرَكَتهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فيهِا وَشَرَّ مَا بَعْدَهَا. `,
  `اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه ، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم. `,
  `أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق. `,
  `اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. `,
  `اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.`,
  `اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ. `,
  `أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ. `,
  `يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ. `,
  `لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ. `,
  `اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، عَلَيْكَ تَوَكَّلْتُ ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ , مَا شَاءَ اللَّهُ كَانَ ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ , أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا , اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي ، وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا ، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ. `,
  `سُبْحـانَ اللهِ وَبِحَمْـدِهِ. `,
  `
  بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ﴿1﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿2﴾ الرَّحْمَنِ
  الرَّحِيمِ ﴿3﴾ مَالِكِ يَوْمِ الدِّينِ ﴿4﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ
  نَسْتَعِينُ ﴿5﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿6﴾ صِرَاطَ الَّذِينَ
  أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿7﴾.`,
  `اللَّهُمَّ إِنِّي أَسْأَلُكَ بِرَحْمَتِكَ الَّتِي وَسِعَتْ كُلَّ شَيْءٍ أَنْ تَغْفِرَ لِي.`,
  `سُبْحانَ رَبِّيَ الْعَظِيمِ. ثلاث مرَّاتٍ.
  `,
  `سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلاَئِكةُ مِنْ خِيفَتِهِ.`,
  `لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.`,
  `
  اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي.`,
  `
  سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَاللَّهُ أَكْبَ �ُ ثلاثاً وثلاثين لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.`,
  `جَزَاكَ اللَّهُ خَيْراً.`,
  `الباقيات الصالحات : سبحان الله والحمد لله ، ولا إله إلا الله ،والله أكبر ،و لا حول ولا قوة إلا بالله`,
  `لاَ إِلَهَ إِلاَّ اللَّهُ الْوَاحِدُ الْقَهّارُ، رَبُّ السَّمَوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا الْعَزيزُ الْغَفَّارُ.`,
  `بِسْمِ اللَّهِ ثَلَاثًا، 6�5�عُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ سَبْعَ مَرَّاتٍ.`,
  `وَقَالَ صلى الله عليه وسلم: أَقْرَبُ مَا يَكُونُ الْعَبْدُ مِنْ رَبِّهِ وَهُوَ سَاجِدٌ فَأَكثِرُوا الدُّعَاءَ.`,
  `اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.`,
  `الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي مِمَّا ابْتَلاَكَ بِهِ، وَفَضَّلَنِي عَلَى كَثِيرٍ مِمَّنْ خَلَقَ تَفْضِيلاً.`,
  `رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً.`,
  `
  اللَّهُمَّ لَكَ الْحَمْدُ، أَنْتَ نُورُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ، [وَلَكَ الْحَمْدُ أَنْتَ رَبُّ السَّمَواتِ وَالأَرْضِ وَمَنْ فِيهِنَّ] [وَلَكَ الْحَمْدُ لَكَ مُلْكُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ] [وَلَكَ الْحَمْدُ أَنْتَ مَلِكُ السَّمَوَاتِ وَالأَرْضِ] [وَلَكَ الْحَمْدُ] [أَنْت الحق، ووعدك الحق، وقولك الحق، ولقاؤك الحق، والجنة حق، والنار حق، والنبيون حق، ومحمد صلى الله عليه وسلم حق، والساعة حق] [اللهم لك أسلمت، وعليك توكلت، وبك آمنت، وإليك أنبت، وبك خاصمت، وإليك حاكمت. فاغفر لي ما قدمت، وما أخرت، وما أسررت، وما أعلنت] [وما أنت أعلم به مني] [أنت المقدم، وأنت المؤخر لا إله إلا أنت] [أنت إلهي لا إله إلا أنت] [ولا حول ولا قوة إلا بالله].`,
  `سُبْحـانَ اللهِ وَبِحَمْـدِهِ.`,
  `أَفْطَرَ عِنْدَكُمُ الصَّائِمُونَ، وَأَكَلَ طَعَامَكُمُ الْأَبْرَارُ، وَصَلَّتْ عَلَيْكُمُ الْمَلاَئِكَةُ.`,
  `اللّهُـمَّ بِكَ أَمْسَـينا وَبِكَ أَصْـبَحْنا، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ الْمَصِيرُ.`,
  `
  اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أَضِلَّ، أَوْ أُضَلَّ، أَوْ أَزِلَّ، أَوْ أُزَلَّ، أَوْ أَظْلِمَ، أَوْ أُظْلَمَ، أَوْ أَجْهَلَ، أَوْ يُجْهَلَ عَلَيَّ.`,
  `
  أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ غَضَبِهِ وَعِقَابِهِ، وَشَرِّ عِبَادِهِ، وَمِنْ هَمَزَاتِ الشَّياطِينِ وَأَنْ يَحْضُرُونِ.`,
  `زَوَّدَكَ اللَّهُ التَّقْوَى، وَغَفَرَ ذَنْبَكَ، وَيَسَّرَ لَكَ الخَيْرَ حَيْثُ ما كُنْتَ.`,
  `اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، عَلَيْكَ تَوَكَّلْتُ ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ , مَا شَاءَ اللَّهُ كَانَ ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ , أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا , اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسي ، ومن شر كل دابة أنت آخذ بناصيتها ، إن ربي على صراط مستقيم.
  `,
  ` الرَّحْمَنِ الرَّحِيمِ ﴿1﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿2﴾ الرَّحْمَنِ
  الرَّحِيمِ ﴿3﴾ مَالِكِ يَوْمِ الدِّينِ ﴿4﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ
  نَسْتَعِينُ ﴿5﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿6﴾ صِرَاطَ الَّذِينَ
  أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿7﴾.`,
  `
  يَقُولُ: وَأَنَا أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ، رَضِيتُ بِاللَّهِ رَبَّاً، وَبِمُ��َمَّدٍ رَسُولاً، وَبِالْإِسْلاَمِ دِينَاً يَقُولُ ذَلِكَ عَقِبَ تَشَهُّدِ الْمُؤَذِّنِ.`,
  `رَبَّنَا وَلَكَ الْحَمْدُ، حَمْداً كَثيراً طَيِّباً مُبارَكاً فِيهِ.
  `,
  `
  أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّةِ مِنْ غَضَبِهِ وَعِقَابِهِ ، وَشَرِّ عِبَادِهِ ، وَمَنْ هَمَزَاتِ الشَّيَاطِينِ ، وَأَنْ يَحْضُرُونِ.`,
  `سُبْحانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلاَ إِلَهَ غَيْرُكَ.
  `,
  `تُبْلِي وَيُخْلِفُ اللَّهُ تَعَالَى`,
  `
  سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه`,
  `
  وَقَالَ صلى الله عليه وسلم: يَا عَبْدَ اللَّهِ بْنَ قَيْسٍ أَلاَ أَدُلُّكَ عَلَى كَنْزٍ مِنْ كُنُوزِ الْجَنَّةِ؟ فَقُلْتُ: بَلَى يَا رَسُولَ اللَّهِ، قَالَ: قُلْ لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ.
  `,
  `
  سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَاللَّهُ أَكْبَرُ ثلاثاً وثلاثين لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.`,
];
var color = "#9840d2";
var Channels = [
  `1332274392750755870`,
  `1368310112653021254`,
  `1342471243424600105`,
  `1306373224564527205`,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
];
var DevS = [`1135363230018064425`, `582995548706045973`, `1004803068849831976`, ``, ``, ``, ``, ``, ``];
var link = `https://discord.gg/WntnYpScMX`;
var Tag =  `𓆩𝐅𝐒𓆪 ・`;
var line = `https://i.top4top.io/p_3410jfdre0.jpg`;
var QrPhoto = ``;
var ServerLogo = ``;
var PngLogo = ``;
var ServerBanner = ``;
var VoiceChannel = `1343542767464353823`;
var BoostRoom = `1334562892221124649`;
var EmojiRoom = ``;
var ApplyRoom = `1368422705048719471`;
var OrderRoom = `1332273891560652881`;
var OrderRoom2 = `https://discord.com/channels/1306351489924730941/1332273891560652881`;
var SupportRoom = `1368422705048719471`;
var AzkarRoom = `1368371850232463391`;
var feedback = `1306373207250571325`;
var FeedBackRoom = `1306373207250571325`;
var SuggestionRoom = ``;
var OffersRoom = `1368310112653021254`;
var WelcomeRoom = `1306373712534175794`;
var CmdRoom = ``;
var TransferRoom = `1342481544534691840`;
var MediatorRoom = `1368496865988841492`;
var WarnRoom = `1308916970933981254`;
var TaxRoom = `1342481564759621693`;
var WelcomeSellerRoom = `1308918350864191498`;
var UpgradeRoom = `1308917044179239073`;
var NumberRoom = ``;
var TeamRoom = `1343947313034297395`;
var TeamRules = `1343949814949482506`;
var TeamNews = `1343948561330606091`;
var AdsTicketRoom = `1308755331836416021`;
var AdsGiftRoom = `1309216884440432662`;
var OfferLogRoom = `1368338575325659289`;
var RespondLogRoom = `1368339006311497778`;
var FedLogRoom = `1368339134695079946`;
var CloseLogRoom = `1368338833988648960`;
var RenameLogRoom = `1368338510821720064`;
var WarnLogRoom = `1368338788299968572`;
var ReLogRoom = `1368338632951468134`;
var ClaimLogRoom = `1368339669615509514`;
var ApplyLogRoom = `1309878628359864391`;
var Idbank = `1283175070918774906`;
var ApplyCategory = `1308757613638582282`;
var OrderCategory = `1322180521668775957`;
var SupportCategory = `1308752431823196211`;
var AdsCategory = `1308755277906182194`;
var ApplyTest = `1294707429312954458`;
var OrderSeller = `1323445068358750228`;
var WarnRoleId = `1306759163321385020`;
var TicketToolId = `557628352828014614`;
var TeamRole = `1323445068358750228`;
var SupportRole = `1306759163321385020`;
var ClientRole = `1306517287943143424`;
var OldSellerRole = `1368340974224408596`;
var MemberRoleId = `1306388458142433301`;
var NotificationRoles = `1306375265831620681`;



var DevName = `.%Star`;
var DevProfile = `https://discord.com/users/582995548706045973`;
var ServerSupport = `https://discord.gg/SJArDNqpeq`;
var SlowModeTime = 20;
var databasePath = `./database.json`;

// <========== Points ==========>

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.channel.name.startsWith("ticket")) return;
  if (!message.member.roles.cache.has(TeamRole)) return;

  let mss = ["اتفضل", "كيف اقدر اساعدك", "تفضل", "أتفضل"];
  if (!mss.includes(message.content)) return;

  db.add(`respond_${message.guild.id}_${message.author.id}`, 2);

  let levelll = await db.get(`level_${message.author.id}`);
  if (levelll == null) {
    await db.set(`level_${message.author.id}`, {
      xp: 0,
      nid: message.author.id,
    });
  }

  let levell = await db.get(`level_${message.author.id}`);
  let level = levell.xp;

  await db.set(`level_${message.author.id}`, {
    xp: Math.floor(level + 2),
    nid: message.author.id,
  });

  message.guild.channels.cache.get(RespondLogRoom).send({
    embeds: [
      new MessageEmbed()
        .setColor(color)
        .setTitle("📢 New Notification")
        .setDescription(`> ${message.author} made a new respond`),
    ],
  });
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if(message.channel.name.startsWith("ticket")) return;
  if (!message.member.roles.cache.has(SupportRole)) return;

  const mss = ["$close"];
  if (!mss.includes(message.content)) return;
  await db.add(`closedtickets_${message.guild.id}_${message.author.id}`, 3);

  let levelll = await db.get(`support_${message.author.id}`);
  if (levelll == null) {
    await db.set(`support_${message.author.id}`, {
      poi: 0,
      id: message.author.id,
    });
  }

  let levell = await db.get(`support_${message.author.id}`);
  let level = levell.poi;

  await db.set(`support_${message.author.id}`, {
    poi: Math.floor(level + 3),
    id: message.author.id,
  });

  message.guild.channels.cache.get(CloseLogRoom).send({
    embeds: [
      new MessageEmbed()
        .setColor(color)
        .setTitle("📢 New Notification")
        .setDescription(`> ${message.author} made a new close`),
    ],
  });
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.member.roles.cache.has(ApplyTest)) return;

  const mss = ["$dn"];
  if (!mss.includes(message.content)) return;
  await message.channel.send(`$close`)
  await message.channel.send(`$transcript`)
  await message.channel.send(`$delete`)

  await db.add(`applytickets_${message.guild.id}_${message.author.id}`, 7);

  let levelData = await db.get(`support_${message.author.id}`);
  if (!levelData) {
    levelData = { poi: 0, id: message.author.id };
    await db.set(`support_${message.author.id}`, levelData);
  }

  const newPoints = Math.floor(levelData.poi + 7);
  await db.set(`support_${message.author.id}`, {
    poi: newPoints,
    id: message.author.id,
  });

  const applyLogChannel = message.guild.channels.cache.get(ApplyLogRoom);
  if (applyLogChannel) {
    applyLogChannel.send({
      embeds: [
        new MessageEmbed()
          .setColor(color)
          .setTitle("📢 New Notification")
          .setDescription(`> ${message.author} made a new apply`),
      ],
    });
  } else {
    console.error("Apply log channel not found.");
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.member.roles.cache.has(TeamRole)) return;

  const mss = ["re", "Re", "RE"];
  if (!mss.includes(message.content)) return;

  await db.add(`retickets_${message.guild.id}_${message.author.id}`, 3);

  let levelData = await db.get(`level_${message.author.id}`);
  if (!levelData) {
    levelData = { poi: 0, id: message.author.id };
    await db.set(`level_${message.author.id}`, levelData);
  }

  const newPoints = Math.floor(levelData.poi + 3);
  await db.set(`level_${message.author.id}`, {
    poi: newPoints,
    id: message.author.id,
  });

  const reLogChannel = message.guild.channels.cache.get(ReLogRoom);
  if (reLogChannel) {
    reLogChannel.send({
      embeds: [
        new MessageEmbed()
          .setColor(color)
          .setTitle("📢 New Notification")
          .setDescription(`> ${message.author} made a new re`),
      ],
    });
  } else {
    console.error("Re log channel not found.");
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.member.roles.cache.has(SupportRole)) return;

  const mss = ["$rename"];
  const containsCommand = mss.some((ms) => message.content.includes(ms));
  if (!containsCommand) return;
  if (!message.channel.name.startsWith("ticket")) return;

  await db.add(`renamedtickets_${message.guild.id}_${message.author.id}`, 5);

  let levelData = await db.get(`support_${message.author.id}`);
  if (!levelData) {
    levelData = { poi: 0, id: message.author.id };
    await db.set(`support_${message.author.id}`, levelData);
  }

  const newPoints = Math.floor(levelData.poi + 5);
  await db.set(`support_${message.author.id}`, {
    poi: newPoints,
    id: message.author.id,
  });

  const renameLogChannel = message.guild.channels.cache.get(RenameLogRoom);
  if (renameLogChannel) {
    renameLogChannel.send({
      embeds: [
        new MessageEmbed()
          .setColor(color)
          .setTitle("📢 New Notification")
          .setDescription(`> ${message.author} made a new rename`),
      ],
    });
  } else {
    console.error("Rename log channel not found.");
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.member.roles.cache.has(WarnRoleId)) return;
  if (message.channel.id !== WarnRoom) return;
  db.add(`warngived_${message.guild.id}_${message.author.id}`, 1);

  let levelll = db.get(`support_${message.author.id}`);
  if (levelll == null) {
    db.set(`support_${message.author.id}`, {
      poi: 0,
      id: message.author.id,
    });
  }
  let levell = db.get(`support_${message.author.id}`);
  let level = levell.poi;

  await db.set(`support_${message.author.id}`, {
    poi: Math.floor(level + 3),
    id: message.author.id,
  });
  message.guild.channels.cache.get(WarnLogRoom).send({
    embeds: [
      new MessageEmbed()
        .setColor(color)
        .setTitle("New Notification")
        .setDescription(`${message.author} Make A New Warn`),
    ],
  });
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.channel.id !== OffersRoom) return;
  if (!message.member.roles.cache.has(TeamRole)) return;

  await db.add(`offer_${message.guild.id}_${message.author.id}`, 2);

  let levelData = await db.get(`level_${message.author.id}`);
  if (!levelData) {
    levelData = { xp: 0, nid: message.author.id };
    await db.set(`level_${message.author.id}`, levelData);
  }

  const newXP = Math.floor(levelData.xp + 2);
  await db.set(`level_${message.author.id}`, {
    xp: newXP,
    nid: message.author.id,
  });

  const offerLogChannel = message.guild.channels.cache.get(OfferLogRoom);
  if (offerLogChannel) {
    offerLogChannel.send({
      embeds: [
        new MessageEmbed()
          .setColor(color)
          .setTitle("📢 New Notification")
          .setDescription(`> ${message.author} made a new offer`),
      ],
    });
  } else {
    console.error("Offer log channel not found.");
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.channel.id !== FeedBackRoom) return;

  const role = message.guild.roles.cache.get(ClientRole);
  if (role) {
    await message.member.roles.add(role);
  } else {
    console.error("Role not found.");
    return;
  }

  const userrrr = message.mentions.members.first();
  if (!userrrr) {
    console.error("User not mentioned.");
    return;
  }

  await db.add(`feeed_${message.guild.id}_${message.author.id}`, 3);

  let levelData = await db.get(`level_${message.author.id}`);
  if (!levelData) {
    levelData = { xp: 0, nid: message.author.id };
    await db.set(`level_${message.author.id}`, levelData);
  }

  const newXP = Math.floor(levelData.xp + 3);
  await db.set(`level_${message.author.id}`, {
    xp: newXP,
    nid: message.author.id,
  });

  const feedbackLogChannel = message.guild.channels.cache.get(FedLogRoom);
  if (feedbackLogChannel) {
    feedbackLogChannel.send({
      embeds: [
        new MessageEmbed()
          .setColor(color)
          .setTitle("📢 New Notification")
          .setDescription(`> ${userrrr} gave a new feedback`),
      ],
    });
  } else {
    console.error("Feedback log channel not found.");
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === prefix + "point") {
    let user = message.mentions.members.first() || message.member;

    if (!user.roles.cache.has(TeamRole)) {
      return message.reply(`> **𝖸𝗈𝗎 𝖠𝗋𝖾 𝖭𝗈𝗍 𝖨𝗇 𝖮𝗎𝗋 𝖳𝖾𝖺𝗆**`);
    }

    let oferpint = (await db.get(`offer_${message.guild.id}_${user.id}`)) || 0;
    let fedpint = (await db.get(`feeed_${message.guild.id}_${user.id}`)) || 0;
    let Repint =
      (await db.get(`retickets_${message.guild.id}_${user.id}`)) || 0;
    let respint = (await db.get(`respond_${message.guild.id}_${user.id}`)) || 0;
    let pointsss = (await db.get(`pointsss_${message.author.id}`)) || 0;

    let levelData = await db.get(`level_${user.id}`);
    if (!levelData) {
      await db.set(`level_${user.id}`, { xp: 0, nid: user.id });
      levelData = { xp: 0 };
    }

    let level = levelData.xp;

    const embed = new MessageEmbed()
      .setTitle("𝖸𝗈𝗎𝗋 𝖳𝖾𝖺𝗆 𝖯𝗈𝗂𝗇𝗍𝗌")
      .setColor(color)
      .setDescription(
        `
> **𝖧𝖾𝗒 ${user} **

> **𝖥𝖾𝖾𝖽𝖡𝖺𝖼𝗄𝗌: \`${fedpint}\` **

> **𝖮𝖿𝖿𝖾𝗋𝗌: \`${oferpint}\` **

> **𝖱𝖾𝗌𝗉𝗈𝗇𝖽 𝖳𝗂𝖼𝗄𝖾𝗍𝗌: \`${respint}\` **

> **𝖱𝖾: \`${Repint}\` **

> **𝖳𝗈𝗍𝖺𝗅 𝖯𝗈𝗂𝗇𝗍𝗌: \`${level}\` **

> **𝖠𝖽𝖽𝖾𝖽 𝖯𝗈𝗂𝗇𝗍𝗌: \`${pointsss}\` **

========================
`,
      )
      .setImage(line);

    message.reply({ embeds: [embed] });
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === prefix + "points") {
    let user = message.mentions.members.first() || message.member;

    if (!user.roles.cache.has(SupportRole)) {
      return message.reply(`> **𝖸𝗈𝗎 𝖧𝖺𝗏𝖾𝗇，'𝗍 𝖳𝗂𝖼𝗄𝖾𝗍 𝖲𝗎𝗉𝗉𝗈𝗋𝗍 𝖱𝗈𝗅𝖾**`);
    }

    let clpint =
      (await db.get(`closedtickets_${message.guild.id}_${user.id}`)) || 0;
    let warpint =
      (await db.get(`warngived_${message.guild.id}_${user.id}`)) || 0;
    let applypint =
      (await db.get(`applytickets_${message.guild.id}_${user.id}`)) || 0;
    let claimed =
      (await db.get(`supportticketclaims_${message.guild.id}_${user.id}`)) || 0;
    let pointsss = (await db.get(`pointsss_${message.author.id}`)) || 0;

    let levell = await db.get(`support_${user.id}`);
    if (!levell) {
      await db.set(`support_${user.id}`, { poi: 0, id: user.id });
      levell = { poi: 0 };
    }

    let level = levell.poi || 0;

    const embed = new MessageEmbed()
      .setTitle("𝖸𝗈𝗎𝗋 𝖲𝗍𝖺𝖿𝖿 𝖯𝗈𝗂𝗇𝗍𝗌")
      .setColor(color).setDescription(`
> **𝖧𝖾𝗒 ${user}**

> **𝖢𝗅𝗈𝗌𝖾 𝖳𝗂𝖼𝗄𝖾𝗍𝗌 : \`${clpint}\` **

> **𝖢𝗅𝖺𝗂𝗆𝖾𝖽 𝖳𝗂𝗑𝗄𝖾𝗍𝗌 : \`${claimed}\` **

> **𝖶𝖺𝗋𝗇𝗌 𝖦𝗂𝗏𝖾𝖽 \`${warpint}\` **

> **𝖠𝗉𝗉𝗅𝗒 𝖳𝗂𝖼𝗄𝖾𝗍 : \`${applypint}\` **

> **𝖳𝗈𝗍𝖺𝗅 : \`${level}\` **

> **𝖠𝖽𝖽𝖾𝖽 𝖯𝗈𝗂𝗇𝗍𝗌 : \`${pointsss}\` **

======================`);
    await message.reply({ embeds: [embed] });
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === prefix + "top") {
    if (!message.member.roles.cache.has(TeamRole)) {
      return message.reply(`** > 𝖸𝗈𝗎 𝖠𝗋𝖾 𝖭𝗈𝗍 𝖥𝗈𝗋𝗆 𝖳𝗁𝖾 𝖳𝖾𝖺𝗆**`);
    }

    let data = await db.all();
    let users = [];
    for (let key in data) {
      if (data[key].value.poi) {
        users.push({ ...data[key].value, xp: data[key].value.poi });
      }
    }

    let new_data = users.sort((a, b) => parseFloat(b.xp) - parseFloat(a.xp));
    let num = new_data.length;
    let top = "";
    if (num > 15) num = 15;
    for (let i = 0; i < num; i++) {
      let user = message.guild.members.cache.get(new_data[i].nid);
      let username = user
        ? user.nickname || user.user.username
        : "Unknown User";
      top += `**#${i + 1} | ${username} | ${new_data[i].xp}**
`;
    }

    const embed = new MessageEmbed()
      .setDescription(`${top}`)
      .setColor(color)
      .setImage(line)
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp()
      .setAuthor("𝖲𝖾𝗅𝗅𝖾𝗋𝗌 𝖯𝗈𝗂𝗇𝗍𝗌 𝖫𝖾𝖺𝖽𝖻𝗈𝖺𝗋𝖽", client.user.displayAvatarURL());

    await message.reply({ embeds: [embed] });
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === prefix + "tops") {
    if (!message.member.roles.cache.has(SupportRole))
      return message.reply(`** > 𝖸𝗈𝗎 𝖠𝗋𝖾 𝖭𝗈𝗍 𝖥𝗈𝗋𝗆 𝖳𝗁𝖾 𝖲𝗎𝗉𝗉𝗈𝗋𝗍`);
    let data = db.fetchAll();
    let users = [];
    for (let key in data) {
      if (data[key].poi) {
        users.push(data[key]);
      }
    }
    let new_data = users.sort((a, b) => parseFloat(b.poi) - parseFloat(a.poi));
    let num = new_data.length;
    let top = "";
    if (num > 15) num = 15;
    for (let i = 0; i < num; i++) {
      let user = message.guild.members.cache.get(new_data[i].id);
      let username = user ? user.nickname : "Unknown User";
      top += `**#${i + 1} | ${username} | ${new_data[i].poi}**\n`;
    }

    let embed = new MessageEmbed()
      .setDescription(`${top}`)
      .setColor(color)
      .setImage(line)
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp()
      .setAuthor("𝖲𝗎𝗉𝗉𝗈𝗋𝗍 𝖯𝗈𝗂𝗇𝗍𝗌 𝖫𝖾𝖺𝖽𝖻𝗈𝖺𝗋𝖽", client.user.displayAvatarURL());

    await message.reply({ embeds: [embed] });
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === prefix + "top 100") {
    if (!message.member.roles.cache.has(TeamRole)) {
      return message.reply(`** > 𝖸𝗈𝗎 𝖠𝗋𝖾 𝖭𝗈𝗍 𝖥𝗈𝗋𝗆 𝖳𝗁𝖾 𝖳𝖾𝖺𝗆**`);
    }

    let data = await db.all();
    let users = [];
    for (let key in data) {
      if (data[key].value.poi) {
        users.push({ ...data[key].value, xp: data[key].value.poi });
      }
    }

    let new_data = users.sort((a, b) => parseFloat(b.xp) - parseFloat(a.xp));
    let num = new_data.length;
    let top = "";
    let limit = Math.min(100, num);
    for (let i = 0; i < limit; i++) {
      let user = message.guild.members.cache.get(new_data[i].nid);
      let username = user
        ? user.nickname || user.user.username
        : "Unknown User";
      top += `**#${i + 1} | ${username} | ${new_data[i].xp}**
`;
    }

    const embed = new MessageEmbed()
      .setDescription(`${top}`)
      .setColor(color)
      .setImage(line)
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp()
      .setAuthor("𝖲𝖾𝗅𝗅𝖾𝗋𝗌 𝖯𝗈𝗂𝗇𝗍𝗌 𝖫𝖾𝖺𝖽𝖻𝗈𝖺𝗋𝖽", client.user.displayAvatarURL());

    await message.reply({ embeds: [embed] });
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === prefix + "tops 100") {
    if (!message.member.roles.cache.has(SupportRole)) {
      return message.reply(`** > 𝖸𝗈𝗎 𝖠𝗋𝖾 𝖭𝗈𝗍 𝖥𝗈𝗋𝗆 𝖳𝗁𝖾 𝖲𝗎𝗉𝗉𝗈𝗋𝗍**`);
    }

    let data = await db.all();
    let users = [];

    for (let key in data) {
      if (data[key].value.poi) {
        users.push({ ...data[key].value, id: key });
      }
    }

    let new_data = users.sort((a, b) => parseFloat(b.poi) - parseFloat(a.poi));
    let num = new_data.length;
    let top = "";
    let limit = Math.min(100, num);

    for (let i = 0; i < limit; i++) {
      let user = message.guild.members.cache.get(new_data[i].id);
      let username = user
        ? user.nickname || user.user.username
        : "Unknown User";
      top += `**#${i + 1} | ${username} | ${new_data[i].poi}**
`;
    }

    const embed = new MessageEmbed()
      .setDescription(`${top}`)
      .setColor(color)
      .setImage(line)
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp()
      .setAuthor("𝖲𝗎𝗉𝗉𝗈𝗋𝗍 𝖯𝗈𝗂𝗇𝗍𝗌 𝖫𝖾𝖺𝖽𝖻𝗈𝖺𝗋𝖽", client.user.displayAvatarURL());

    await message.reply({ embeds: [embed] });
  }
});

client.on("channelCreate", async (message) => {
  if (message.parentId != SupportCategory) return;
  setTimeout(() => {
    message.send({
      content: `** السلام عليكم ورحمة الله وبركاته  
معك طاقم العمل لدي ${message.guild.name} في تذكرة __الدعم الفني __   
**__ كل ما عليك هو كتابة مشكلتك أو استفسارك وانتظار ألرد __ 

**لأستلام التكت اضغط علي  __ Claim__ **`,
      components: [
        new MessageActionRow().addComponents(
          new MessageButton()
            .setLabel("Claim")
            .setStyle("PRIMARY")
            .setCustomId("claim"),
        ),
      ],
    });
  }, 2000);
});

client.on("interactionCreate", async (interaction) => {
  if (interaction.customId == "claim") {
    if (!interaction.member.roles.cache.has(SupportRole)) return;
    if (!interaction.channel.name.startsWith("ticket")) return;
    db.add(
      `supportticketclaims_${interaction.guild.id}_${interaction.user.id}`,
      1,
    );

    let levelll = db.get(`support_${interaction.user.id}`);
    if (levelll == null) {
      db.set(`support_${interaction.user.id}`, {
        poi: 0,
        id: interaction.user.id,
      });
    }
    let levell = db.get(`support_${interaction.user.id}`);
    let level = levell.poi;

    await db.set(`support_${interaction.user.id}`, {
      poi: Math.floor(level + 3),
      id: interaction.user.id,
    });
    interaction.channel.setName(`${interaction.member.nickname}`);
    await interaction.reply({
      embeds: [
        new MessageEmbed().setDescription(
          `> \`-\`**${interaction.member.nickname} | Done Claimed Ticket **`,
        ),
      ],
    });
    interaction.guild.channels.cache.get(ClaimLogRoom).send({
      embeds: [
        new MessageEmbed()
          .setColor(color)
          .setTitle("New Notification")
          .setDescription(`<@${interaction.user.id}> Make A New Claim`),
      ],
    });
  }
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + "reset")) {
    if (!message.member.permissions.has("ADMINISTRATOR")) {
      return message.reply(
        "> <a:wa_wrong:1288987754516189186> | **You Dont Have Premission**",
      );
    }

    try {
      fs.writeFileSync(databasePath, JSON.stringify({}, null, 2), "utf-8");
      message.reply("> <a:Done:1308862280557002973>  | **Done**");
    } catch (error) {
      console.error(error);
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  const args = message.content.split(" ");
  if (args[0] === prefix + "add-point") {
    if (!DevS.includes(message.author.id))
      return message.reply(
        `> ❗️ | **You Dont Have Premission**`,
      );

    const user = message.mentions.members.first();
    if (!user)
      return message.reply(
        ">  ❗️| *Plz Mention A Member**",
      );

    const pointsToAdd = parseInt(args[2]);
    if (isNaN(pointsToAdd))
      return message.reply(
        "> ❗️ | *Plz Add Number**",
      );

    await db.add(`pointsss_${user.id}`, pointsToAdd);

    message.reply(`> <a:done:1288975448776249448> | **Done**`);
  }

  if (args[0] === prefix + "remove-point") {
    if (!DevS.includes(message.author.id))
      return message.reply(`**𝖳𝗁𝗂𝗌 𝖢𝗈𝗆𝗆𝖺𝗇𝖽 𝖮𝗇𝗅𝗒 𝖮𝗐𝗇𝖾𝗋𝗌 𝖲𝗁𝗂𝗉**`);

    const user = message.mentions.members.first();
    if (!user)
      return message.reply(
        "> ❗️ | **You Dont Have Premission**",
      );

    const pointsToRemove = parseInt(args[2]);
    if (isNaN(pointsToRemove))
      return message.reply(
        ">  ❗️ | **Plz Add Number**",
      );

    const userPoints = await db.get(`pointsss_${user.id}`);
    if (!userPoints || userPoints < pointsToRemove)
      return message.reply(
        "> ❗️ | *This Member Havent Points**",
      );

    await db.subtract(`pointsss_${user.id}`, pointsToRemove);

    message.reply(`> <a:Done:1308862280557002973> | **Done**`);
  }
});

// <========== Owners ==========>

client.on("messageCreate", async (message) => {
  if (message.content.startsWith(prefix + "rename-all-roles")) {
    if (!message.member.permissions.has("ADMINISTRATOR")) {
      return message.author.send(
        "> <a:wa_wrong:1288987754516189186> | **You Don’t Have Permission**",
      );
    }

    const args = message.content.split(" ");
    if (args.length < 3) {
      return message.reply(
        `> <a:wa_wrong:1288987754516189186> | **Please Type Lick This ${prefix}rename-all-roles OldTag NewTag**`,
      );
    }

    const [command, originalWord, newWord] = args;
    const roles = message.guild.roles.cache.filter((role) =>
      role.name.startsWith(originalWord),
    );

    if (roles.size === 0) {
      return message.reply("> <a:wa_wrong:1288987754516189186> | **Error**");
    }

    roles.forEach(async (role) => {
      try {
        let newRoleName = role.name.replace(originalWord, newWord);
        await role.setName(newRoleName);
        message.channel.send(
          `>  <a:Done:1308862280557002973>| **Done For : ** ${role.name}`,
        );
      } catch (error) {
        console.error(error);
        message.channel.send(
          `> <a:wa_wrong:1288987754516189186> | **Error** ${role.name}`,
        );
      }
    });
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === prefix + "delete-all-tickets") {
    message.guild.channels.cache.forEach((channel) => {
      if (
        channel.name.startsWith("ticket") ||
        channel.name.startsWith("done") ||
        channel.name.startsWith("need") ||
        channel.name.startsWith("sell") ||
        channel.name.startsWith("closed") ||
        channel.name.startsWith("by")
      ) {
        channel
          .delete()
          .then(() => {
            console.log(`Deleted channel: ${channel.name}`);
          })
          .catch((error) => {
            console.error(`Error deleting channel: ${channel.name}\n${error}`);
          });
      }
    });
    message.reply(">  <a:Done:1308862280557002973>| **Done**");
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + "rang")) {
    if (!message.member.permissions.has("MENTION_EVERYONE")) {
      return message.reply(
        "> <a:wa_wrong:1288987754516189186> | **You Don’t Have Permission**",
      );
    }

    let roles = message.mentions.roles.map((role) => role);

    if (roles.length !== 2) {
      return message.reply(
        "> <a:wa_wrong:1288987754516189186> | **Please Mention The Two Roles **",
      );
    }

    let allRoles = message.guild.roles.cache.sort(
      (a, b) => a.position - b.position,
    );

    let [startRole, endRole] = roles;
    let startPosition = startRole.position;
    let endPosition = endRole.position;

    if (startPosition > endPosition) {
      [startPosition, endPosition] = [endPosition, startPosition];
    }

    let rolesInRange = allRoles.filter(
      (role) => role.position > startPosition && role.position < endPosition,
    );

    let mentionString = rolesInRange.map((role) => `<@&${role.id}>`).join(`
      `);

    if (mentionString.length === 0) {
      return message.reply(
        "> <a:wa_wrong:1288987754516189186> | **There Aren’t Enough Data**",
      );
    }

    message.reply(`${mentionString}`);
  }
});

client.on("messageCreate", async (message) => {
  const command = `${prefix}filter`;
  if (!message.content.startsWith(command)) return;
  if (!message.member.permissions.has("MANAGE_ROLES")) {
    return message.reply(
      "> <a:wa_wrong:1288987754516189186> | ** You Don’t Have Premission**",
    );
  }
  const args = message.content.slice(command.length).trim().split(" ");
  const user =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
  const reason = args.slice(1).join(" ");
  if (!user) {
    return message.reply(
      "> <a:wa_wrong:1288987754516189186> | **You Have To Mention A Member**",
    );
  }
  if (!reason) {
    return message.reply(
      "> <a:wa_wrong:1288987754516189186> | **You Have To Mention A Reason**",
    );
  }
  try {
    await user.roles.set([]);
    const addRoles = async (roleIds, user) => {
      for (const roleId of roleIds) {
        const role = message.guild.roles.cache.get(roleId);
        if (role) {
          await user.roles.add(role);
          console.log(`Role ${role.name} assigned to ${user.user.tag}`);
        } else {
          console.log(`Role with ID ${roleId} not found.`);
        }
      }
    };

    await addRoles(OldSellerRole, user);
    await addRoles(MemberRoleId, user);
    await message.reply("> <a:Done:1308862280557002973> | **Done**");
    await user.send(`** 
  𝖧𝖾𝗅𝗅𝗈 ${user}, 𝖸𝗈𝗎 𝖧𝖺𝗏𝖾 𝖡𝖾𝖾𝗇 𝖥𝗂𝗅𝗍𝖾𝗋𝖾𝖽 𝖠𝗍: ${message.guild.name}

> 𝖳𝗁𝖾 𝖠𝖽𝗆𝗂𝗇: ${message.author.tag}
> 𝖳𝗁𝖾 𝖱𝖾𝖺𝗌𝗈𝗇: ${reason}

> 𝖳𝗁𝖺𝗇𝗄𝗌 𝖥𝗈𝗋 𝖳𝗂𝗆𝖾 𝖸𝗈𝗎 𝖬𝖺𝖽𝖾 𝖶𝗂𝗍𝗁: ${message.guild.name} 
**`);
  } catch (error) {
    console.error("Error:", error);
    await message.reply(
      "> <a:wa_wrong:1288987754516189186> | ** I Don’t Have Permission**",
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content.toLowerCase().startsWith(prefix + "set-activity")) {
    if (!DevS.includes(message.author.id))
      return message.reply(
        "> <a:wa_wrong:1288987754516189186>  | **You Don’t Have Premission**",
      );
    const oy = message.content.split(" ").slice(1).join(" ");
    if (!oy)
      return message.reply(
        "> <a:wa_wrong:1288987754516189186>  | ** Please Write New Activity**",
      );

    client.user.setPresence({ activities: [{ name: oy }], status: "online" });
    return message.reply(`> <a:Done:1308862280557002973>| **Done**`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.content.startsWith(prefix + "set-prefix")) {
    if (!DevS.includes(message.author.id)) {
      return message.reply(
        `> <a:wa_wrong:1288987754516189186>  | **You Don’t Have Premission**`,
      );
    }
    const args = message.content.slice(1).trim().split(/ +/);
    if (!args[1]) {
      return message.reply(
        `> <a:wa_wrong:1288987754516189186>  | ** Please Write New Prefix**`,
      );
    }

    db.set("prefix", args[1]);
    const config = require("./config.json");
    config.prefix = args[1];
    fs.writeFileSync("./config.json", JSON.stringify(config, null, 2));

    message.reply(`>  <a:Done:1308862280557002973>| **Done**`);
  }
});

client.on("messageCreate", async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === "tbc") {
    if (!DevS.includes(message.author.id)) {
      return message.reply(
        "> <a:wa_wrong:1288987754516189186>  | **You Don’t Have Premission**",
      );
    }
    if (args.length < 1) {
      return message.reply(
        "> <a:wa_wrong:1288987754516189186>  | ** Please Write New Message**",
      );
    }
    const messageToSend = args.join(" ");
    const role = message.guild.roles.cache.get(TeamRole);
    if (!role) {
      return;
    }
    const membersWithRole = message.guild.members.cache.filter((member) =>
      member.roles.cache.has(role.id),
    );
    membersWithRole.forEach((member) => {
      member.send(messageToSend).catch((error) => {
        console.error(error);
      });
    });
    message.reply(`> <a:Done:1308862280557002973>| **Done**`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content !== prefix + "team") return;

  if (message.member.permissions.has("ADMINISTRATOR")) {
    if (message.channel.id !== TeamRoom) {
      return;
    }

    let team = message.guild.roles.cache.get(TeamRole);
    if (!team) {
      return;
    }

    let members = team.members.map((member) => member);
    let count = 0;

    for (let member of members) {
      try {
        await message.channel.send(`<@${member.id}>`);
        await message.channel.send(line);
        count++;
      } catch (err) {}
    }

    message.reply(`>  <a:Done:1308862280557002973>| **Done**`);
  }
});

// <========== Tickets ==========>

client.on("channelCreate", async (channel) => {
  if (
    channel.type === 0 &&
    channel.name.startsWith("ticket") &&
    channel.parentId === OrderCategory
  ) {
    await new Promise((resolve) => setTimeout(resolve, 120000));

    try {
      await channel.send(
        "**__التيكيت هتتساب نص ساعه لو محدش رد أو استلم التيكيت يبقا طلبك مش متوفر حاليا و هنحاول نوفرو ف اقرب وقت  وشكرا لتفهمك__**",
      );
    } catch (error) {
      console.error("Error sending message to channel:", error);
    }
  }
});



client.on("channelCreate", async (message) => {
  if (
    message.type === "GUILD_TEXT" &&
    message.name.startsWith("ticket") &&
    message.parent.id === AdsCategory
  ) {
    await new Promise((r) => setTimeout(r, 3000));

    message.send(` **Ads Information's・ معلومات الإعلانات

-----------------

Mention Everyone + GiveAway on 100k Credit 
1m / 2ج  ( 1 Days Only ) 
 منشن افري ون + جيف اواي علي 100 الف :
١م /  2ج  ( يوم فقط )     

-----------------

Mention Everyone + GiveAway On 200k : 
  2m  / 3ج  ( 3 Days Only )
 منشن افري ون + جيف اواي علي 200 الف :
٢م / ٣جنيه ( 3 ايام فقط ) 

-----------------

Mention Everyone + GiveAway On 300k
2,000,000/ 20p  ( 5 Days Only )
 منشن افt�ي ون + جيف اواي علينا 300 الف : 
  ٣مليون / ٥جنيه ( 5 ايام فقط ) 

-----------------

Mention Everyone + GiveAway On 500k 
3,000,000/ 30p  ( 7 Days Only )
 منشن افري ون + جيف اواي علينا 500 الف :
٥مليون / ٧جنيه ( 7 ايام فقط ) 


# Extras To Ads ・اضافات لي الاعلانات

-   Ad in a private room ・ اعلان ف روم خاصة =  ٨مليون / ١٠جنيه 
-

### Some Note's ・ملحوظات مهمه
-
 إعلانات الهدايا
<#${AdsGiftRoom}> 

-
- معدل دخُول الأعضاء للخوادِم مُتفاوت وذلك حسب فكرة الخادِم ورسالة الإعلان وَهيكلة الغرف الصوتية وَالكتابيه.
-

- لا نقبل طرق دفع الا ( كر$ــيدت فودافون كا$ـش  )
** `);
  }
});

client.on("channelCreate", async (channel) => {
  if (channel.parentId !== ApplyCategory) return;
  setTimeout(async () => {
    channel.send({
      content: `**\`-\` السلام عليكم ورحمة الله وبركاته 
            \`-\` معك طاقم العمل لدي نيرفو ستور في تذكرة التقديم 
            برجاء تحديد جنسيتك من خلال الضغط على القائمة الآتية 
            **`,
      components: [
        {
          type: 1,
          components: [
            {
              type: 3,
              custom_id: "select_language",
              placeholder:
                "قم بتحديد جنسيتك من خلال الضغط هنا للاستمرار في التقديم لطاقم العمل",
              options: [
                {
                  label: "مصري",
                  value: "egyptian",
                },
                {
                  label: "عربي",
                  value: "arabic",
                },
                {
                  label: "English",
                  value: "ENGLISH",
                },
              ],
            },
          ],
        },
      ],
    });

    channel.send({
      content: `**ملحوظات مهمة**`,
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              style: "PRIMARY",
              custom_id: "notes",
              label: "ملحوظات مهمة",
            },
          ],
        },
      ],
    });
  }, 2000);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId === "notes") {
    await interaction.reply({
      content: `**\`ملحوظات مهمة للغاية\`

1- أهم حاجة الاحترام المتبادل بينك وبين طاقم العمل داخل السيرفر.

2- يجب أن تكون الفيدباكات من سيرفرات مشهورة وموثوق بها.

3- إذا كنت تجلب ورنات أكثر من 5 مرات، سيتم تصفيتك.

4- في حال تم تصفيتك من السيرفر مرتين سابقًا، لن يُسمح لك بالتقديم مرة أخرى.**`,
      ephemeral: true,
    });
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isSelectMenu()) return;

  const language = interaction.values[0];

  if (language === "egyptian") {
    const modalEgyptian = new Modal()
      .setCustomId("myModalEgyptian")
      .setTitle("Apply Team Submit (Egyptian)");
    const rname = new TextInputComponent()
      .setCustomId("rname")
      .setLabel("اسمك")
      .setStyle("SHORT");

    const age = new TextInputComponent()
      .setCustomId("age")
      .setLabel("عمرك")
      .setStyle("SHORT");

    const svcount = new TextInputComponent()
      .setCustomId("svcount")
      .setLabel("رقم الكاش")
      .setStyle("SHORT");

    const fbcount = new TextInputComponent()
      .setCustomId("fb")
      .setLabel("معاك 30 فيد باك من ستورات ولا لا ؟")
      .setStyle("SHORT");

    const roles = new TextInputComponent()
      .setCustomId("roles")
      .setLabel("هتبيع اي")
      .setStyle("SHORT");

    const name = new MessageActionRow().addComponents(rname);
    const agge = new MessageActionRow().addComponents(age);
    const svvcount = new MessageActionRow().addComponents(svcount);
    const fbvcount = new MessageActionRow().addComponents(fbcount);
    const rovles = new MessageActionRow().addComponents(roles);

    modalEgyptian.addComponents(name, agge, svvcount, fbvcount, rovles);

    await interaction.showModal(modalEgyptian);
  } else if (language === "arabic") {
    const modalArabic = new Modal()
      .setCustomId("myModalArabic")
      .setTitle("Apply Team Submit (Arabic)");
    const rname = new TextInputComponent()
      .setCustomId("rname")
      .setLabel("اسمك")
      .setStyle("SHORT");

    const age = new TextInputComponent()
      .setCustomId("age")
      .setLabel("عمرك")
      .setStyle("SHORT");

    const svcount = new TextInputComponent()
      .setCustomId("svcount")
      .setLabel("مده الخبره في البيع والشراء")
      .setStyle("SHORT");

    const fbcount = new TextInputComponent()
      .setCustomId("fb")
      .setLabel("قم بارسال 30 فيدباك ( تعاملات خاص او شوب )")
      .setStyle("SHORT");

    const roles = new TextInputComponent()
      .setCustomId("roles")
      .setLabel("ماذا سوف تبيع")
      .setStyle("SHORT");

    const name = new MessageActionRow().addComponents(rname);
    const agge = new MessageActionRow().addComponents(age);
    const svvcount = new MessageActionRow().addComponents(svcount);
    const fbvcount = new MessageActionRow().addComponents(fbcount);
    const rovles = new MessageActionRow().addComponents(roles);

    modalArabic.addComponents(name, agge, svvcount, fbvcount, rovles);

    await interaction.showModal(modalArabic);
  } else if (language === "ENGLISH") {
    const modalEnglish = new Modal()
      .setCustomId("myModalEnglish")
      .setTitle("Apply Team Submit (English)");
    const rname = new TextInputComponent()
      .setCustomId("rname")
      .setLabel("Name")
      .setStyle("SHORT");

    const age = new TextInputComponent()
      .setCustomId("age")
      .setLabel("Age")
      .setStyle("SHORT");

    const svcount = new TextInputComponent()
      .setCustomId("svcount")
      .setLabel("The names of the servers you work with")
      .setStyle("SHORT");

    const fbcount = new TextInputComponent()
      .setCustomId("fb")
      .setLabel("Send 30 feedbacks from different servers")
      .setStyle("SHORT");

    const roles = new TextInputComponent()
      .setCustomId("roles")
      .setLabel("The names of the rolls you apply for ")
      .setStyle("SHORT");

    const name = new MessageActionRow().addComponents(rname);
    const agge = new MessageActionRow().addComponents(age);
    const svvcount = new MessageActionRow().addComponents(svcount);
    const fbvcount = new MessageActionRow().addComponents(fbcount);
    const rovles = new MessageActionRow().addComponents(roles);

    modalEnglish.addComponents(name, agge, svvcount, fbvcount, rovles);

    await interaction.showModal(modalEnglish);
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId === "notes") {
    await interaction.reply({
      content: `**'Very Important Notes'

1- The most important need is mutual respect between you and the staff inside the server.

2- Feedbacks must be from famous and reliable servers.

3- If you fetch ringtones more than 5 times, you will be filtered.

4- If you were filtered from the server twice previously, you will not be allowed to apply again.**`,
      ephemeral: true,
    });
  } else if (interaction.customId === "mention") {
    await interaction.reply(`<@&${ApplyTest}>`, { ephemeral: false });
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isModalSubmit()) return;

  const modalId = interaction.customId;

  if (modalId === "myModalEgyptian") {
    const name = interaction.fields.getTextInputValue("rname");
    const rname = interaction.fields.getTextInputValue("age");
    const rrname = interaction.fields.getTextInputValue("svcount");
    const rrrname = interaction.fields.getTextInputValue("fb");
    const rrrrname = interaction.fields.getTextInputValue("roles");

    const embed = new MessageEmbed()
      .setDescription(
        `**\`\`\` New Apply Team Submition \`\`\`
        > الاسم : ${name}

        > العمر : ${rname}

        > رقم الكاش : ${rrname}

        > كام فيدباك : ${rrrname}

        > اسماء الرولات التى تقدم عليها : ${rrrrname}**`,
      )
      .setImage(line)
      .setColor(color)
      .setThumbnail(interaction.guild.iconURL({ size: 128 }));

    const row = new MessageActionRow().addComponents(
      {
        type: 2,
        style: "PRIMARY",
        custom_id: "notes",
        label: "ملحg�ظات مهمة قبل التقديم",

        ephemeral: true,
      },
      {
        type: 2,
        style: "PRIMARY",
        custom_id: "mention",
        label: "منشن الإدارة",
      },
    );

    await interaction.reply({
      content: `> ** تم اكمال التقديم. يرجى الانتظار الادارة لحين الرد عليك**`,
      embeds: [embed],
      components: [row],
    });
  } else if (modalId === "myModalArabic") {
    const name = interaction.fields.getTextInputValue("rname");
    const rname = interaction.fields.getTextInputValue("age");
    const rrname = interaction.fields.getTextInputValue("svcount");
    const rrrname = interaction.fields.getTextInputValue("fb");
    const rrrrname = interaction.fields.getTextInputValue("roles");

    const embed = new MessageEmbed()
      .setDescription(
        `**\`\`\` New Apply Team Submition \`\`\`
        > الاسم : ${name}

        > العمر : ${rname}

        > اسماء السيرفرات : ${rrname}

        > كام فيدباك : ${rrrname}

        > اسماء الرولات التى تقدم عليها : ${rrrrname}**`,
      )
      .setImage(line)
      .setColor(color)
      .setThumbnail(interaction.guild.iconURL({ size: 128 }));

    const row = new MessageActionRow().addComponents(
      {
        type: 2,
        style: "PRIMARY",
        custom_id: "notes",
        label: "ملحوظات مهمة قبل التقديم",

        ephemeral: true,
      },
      {
        type: 2,
        style: "PRIMARY",
        custom_id: "mention",
        label: "منشن الإدارة",
      },
    );

    await interaction.reply({
      content: `> ** تم اكمال التقديم. يرجى الانتظار الادارة لحين الرد عليك**`,
      embeds: [embed],
      components: [row],
    });
  } else if (modalId === "myModalEnglish") {
    const name = interaction.fields.getTextInputValue("rname");
    const rname = interaction.fields.getTextInputValue("age");
    const rrname = interaction.fields.getTextInputValue("svcount");
    const rrrname = interaction.fields.getTextInputValue("fb");
    const rrrrname = interaction.fields.getTextInputValue("roles");

    const embed = new MessageEmbed()
      .setDescription(
        `**\`\`\` New Apply Team Submition \`\`\`
        > Name: ${name}

        > Age: ${rname}

        > Server names: ${rrname}

        > Feedback: ${rrrname}

        > Roles you apply for: ${rrrrname}**`,
      )
      .setImage(line)
      .setColor(color)
      .setThumbnail(interaction.guild.iconURL({ size: 128 }));

    const row = new MessageActionRow().addComponents(
      {
        type: 2,
        style: "PRIMARY",
        custom_id: "notes",
        label: "Important notes before applying",

        ephemeral: true,
      },
      {
        type: 2,
        style: "PRIMARY",
        custom_id: "mention",
        label: "Management mention",
      },
    );

    await interaction.reply({
      content: `> **Application completed. Please wait for the administration to respond.**`,
      embeds: [embed],
      components: [row],
    });
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId === "notes") {
    await interaction.reply({
      content: `**'Very Important Notes'

1- The most important need is mutual respect between you and the staff inside the server.

2- Feedbacks must be from famous and reliable servers.

3- If you fetch ringtones more than 5 times, you will be filtered.

4- If you were filtered from the server twice previously, you will not be allowed to apply again.**`,
      ephemeral: true,
    });
  } else if (interaction.customId === "mention") {
    await interaction.reply(`<@&${ApplyTest}>`, { ephemeral: false });
  }
});



client.on("messageCreate", async (message) => {
  if (
    message.author.id === TicketToolId &&
    message.channel.parentId === OrderCategory
  ) {
    let member = message.mentions.members.first();
    if (!member || member.bot) return;
    let role = message.guild.roles.cache.get(ClientRole);

    if (!role) {
      console.error(`Role with ID ${ClientRole} not found.`);
      return;
    }

    if (member.roles.cache.has(ClientRole)) {
      return;
    } else {
      member.roles
        .add(role.id)
        .then(() => {
          const embed = new MessageEmbed()
            .setTitle("New Client")
            .setDescription(`**Done Added <@&${ClientRole}> role to : <@${member.id}>**`)
            .setColor("GREEN");

          return message.channel.send({ embeds: [embed] });
        })
        .catch((error) => {
          console.error("Error adding role:", error);
        });
    }
  }
});

// <========== Help ==========>

client.on("messageCreate", (message) => {
  if (
    message.content == prefix + "help" ||
    message.content == prefix + "Help" ||
    message.content == prefix + "HELP" ||
    message.content == "help" ||
    message.content == "Help" ||
    message.content == "HELP" ||
    message.content == "هيلب"
  ) {
    const embed = new MessageEmbed()
      .setTitle("**Help Menu **")
      .setColor(color)
      .setImage(line)
      .setThumbnail(message.guild.iconURL()).setDescription(`
**> \`-\` This Offical System Bot : ${message.guild.name}

 > \`-\` For Help Type : ${prefix}help


 > \`-\` Prefix  : ( ${prefix} )**`);

    let row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("commands")
        .setPlaceholder("⚘・𝐒𝐞𝐥𝐞𝐜𝐭 𝐀 𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲")
        .addOptions([
          {
            label: "𝐎𝐰𝐧𝐞𝐫 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬",
            value: "Owners",
            description: "Commands for Owners",
            emoji: "<:1207400023747469402:1311104966437507085>",
          },
          {
            label: "𝐏𝐮𝐛𝐥𝐢𝐜 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬",
            value: "Public",
            description: "Commands for Public",
            emoji: "<:hmmm:1307353661499768883>",
          },
          {
            label: "𝐀𝐝𝐦𝐢𝐧 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬",
            value: "Admins",
            description: "Commands for Admins",
            emoji: "<:admin_3:1307612343466987612>",
          },
          {
            label: "𝐒𝐭𝐨𝐫𝐞 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬",
            value: "Store",
            description: "Commands for Store",
            emoji: "<:shoppingcart:1307354137750540349>",
          },

          {
            label: "𝐏𝐨𝐢𝐧𝐭𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬",
            value: "Points",
            description: "Commands for Points",
            emoji: "<:wa_rules:1307280995212329032>",
          },
        ]),
    );

    const devButton = new MessageButton()
      .setStyle("LINK")
      .setEmoji("<:dev:1310605125919834183>")
      .setLabel("𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫")
      .setURL(DevProfile);

    const supportServerButton = new MessageButton()
      .setStyle("LINK")
      .setEmoji("<:admin_3:1307612343466987612>")
      .setLabel("Order Bot Like me")
      .setURL(OrderRoom2);

    const rowWithButtons = new MessageActionRow().addComponents(
      devButton,
      supportServerButton,
    );
    message.reply({
      embeds: [embed],
      components: [row, rowWithButtons],
    });
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isSelectMenu()) return;

  const category = interaction.values[0];

  if (category === "Owners") {
    const first = new MessageEmbed()
      .setTitle("**Owners Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL()).setDescription(`**
> ${prefix}delete-tickets \` To Delete All Ticket That Not Claimed \`

> ${prefix}add-emoji \` To Add Emoji \`

> ${prefix}info-emoji \` To Get Information About Emoji \`

> ${prefix}rang \` To Sen All Role Between Two Role \`

> ${prefix}team \` To Mention All Members In Team \`

> ${prefix}rename-all-roles \` To Change All Name Roles \`

> ${prefix}role \` To Change Name Of The Role \`

> ${prefix}set-prefix \` Change Prefix Bot \`

> ${prefix}set-activity \` Change Activity Bot \` \`**`);

    interaction.update({
      embeds: [first],
      components: interaction.message.components,
    });
  } else if (category === "Public") {
    const publicCmds = new MessageEmbed()
      .setTitle("**Public Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL()).setDescription(`** 

> ${prefix}afk \` To Be In Afk \`

> ${prefix}user \` To Send User Message \`

> ${prefix}banner \` To Send Your Banner \`

> ${prefix}c-invite \` To Create Preivate Server Invite \`

> ${prefix}id \` To Get Your Id \`

> ${prefix}translate \` To Translate Any Word \`

> ${prefix}calculate \` To Calculate Any Number \`

> ${prefix}uptime \` To Show Uptime Bot \`

> ${prefix}inrole \` To Show Role Member \`

> ${prefix}avatar \` To Show Avatar Member \`

> ${prefix}invites \` To Show Your Invites \`

> ${prefix}top-invites \` To Show Top Inviters\`

> ${prefix}server \` To Show Information About The Server\`

> ${prefix}bots \` To Show Information About The Server's Bots\`

> ${prefix}roles \` To Show Information About The Server's Roles\`

> ${prefix}info-role \` To Show Information About Role\`

> ${prefix}boost \` To Show Information About The Server's Boosts\`

> ${prefix}top-servers \` To Show The Best Servers That Our Bot In It\`
**`);

    interaction.update({
      embeds: [publicCmds],
      components: interaction.message.components,
    });
  } else if (category === "Admins") {
    const adminCmds = new MessageEmbed()
      .setTitle("**Admin Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL()).setDescription(`**
> ${prefix}embed \` To Make Embed Message \`

> ${prefix}say \` To Make Say Message \`

> ${prefix}un-ban-all \` To UnBan All Member \`

> ${prefix}name \` To SetName A Member \`

> ${prefix}lock \` To Lock Channel \`

> ${prefix}un-lock \` To UnLock Channel \`

> ${prefix}show \` To Show Channel \`

> ${prefix}hide \` To Hide Channel \`

> ${prefix}hide-all \` To Hide All Channel \`

> ${prefix}show-all \` To Show All Channel \`

> ${prefix}lock-all \` To Lock All Channel \`

> ${prefix}un-lock-all \` To Unlock All Channel \`

> ${prefix}ban \` To Ban Member \`

> ${prefix}un-ban \` To UnBan Member \`

> ${prefix}mute \` To Mute Member \`

> ${prefix}un-mute \` To UnMute Member \`

> ${prefix}mute-voice \` To Mute Member \`

> ${prefix}un-mute-voice \` To UnMute Member \`

> ${prefix}timeout \` To TimeOut Member \`

> ${prefix}un-timeout \` To UnTimeOut Member \`

> ${prefix}deafen \` To Deafen Member \`

> ${prefix}un-deafen \` To Deafen Member \`

> ${prefix}move \` To Move Member \`

> ${prefix}g-role \` To Give Role To Member \`

> ${prefix}r-role \` To Remove Role To Member \`

> ${prefix}m-role \` To Give Role To All Members \`

> ${prefix}temprole \` To Give Temp Role To  Member \`

> ${prefix}add-emoji \`To Add Emoji To Server \`

> ${prefix}info-emoji \` To See Information About Emoji \`

> ${prefix}rep \` To obtain a form if you want to inform someone \`

> ${prefix}num \` To register the seller number \`

> ${prefix}clear \` To Clear The Messages\`

> ${prefix}vkick \` To Kick member from the voice \`**

> مقبول \` To Accept Someone For Team \`

> مرفوض \` To Reject Someone For Team \`

> دليل \` To Get The Pro Bot Website Where You Can Find The Guide \`

`);

    interaction.update({
      embeds: [adminCmds],
      components: interaction.message.components,
    });
  } else if (category === "Store") {
    const storeCmds = new MessageEmbed()
      .setTitle("**Store Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL()).setDescription(`**
> ${prefix}bot \`To obtain a form if you are requesting a bot \`

> ${prefix}design \` To obtain a form if you are requesting a design \`
      
> ${prefix}send \` To Send Msg DM To Member \`

> ${prefix}come \` To Come DM To Member \`

> ${prefix}tax \` To Show Tax A Number \`

> ${prefix}welcome-seller \` To Welcome Seller \`

> ${prefix}filter \` To Filter Seller \`

> ${prefix}upgrade \` To Upgrade Seller \`

> ${prefix}font \` To Change Word For 𝖶𝗈𝗋𝖽 \`

> ${prefix}tag \` To Change Seller Name \`

> ${prefix}io \` To Send Io Message\`

> ${prefix}wf \` To Send Warn Form\`

> ${prefix}check-word \` To Encryption Any Word\`
**`);

    interaction.update({
      embeds: [storeCmds],
      components: interaction.message.components,
    });
  } else if (category === "Points") {
    const PointsCmd = new MessageEmbed()
      .setTitle("**Points Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL()).setDescription(`**
> ${prefix}reset \` To Reset All Points \`
      
> ${prefix}add-point \` To Add Point For Seller \`

> ${prefix}remove-point \` To Remove Point For Seller \`
      
> ${prefix}point \` To See Your Team Points\`

> ${prefix}top \` To See Top Sellers In Points\`

> ${prefix}points \` To See Your Support Points\`

> ${prefix}tops \` To See Top Supports In Points\`

> ${prefix}top 100 \` To See Top 100 In Points\`

> ${prefix}tops 100 \` To See Top 100 Supports In Points\`
**`);

    interaction.update({
      embeds: [PointsCmd],
      components: interaction.message.components,
    });
  }
});

// <========== Server ==========>

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.channel.id !== WarnRoom) return;
  if (!message.member.roles.cache.has(WarnRoleId)) {
    return message.reply(
      "You don't have the required role to use this command.",
    );
  }

  if (message.mentions.members.size > 0 && message.mentions.roles.size > 0) {
    const timeMatch = message.content.match(/> Time\s*:\s*(\S+)/);

    if (!timeMatch) {
      return message.reply(
        "Please mention a time after 'Time:' (e.g., 'Time: 7d' for 7 days)",
      );
    }

    const time = timeMatch[1];
    const duration = ms(time);

    if (!duration) {
      return message.reply("Invalid time format specified after 'Time:'.");
    }

    const member = message.mentions.members.first();
    const role = message.mentions.roles.first();

    const highestRole = message.member.roles.highest;
    if (role.position >= highestRole.position) {
      return message.reply(
        "You cannot apply a role higher or equal to your highest role.",
      );
    }

    await member.roles.add(role);
    message.channel.send(
      ` > **Done:** Role ${role} has been added to ${member} for ${time}.`,
    );

    setTimeout(async () => {
      if (member.roles.cache.has(role.id)) {
        await member.roles.remove(role);
        message.channel.send(
          ` > **Done:** Role ${role} has been removed from ${member} after ${time}.`,
        );
      }
    }, duration);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.channel.id === EmojiRoom) {
    let emoji = message.content;
    let emojilink = message.content;
    if (message.content.includes(`@`)) return;
    if (!emoji.startsWith("<") && !emoji.endsWith(">")) return;
    const id = emoji.match(/\d{15,}/g)[0];
    const type = await axios
      .get(`https://cdn.discordapp.com/emojis/${id}.gif`)
      .then((image) => {
        if (image) return "gif";
        else return "png";
      })
      .catch((err) => {
        return "png";
      });

    let emojilink1 = `https://cdn.discordapp.com/emojis/${id}.${type}`;
    message.channel.send({
      embeds: [
        new MessageEmbed()
          .setAuthor({
            name: `By : ${message.member.displayName || message.user.username}`,
            iconURL: message.author.displayAvatarURL({ dynamic: true }),
            url: "",
          })
          .setThumbnail(emojilink1)
          .setDescription(
            `> **__Requested Emoji :__**\`\`\`${message.content}\`\`\`
> [**_Requested Emoji Link_**](${emojilink1})`,
          )
          .setTimestamp()
          .setImage(line)
          .setColor(color),
      ],
    });
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (Channels.includes(message.channel.id)) {
    message.channel.send({
      embeds: [new MessageEmbed().setColor(color).setImage(line)],
    });
  }
});

client.on("guildMemberUpdate", (old, now) => {
  let oldS = old.premiumSince;
  let nowS = now.premiumSince;
  if (!oldS && nowS) {
    let user = now.guild.members.cache.get(now.user.id);
    let channel = now.guild.channels.cache.get(BoostRoom);
    channel
      .send({
        content: `**__
>  𝐓𝐡𝐚𝐧𝐤𝐬 𝐅𝐨𝐫 𝐀𝐝𝐝𝐞𝐝 𝐁𝐨𝐨𝐬𝐭 ${now.user} __**`,
      })
      .then((SENDAL) => {
        SENDAL.react("♥️");
      });
  }
});




client.on("ready", () => {
  setInterval(async () => {
    client.channels
      .fetch(VoiceChannel)
      .then((channel) => {
        const VoiceConnection = joinVoiceChannel({
          channelId: channel.id,
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator,
        });
      })
      .catch((error) => {
        return;
      });
  }, 1000);
});

client.on("guildMemberAdd", (member) => {
  const welcomeEmbed = new MessageEmbed()
      .setAuthor({name: member.user.username , iconURL : member.user.displayAvatarURL({dynamic: true})})
      .setFooter({ text : member.user.username , iconURL: member.user.displayAvatarURL({dynamic: true})})
    .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
  .setColor(color)
    .setTitle(`** > 𝐇𝐢 : <@${member.user.id}>**`)
    .setDescription(
      `> 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 ${member.guild.name} 𝐓𝐨 𝐎𝐮𝐫 𝐒𝐭𝐨𝐫𝐞 ’ 𝐎𝐮𝐫 𝐒𝐭𝐨𝐫𝐞 𝐈𝐬 𝐎𝐧𝐞 𝐎𝐟 𝐓𝐡𝐞 𝐁𝐢𝐠𝐠𝐞𝐭 𝐀𝐧𝐝 𝐁𝐞𝐬𝐭 𝐒𝐭𝐨𝐫𝐞 𝐎𝐟 𝐓𝐡𝐢𝐬 𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲 

        
        > 𝐓𝐡𝐢𝐬 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𝐖𝐢𝐥𝐥 𝐇𝐞𝐥𝐩 𝐘𝐨𝐮 𝐈𝐧 𝐎𝐮𝐫 𝐒𝐞𝐫𝐯𝐞𝐫

        > 𝐘𝐨𝐮𝐫 𝐈𝐝 𝐈𝐬 : ${member.user.id}

        > 𝐘𝐨𝐮𝐫 𝐂𝐨𝐮𝐧𝐭 𝐈𝐬 : ${member.guild.memberCount}
        
        > 𝐅𝐨𝐫 𝐎𝐫𝐝𝐞𝐫 : <#${OrderRoom}>
        
        > 𝐅𝐨𝐫 𝐀𝐩𝐩𝐥𝐲 : <#${ApplyRoom}>
        
        > 𝐅𝐨𝐫 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 : <#${SupportRoom}>

        > 𝐅𝐨𝐫 𝐓𝐚𝐤𝐞 𝐍𝐨𝐭𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐑𝐨𝐥𝐞𝐬 : <#${NotificationRoles}>

        > 𝐅𝐨𝐫 𝐌𝐞𝐝𝐚𝐢𝐭𝐨𝐫 : <#${MediatorRoom}>
        
𝐖𝐢𝐭𝐡 𝐖𝐢𝐭𝐡 𝐔𝐬 ༼ つ ◕◡◕ ༽つ`,
    )
    .setImage(line)
    .setTimestamp();

  const welcomeChannel = member.guild.channels.cache.get(WelcomeRoom);
  if (welcomeChannel) {
    welcomeChannel.send({ embeds: [welcomeEmbed] }).catch((error) => {
      console.error(
        `Error sending welcome message in channel: ${error.message}`,
      );
    });
  } else {
    console.error("Channel not found for welcome messages.");
  }

  const privateMessage = new MessageEmbed()
    .setColor(color)
    .setTitle(`** > 𝐇𝐢 : <@${member.user.id}>**`)
    .setDescription(
      `**
Welcome To ${member.guild.name} 

>  مرحبا بك ، نورت اقدم و افضل ستور بل وطن العربي ${member.guild.name}   

> تعريف بسيط : ${member.guild.name} سيرفر عربي يوفر جميع الخدمات ، حيث يتكون من طاقم عمل ممتاز ، ويعمل علي تطوير خدماته دائما بشكل يليق بكم ، . ويوفر جميع المبيعات 

>  لطلب اوردر بما تحتاجه من مبيعات أو تصاميم : <#${OrderRoom}>  

>  للتقديم علي طاقم العمل : <#${ApplyRoom}> :

# نتمي لك السعاده معنا 
**`,
    )
    .setTimestamp();

  member.send({ embeds: [privateMessage] }).catch((error) => {
    console.error(`Error sending private welcome message: ${error.message}`);
  });
});

client.on("ready", () => {
  setInterval(() => {
    const channel = client.channels.cache.get(AzkarRoom);
    if (channel) {
      let randomAzkar = azkar[Math.floor(Math.random() * azkar.length)];

      const embed = new MessageEmbed()
        .setColor(color)
        .setTitle("Azkar")
        .setDescription(`**${randomAzkar}**`)
        .setImage(line)
        .setTimestamp();

      channel
        .send({ embeds: [embed] })
        .then(() => console.log("تم إرسال الرسالة بنجاح"))
        .catch((error) =>
          console.error(`خطأ أثناء إرسال الرسالة: ${error.message}`),
        );
    }
  }, 600000);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (!message.member.roles.cache.has(TeamRole)) {
    return;
  }

  if (message.channel.parentId !== OrderCategory) {
    return;
  }

  const mention = message.mentions.roles.first();
  if (mention && message.content.startsWith(`<@&${mention.id}>`)) {
    const roleName = mention.name;
    const responseMessage = ` > **The people who own This Role ${roleName} request were called. Please wait**`;
    await message.reply(responseMessage);
    const membersWithRole = message.guild.roles.cache.get(mention.id).members;
    membersWithRole.forEach((member) => {
      member.send(
        `**طلب الزبون** 

        
The Ticket : **${message.channel}**

**Mentioned By** : **<@${message.author.id}>**
`,
      );
    });
  }
});
client.on('messageCreate' , async(message) => {
      if(message.author.bot) return;
      if(message.channel.id != feedback) return;
        message.reply({embeds:[
          new MessageEmbed()
          .setColor(color)
          .setDescription(`
    **
    𝐓𝐡𝐚𝐧𝐤𝐬 𝐅𝐨𝐫 𝐆𝐢𝐯𝐢𝐧𝐠 𝐔𝐬 𝐅𝐞𝐞𝐝𝐛𝐚𝐜𝐤 

    𝐖𝐞 𝐇𝐨𝐩𝐞 𝐘𝐨𝐮 𝐕𝐢𝐬𝐢𝐭 𝐒𝐭𝐨𝐫𝐞 𝐀𝐠𝐚𝐢𝐧  
    **
    `)
          .setImage(line)
        ]})
      });



          
       

// <================= Admin ==================> \\

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  const user = message.mentions.members.first();
  const args = message.content.split(" ").slice(2).join(" ");

  if (message.content.startsWith(prefix + "num")) {
    if (!message.member.permissions.has("ADMINISTRATOR")) {
      return message.reply(
        "> ⚠️  | **You Don’t Have Premission**",
      );
    }
    const channel = message.guild.channels.cache.get(NumberRoom);
    const embed = new MessageEmbed()
      .setTitle("**New Seller's Number**")
      .setColor("#000000")
      .setDescription(
        `
**Name : ${user?.user.username}
ID : ${user?.id}
Number Of The Seller : ${args}

Admin Info:

Name : ${message.author.username}
User : <@${message.author.id}>
ID : ${message.author.id}**
`,
      )
      .setThumbnail(message.guild.iconURL())
      .setImage(line);

    channel.send({ embeds: [embed] });

    db.set(`${user?.id}`, args);
    message.reply(
      "> 🟢  | **Done, The Number Was Saved**",
    );
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  const user = message.mentions.members.first();
  const args = message.mentions.roles.first();

  if (message.content.startsWith(prefix + "upgrade-seller")) {
    if (!message.member.permissions.has("ADMINISTRATOR")) {
      return message.reply(
        "> ⚠️  | **You Don’t Have Premission**",
      );
    }
    const channel = message.guild.channels.cache.get(UpgradeRoom);
    const embed = new MessageEmbed()
      .setTitle("**New Seller's UpGrade**")
      .setColor("#000000")
      .setDescription(
        `
**Name : ${user?.user.username}
ID : ${user?.id}
The New Role Of The Seller : ${args}


Admin Info:

Name : ${message.author.username}
**
`,
      )
      .setThumbnail(message.guild.iconURL())
      .setImage(line);

    channel.send({ embeds: [embed] });
    db.set(`upgraded_${user?.id}`, args);
    message.reply("> 🟢 | **Done**");
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  const user = message.mentions.members.first();
  const args = message.mentions.roles.first();

  if (message.content.startsWith(prefix + "welcome-seller")) {
    if (!message.member.permissions.has("ADMINISTRATOR")) {
      return message.reply(
        "> ⚠️  | **You Don’t Have Premission**",
      );
    }
    const channel = message.guild.channels.cache.get(WelcomeSellerRoom);
    const embed = new MessageEmbed()
      .setTitle("**New Seller's WeLCome**")
      .setColor("#000000")
      .setDescription(
        `
**Name : ${user?.user.username}
ID : ${user?.id}
The Roles Of The Seller : ${args}


Admin Info:

Name : ${message.author.username}
**
`,
      )
      .setThumbnail(message.guild.iconURL())
      .setImage(line);

    channel.send({ embeds: [embed] });
    db.set(`roles-seller_${user?.id}`, args);
    message.reply("> 🟢| **Done**");
  }
});

client.on("messageCreate", async (message) => {
  if (message.content.startsWith(prefix + "un-deafen")) {
    if (!message.member.permissions.has("DEAFEN_MEMBERS"))
      return message.reply(
        "> ⚠️ | **You Don’t Have Permission**",
      );
    const member = message.mentions.members.first();
    if (!member || !member.voice.channel)
      return message.reply(
        "> ⚠️ | **He Must Be In Voice**",
      );
    member.voice
      .setDeaf(false)
      .catch((err) =>
        message.reply(
          "> ⚠️ | **I Don’t Have Permission**",
        ),
      );
    message.reply(`> 🟢 | **Done**`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.content.startsWith(prefix + "deafen")) {
    if (!message.member.permissions.has("DEAFEN_MEMBERS"))
      return message.reply(
        "> ⚠️ | **You Don’t Have Permission**",
      );
    const member = message.mentions.members.first();
    if (!member || !member.voice.channel)
      return message.reply(
        "> ⚠️ | **He Must Be In Voice**",
      );
    member.voice
      .setDeaf(true)
      .catch((err) =>
        message.reply(
          "> ⚠️ | **I Don’t Have Permission**",
        ),
      );
    message.reply(`> 🟢 | **Done**`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.content.startsWith(prefix + "move")) {
    if (!message.author.bot && message.mentions.members.size === 1) {
      const mentionedMember = message.mentions.members.first();
      const authorVoiceChannel = message.member.voice.channel;

      if (authorVoiceChannel) {
        try {
          if (mentionedMember.voice.channel) {
            await mentionedMember.voice.setChannel(authorVoiceChannel);
            message.reply(`> 🟢 | **Done**`);
          } else {
            message.reply(
              `> ⚠️ | **He Must Be In Voice**`,
            );
          }
        } catch (error) {
          console.error(error);
          message.channel.send(`${error}`);
        }
      } else {
        message.reply(
          "> ⚠️ | **You Must Be In Voice**",
        );
      }
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.content.startsWith(prefix + "un-deafen")) {
    if (!message.member.permissions.has("DEAFEN_MEMBERS"))
      return message.reply(
        "> ⚠️ | **You Don’t Have Permission**",
      );
    const member = message.mentions.members.first();
    if (!member || !member.voice.channel)
      return message.reply(
        "> ⚠️ | **He Must Be In Voice**",
      );
    member.voice
      .setDeaf(true)
      .catch((err) =>
        message.reply(
          "> ⚠️ | **I Don’t Have Permission**",
        ),
      );
    message.reply(`> 🟢  | **Done**`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.content.startsWith(prefix + "vkick")) {
    if (!message.member.permissions.has("MOVE_MEMBERS"))
      return message.reply(
        "> ⚠️ | **You Don’t Have Permission**",
      );
    const member = message.mentions.members.first();
    if (!member || !member.voice.channel)
      return message.reply(
        "> ⚠️ | **He Must Be In Voice**",
      );
    member.voice
      .disconnect()
      .catch((err) =>
        message.reply(
          "> ⚠️ | **I Don’t Have Permission**",
        ),
      );
    message.reply(`> 🟢 | **Done**`);
  }
});

client.on("messageCreate", async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === "temprole") {
    if (args.length < 3) {
      return message.reply(
        `> ⚠️ | ** Failed Please Type Like This : ${prefix}temprole User Role And Time**`,
      );
    }
    const user = message.mentions.users.first();
    const role = message.mentions.roles.first();
    const durationInDays = parseFloat(args[2]);
    if (!user || !role || isNaN(durationInDays)) {
      return message.reply(
        `> ⚠️ | ** Failed Please Type Like This : ${prefix}temprole User Role And Time**`,
      );
    }
    const member = message.guild.members.cache.get(user.id);
    if (!member) {
      return message.reply(
        "> ⚠️ | ** I Can’t Found This User**",
      );
    }
    const durationInMs = durationInDays * 24 * 60 * 60 * 1000;
    try {
      await member.roles.add(role);
      message.reply(`> 🟢 | **Done**`);
      setTimeout(async () => {
        await member.roles.remove(role);
      }, durationInMs);
    } catch (error) {
      console.error(error);
      message.reply(error);
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + "add-emoji")) {
    const args = message.content.split(" ");

    const emojiInput = args[1];

    if (!emojiInput) {
      return message.reply(
        "> ⚠️ | ** Please Type A Emoji**",
      );
    }

    const emojiRegex = /<a?:\w+:\d+>/;
    const customEmoji = emojiRegex.exec(emojiInput);

    if (customEmoji) {
      const emojiId = customEmoji[0].split(":")[2].replace(">", "");
      const emojiName = customEmoji[0].split(":")[1];

      try {
        const emojiUrl = `https://cdn.discordapp.com/emojis/${emojiId}.png`;
        await message.guild.emojis.create(emojiUrl, emojiName);
        message.reply(`> 🟢 | **Done**`);
      } catch (error) {
        console.error(error);
        message.reply(error);
      }
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(`${prefix}info-emoji`)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const emojiArg = args.slice(1).join(" ");
    const emojiRegex = /<:(\w+):(\d+)>/;
    const match = emojiRegex.exec(emojiArg);
    if (!match) {
      return message.reply(
        "> ⚠️ | ** Please Type A Emoji **",
      );
    }
    const emojiName = match[1];
    const emojiId = match[2];
    const emoji = client.emojis.cache.get(emojiId);
    if (!emoji) {
      return message.reply(
        "> ⚠️ | ** I Can’t Found This Emoji**",
      );
    }
    const emojiInfo = `
**Emoji Name:** ${emoji.name}
**Emoji ID:** ${emoji.id}
**Emoji URL:** ${emoji.url}
**Animated:** ${emoji.animated}
**Created At:** ${emoji.createdAt.toDateString()}
`;
    message.reply(emojiInfo);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === prefix + "lock") {
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return;

    const lockRow = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("unlock")
        .setLabel("Unlock")
        .setStyle("SUCCESS"),
      new MessageButton()
        .setCustomId("lock")
        .setLabel("Lock")
        .setStyle("DANGER"),
    );
    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle("**Manage Channel**")
      .setDescription(`> 🟢  | **Done**`);
    await message.channel.permissionOverwrites.edit(
      message.guild.roles.everyone,
      { SEND_MESSAGES: false },
    );
    const sentMessage = await message.reply({
      embeds: [embed],
      components: [lockRow],
    });
    const collector = sentMessage.createMessageComponentCollector({
      componentType: "BUTTON",
      max: 100,
      time: null,
    });
    collector.on("collect", async (interaction) => {
      if (!interaction.member.permissions.has("MANAGE_CHANNELS")) return;
      if (interaction.customId === "unlock") {
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { SEND_MESSAGES: true },
        );
        embed.setDescription(`> 🟢  | **Done**`);
        await interaction.update({ embeds: [embed], components: [lockRow] });
      }
      if (interaction.customId === "lock") {
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { SEND_MESSAGES: false },
        );
        embed.setDescription(`> 🟢 | **Done**`);
        await interaction.update({ embeds: [embed], components: [lockRow] });
      }
    });
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === prefix + "un-lock") {
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return;

    const lockRow = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("unlock")
        .setLabel("Unlock")
        .setStyle("SUCCESS"),
      new MessageButton()
        .setCustomId("lock")
        .setLabel("Lock")
        .setStyle("DANGER"),
    );
    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle("**Manage Channel**")
      .setDescription(`> 🟢 | **Done**`);
    await message.channel.permissionOverwrites.edit(
      message.guild.roles.everyone,
      { SEND_MESSAGES: true },
    );
    const sentMessage = await message.reply({
      embeds: [embed],
      components: [lockRow],
    });
    const collector = sentMessage.createMessageComponentCollector({
      componentType: "BUTTON",
      max: 100,
      time: null,
    });
    collector.on("collect", async (interaction) => {
      if (!interaction.member.permissions.has("MANAGE_CHANNELS")) return;
      if (interaction.customId === "unlock") {
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { SEND_MESSAGES: true },
        );
        embed.setDescription(`> 🟢  | **Done**`);
        await interaction.update({ embeds: [embed], components: [lockRow] });
      }
      if (interaction.customId === "lock") {
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { SEND_MESSAGES: false },
        );
        embed.setDescription(`> 🟢  | **Done**`);
        await interaction.update({ embeds: [embed], components: [lockRow] });
      }
    });
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === prefix + "hide") {
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return;

    const lockRow = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("unhide")
        .setLabel("unhide")
        .setStyle("SUCCESS"),
      new MessageButton()
        .setCustomId("hide")
        .setLabel("hide")
        .setStyle("DANGER"),
    );
    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle("**Manage Channel**")
      .setDescription(`> 🟢 | **Done**`);
    await message.channel.permissionOverwrites.edit(
      message.guild.roles.everyone,
      { VIEW_CHANNEL: false },
    );
    const sentMessage = await message.reply({
      embeds: [embed],
      components: [lockRow],
    });
    const collector = sentMessage.createMessageComponentCollector({
      componentType: "BUTTON",
      max: 100,
      time: null,
    });
    collector.on("collect", async (interaction) => {
      if (!interaction.member.permissions.has("MANAGE_CHANNELS")) return;
      if (interaction.customId === "unhide") {
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { VIEW_CHANNEL: true },
        );
        embed.setDescription(`> 🟢  | **Done**`);
        await interaction.update({ embeds: [embed], components: [lockRow] });
      }
      if (interaction.customId === "hide") {
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { VIEW_CHANNEL: false },
        );
        embed.setDescription(`> 🟢 | **Done**`);
        await interaction.update({ embeds: [embed], components: [lockRow] });
      }
    });
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === prefix + "show") {
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return;

    const lockRow = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("unhide")
        .setLabel("unhide")
        .setStyle("SUCCESS"),
      new MessageButton()
        .setCustomId("hide")
        .setLabel("hide")
        .setStyle("DANGER"),
    );
    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle("**Manage Channel**")
      .setDescription(`> 🟢 | **Done**`);
    await message.channel.permissionOverwrites.edit(
      message.guild.roles.everyone,
      { VIEW_CHANNEL: true },
    );
    const sentMessage = await message.reply({
      embeds: [embed],
      components: [lockRow],
    });
    const collector = sentMessage.createMessageComponentCollector({
      componentType: "BUTTON",
      max: 100,
      time: null,
    });
    collector.on("collect", async (interaction) => {
      if (!interaction.member.permissions.has("MANAGE_CHANNELS")) return;
      if (interaction.customId === "unhide") {
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { VIEW_CHANNEL: true },
        );
        embed.setDescription(`> 🟢 | **Done**`);
        await interaction.update({ embeds: [embed], components: [lockRow] });
      }
      if (interaction.customId === "hide") {
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { VIEW_CHANNEL: false },
        );
        embed.setDescription(`> 🟢 | **Done**`);
        await interaction.update({ embeds: [embed], components: [lockRow] });
      }
    });
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === prefix + "ban") {
    if (!message.member.permissions.has("BAN_MEMBERS")) {
      return message.reply(
        "> ⚠️ | ** You Don’t Have Premission**",
      );
    }

    const args = message.content.split(" ").slice(1);
    const userId = args[0] || message.mentions.users.first();
    const reason = args.slice(1).join(" ") || "No reason provided";

    if (!userId) {
      return message.reply(
        "> ⚠️ | ** You Have To Mention A Member**",
      );
    }

    try {
      message.reply(`> 🟢 | **Done**`);
    } catch (error) {
      console.error(`${error}`);
      message.reply(`${error}`);
    }
  }

  if (message.content === prefix + "un-ban") {
    if (!message.member.permissions.has("BAN_MEMBERS")) {
      return message.reply(
        "> ⚠️ | ** You Don’t Have Premission**",
      );
    }

    const args = message.content.split(" ").slice(1);
    const userId = message.mentions.users.first();

    if (!userId) {
      return message.reply(
        "> ⚠️ | ** You Have To Mention A Member**",
      );
    }

    try {
      await message.guild.members.unban(userId);
      message.reply(`> 🟢 | **Done**`);
    } catch (error) {
      console.error(`${error}`);
      message.reply(`${error}`);
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + "kick")) {
    if (!message.member.permissions.has("KICK_MEMBERS")) {
      return message.reply(
        "> ⚠️ | ** You Don’t Have Premission**",
      );
    }

    const args = message.content.split(" ").slice(1);
    const userId = message.mentions.users.first();
    const reason = args.slice(1).join(" ") || "No reason provided";

    if (!userId) {
      return message.reply(
        "> ⚠️ | ** You Have To Mention A Member**",
      );
    }

    try {
      const member = await message.guild.members.fetch(userId);
      if (!member) {
        return message.reply(
          "> ⚠️ | ** I Can’t Found This User**",
        );
      }

      await member.kick(reason);
      message.reply(`> 🟢 | **Done**`);
    } catch (error) {
      console.error(`${error}`);
      message.reply(`${error}`);
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + "timeout")) {
    if (!message.member.permissions.has("MODERATE_MEMBERS")) {
      return message.reply(
        "> ⚠️ | ** You Don’t Have Premission**",
      );
    }

    const args = message.content.split(" ").slice(1);
    const userId = message.mentions.users.first();
    const duration = parseInt(args[1]);
    const reason = args.slice(2).join(" ") || "No reason provided";

    if (!userId || isNaN(duration)) {
      return message.reply(
        "> ⚠️ | ** You Have To Mention A Member**",
      );
    }

    try {
      const member = await message.guild.members.fetch(userId);
      if (!member) {
        return message.reply(
          "> ⚠️ | ** I Can’t Found This User**",
        );
      }

      await member.timeout(duration * 60 * 1000, reason);
      message.reply(`> 🟢 | **Done**`);
    } catch (error) {
      console.error(`${error}`);
      message.reply(`${error}`);
    }
  }

  if (message.content.startsWith(prefix + "un-timeout")) {
    if (!message.member.permissions.has("MODERATE_MEMBERS")) {
      return message.reply(
        "> ⚠️ | ** You Don’t Have Premission**",
      );
    }

    const args = message.content.split(" ").slice(1);
    const userId = message.mentions.users.first();

    if (!userId) {
      return message.reply(
        "> ⚠️ | ** You Have To Mention A Member**",
      );
    }

    try {
      const member = await message.guild.members.fetch(userId);
      if (!member) {
        return message.reply(
          "> ⚠️ | ** I Can’t Found This User**",
        );
      }

      await member.timeout(null);
      message.reply(`> 🟢  | **Done**`);
    } catch (error) {
      console.error(`${error}`);
      message.reply(`${error}`);
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + "mute-voice")) {
    if (!message.member.permissions.has("MUTE_MEMBERS")) {
      return message.reply(
        "> ⚠️ | ** You Don’t Have Premission**",
      );
    }

    const args = message.content.split(" ").slice(1);
    const userId = message.mentions.users.first();
    const reason = args.slice(1).join(" ") || "No reason provided";

    if (!userId) {
      return message.reply(
        "> ⚠️ | ** You Have To Mention A Member**",
      );
    }

    try {
      const member = await message.guild.members.fetch(userId);
      if (!member) {
        return message.reply(
          "> ⚠️ | ** I Can’t Found This User**",
        );
      }

      await member.voice.setMute(true, reason);
      message.reply(`> 🟢  | **Done**`);
    } catch (error) {
      console.error(`${error}`);
      message.reply(`${error}`);
    }
  }

  if (message.content.startsWith(prefix + "un-mute-voice")) {
    if (!message.member.permissions.has("MUTE_MEMBERS")) {
      return message.reply(
        "> ⚠️ | ** You Don’t Have Premission**",
      );
    }

    const args = message.content.split(" ").slice(1);
    const userId = message.mentions.users.first();

    if (!userId) {
      return message.reply(
        "> ⚠️ | ** You Have To Mention A Member**",
      );
    }

    try {
      const member = await message.guild.members.fetch(userId);
      if (!member) {
        return message.reply(
          "> ⚠️ | ** I Can’t Found This User**",
        );
      }

      await member.voice.setMute(false);
      message.reply(`> 🟢 | **Done**`);
    } catch (error) {
      console.error(`${error}`);
      message.reply(`${error}`);
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  const args = message.content.split(" ").slice(1);
  const userId = message.mentions.users.first();
  const reason = args.slice(1).join(" ") || "No reason provided";

  if (message.content.startsWith(prefix + "mute")) {
    if (!message.member.permissions.has("MUTE_MEMBERS")) {
      return message.reply(
        "> ⚠️ | **You Don’t Have Permission**",
      );
    }

    if (!userId) {
      return message.reply(
        "> ⚠️ | **You Have To Mention A Member**",
      );
    }

    try {
      const member = await message.guild.members.fetch(userId.id);
      if (!member) {
        return message.reply(
          "> ⚠️ | **I Can’t Find This User**",
        );
      }

      let mutedRole = message.guild.roles.cache.find(
        (role) => role.name === "Muted",
      );
      if (!mutedRole) {
        mutedRole = await message.guild.roles.create({
          name: "Muted",
          permissions: [],
        });
        message.guild.channels.cache.forEach((channel) => {
          channel.permissionOverwrites.edit(mutedRole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
          });
        });
      }

      await member.roles.add(mutedRole, reason);
      message.reply("> 🟢 | **User has been muted**");
    } catch (error) {
      console.error(error);
      message.reply(
        `> ⚠️ | **An error occurred: ${error.message}**`,
      );
    }
  }

  if (message.content.startsWith(prefix + "un-mute")) {
    if (!message.member.permissions.has("MUTE_MEMBERS")) {
      return message.reply(
        "> ⚠️ | **You Don’t Have Permission**",
      );
    }

    if (!userId) {
      return message.reply(
        "> ⚠️ | **You Have To Mention A Member**",
      );
    }

    try {
      const member = await message.guild.members.fetch(userId.id);
      if (!member) {
        return message.reply(
          "> ⚠️ | **I Can’t Find This User**",
        );
      }

      const mutedRole = message.guild.roles.cache.find(
        (role) => role.name === "Muted",
      );
      if (!mutedRole) {
        return message.reply(
          "> ⚠️ | **Muted role not found**",
        );
      }

      await member.roles.remove(mutedRole);
      message.reply(
        "> 🟢 | **User has been unmuted**",
      );
    } catch (error) {
      console.error(error);
      message.reply(
        `> ⚠️ | **An error occurred: ${error.message}**`,
      );
    }
  }
});

client.on("messageCreate", async (message) => {
  if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot)
    return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "g-role" || command === "r-role") {
    handleRoleCommand(message, command);
  }
});

function handleRoleCommand(message, command) {
  if (!message.member.permissions.has("ADMINISTRATOR")) {
    return message.reply(
      "> ⚠️ | ** You Don’t Have Premission**",
    );
  }
  const theRole = message.mentions.roles.first();
  const theUser = message.mentions.members.first();
  if (!theUser) {
    return message.reply(
      "> ⚠️ | ** You Have To Mention A Member**",
    );
  }
  if (!theRole) {
    return message.reply(
      "> ⚠️ | ** You Have To Mention A Role**",
    );
  }
  if (message.member.roles.highest.comparePositionTo(theRole) <= 0) {
    return message.reply(
      "> ⚠️ | ** This Role Is Bigger Than Your Role**",
    );
  }
  const action = command === "g-role" ? "add" : "remove";
  theUser.roles[action](theRole)
    .then(() => {
      message.reply("> 🟢 | **Done**");
    })
    .catch((error) => {
      message.reply(error.message);
    });
}

client.on("messageCreate", async (message) => {
  if (message.content.startsWith(prefix + "clear")) {
    const args = message.content.split(" ");
    let amount = Number(args[1]) || 100;
    const permission = message.member.permissions.has("MANAGE_MESSAGES");
    const me = message.guild.me.permissions.has("MANAGE_MESSAGES");
    if (!permission)
      return message.reply(
        "> ⚠️ | ** You Don’t Have Premission**",
      );
    if (!me)
      return message.reply(
        "> ⚠️ | ** I Don’t Have Premission**",
      );
    args[1] = args[1] ? parseInt(args[1]) : 100;
    if (isNaN(args[1]))
      return message
        .reply({
          content: `> ⚠️ | ** Please Type A Number**`,
        })
        .catch((err) => {
          console.log(err.message);
        });
    if (amount > 100)
      return message
        .reply(
          "> ⚠️ | ** You Can’t Delete More Than 100 Messages **",
        )
        .cache((err) => {
          console.log(err.message);
        });
    if (amount < 1)
      return message
        .reply(
          "> ⚠️ | ** You Can’t Delete Less Than 1 Message **",
        )
        .catch((err) => {
          console.log(err.message);
        });
    message.delete().catch((err) => {
      console.log(err.message);
    });
    let messages = await message.channel.messages.fetch({ limit: amount });
    messages = messages.filter(
      (m) =>
        Date.now() - new Date(m.createdTimestamp).getTime() <=
        14 * 24 * 60 * 60000,
    );
    message.channel
      .bulkDelete(messages)
      .then(() => {
        message.channel
          .send({
            content: `\`\`\`js
${messages.size} Massages Have Been Deletes\`\`\``,
          })
          .then((msg) => {
            setTimeout(() => {
              msg.delete().catch((err) => {
                console.log(err.message);
              });
            }, 5000);
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => console.log(err.message));
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + "name")) {
    if (!message.member.permissions.has("MANAGE_NICKNAMES")) {
      return message.reply(
        "> ⚠️ | ** You Don’t Have Premission**",
      );
    }

    const args = message.content.split(" ").slice(1);
    const userId = args[0] || message.mentions.users.first();
    const newNickname = args.slice(1).join(" ");

    if (!userId || !newNickname) {
      return message.reply(
        "> ⚠️ | ** You Have To Mention A Member**",
      );
    }

    try {
      const member = await message.guild.members.fetch(userId);
      if (!member) {
        return message.reply(
          "> ⚠️ | ** I Can't Found This User**",
        );
      }

      await member.setNickname(newNickname);
      message.reply(`> 🟢 | **Done**`);
    } catch (error) {
      console.error(`${error}`);
      message.reply(`${error}`);
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === prefix + "m-role") {
    if (!message.member.permissions.has("ADMINISTRATOR")) {
      return message.reply(
        "> ⚠️ | **You need  permissions to use this command**",
      );
    }

    const mentionedRole = message.mentions.roles.first();
    if (!mentionedRole) {
      return message.reply(
        "> ⚠️ | **You have to mention a role.**",
      );
    }
    const highPermissions = ["ADMINISTRATOR", "MANAGE_GUILD", "MANAGE_ROLES"];
    const hasHighPermissions = mentionedRole.permissions
      .toArray()
      .some((permission) => highPermissions.includes(permission));

    if (hasHighPermissions) {
      return message.reply(
        "> ⚠️ | **The mentioned role has high permissions and cannot be used.**",
      );
    }
    try {
      const members = await message.guild.members.fetch();
      members.forEach((member) => {
        member.roles.add(mentionedRole).catch(console.error);
      });
      message.reply(`> 🟢  | **Done**`);
    } catch (error) {
      console.error(error);
      message.reply(
        "> ⚠️ | **An error occurred while assigning roles.**",
      );
    }
  }
});

// <================= Admin All ==================> \\

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === prefix + `slow-mode-all`) {
    const channels = message.guild.channels.cache.filter(
      (channel) => channel.type === "GUILD_TEXT",
    );
    message.reply(`>  ⚙️| **Waiting**`);

    channels.forEach(async (channel) => {
      try {
        await channel.setRateLimitPerUser(SlowModeTime);
        message.reply(
          `> 🟢  | **Done For **: ${channel.name}`,
        );
      } catch (error) {
        console.error(`${error}`);
      }
    });
  }
});

client.on("messageCreate", async (message) => {
  if (message.content.startsWith(prefix + "un-ban-all")) {
    if (!message.member.permissions.has("BAN_MEMBERS")) {
      return message.reply(
        "> ⚠️ | ** You Don’t Have Premission**",
      );
    }

    try {
      let bans = await message.guild.bans.fetch();
      if (bans.size === 0) {
        return message.reply(
          "> ⚠️ | ** There Isnt Any Member Banned **",
        );
      }

      bans.forEach(async (ban) => {
        await message.guild.members.unban(ban.user);
      });

      message.reply(
        `> 🟢 | **Done** : **${bans.size} Members UnBanned**`,
      );
    } catch (error) {
      console.error(`${error.message}`);
      message.reply(`${error.message}`);
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === prefix + "hide-all") {
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return;
    const lockRow = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("unhide")
        .setLabel("unhide")
        .setStyle("SUCCESS"),
      new MessageButton()
        .setCustomId("hide")
        .setLabel("hide")
        .setStyle("DANGER"),
    );
    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle("**Manage Channels**")
      .setDescription(
        `> 🟢 | **All channels have been hidden**`,
      );
    message.guild.channels.cache.forEach(async (channel) => {
      await channel.permissionOverwrites.edit(message.guild.roles.everyone, {
        VIEW_CHANNEL: false,
      });
    });
    const sentMessage = await message.reply({
      embeds: [embed],
      components: [lockRow],
    });
    const collector = sentMessage.createMessageComponentCollector({
      componentType: "BUTTON",
      max: 100,
      time: null,
    });
    collector.on("collect", async (interaction) => {
      if (!interaction.member.permissions.has("MANAGE_CHANNELS")) return;
      if (interaction.customId === "unhide") {
        message.guild.channels.cache.forEach(async (channel) => {
          await channel.permissionOverwrites.edit(
            message.guild.roles.everyone,
            { VIEW_CHANNEL: true },
          );
        });
        embed.setDescription(
          `> 🟢 | **All channels have been unhidden**`,
        );
        await interaction.update({ embeds: [embed], components: [lockRow] });
      }
      if (interaction.customId === "hide") {
        message.guild.channels.cache.forEach(async (channel) => {
          await channel.permissionOverwrites.edit(
            message.guild.roles.everyone,
            { VIEW_CHANNEL: false },
          );
        });
        embed.setDescription(
          `> 🟢 | **All channels have been hidden**`,
        );
        await interaction.update({ embeds: [embed], components: [lockRow] });
      }
    });
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === prefix + "show-all") {
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return;
    const lockRow = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("unhide")
        .setLabel("unhide")
        .setStyle("SUCCESS"),
      new MessageButton()
        .setCustomId("hide")
        .setLabel("hide")
        .setStyle("DANGER"),
    );
    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle("**Manage Channels**")
      .setDescription(
        `> 🟢 | **All channels have been Showed**`,
      );
    message.guild.channels.cache.forEach(async (channel) => {
      await channel.permissionOverwrites.edit(message.guild.roles.everyone, {
        VIEW_CHANNEL: true,
      });
    });
    const sentMessage = await message.reply({
      embeds: [embed],
      components: [lockRow],
    });
    const collector = sentMessage.createMessageComponentCollector({
      componentType: "BUTTON",
      max: 100,
      time: null,
    });
    collector.on("collect", async (interaction) => {
      if (!interaction.member.permissions.has("MANAGE_CHANNELS")) return;
      if (interaction.customId === "unhide") {
        message.guild.channels.cache.forEach(async (channel) => {
          await channel.permissionOverwrites.edit(
            message.guild.roles.everyone,
            { VIEW_CHANNEL: true },
          );
        });
        embed.setDescription(
          `> 🟢 | **All channels have been unhidden**`,
        );
        await interaction.update({ embeds: [embed], components: [lockRow] });
      }
      if (interaction.customId === "hide") {
        message.guild.channels.cache.forEach(async (channel) => {
          await channel.permissionOverwrites.edit(
            message.guild.roles.everyone,
            { VIEW_CHANNEL: false },
          );
        });
        embed.setDescription(
          `> 🟢 | **All channels have been hidden**`,
        );
        await interaction.update({ embeds: [embed], components: [lockRow] });
      }
    });
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === prefix + "lock-all") {
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return;
    const lockRow = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("unlock")
        .setLabel("unlock")
        .setStyle("SUCCESS"),
      new MessageButton()
        .setCustomId("lock")
        .setLabel("lock")
        .setStyle("DANGER"),
    );
    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle("**Manage Channels**")
      .setDescription(
        `> 🟢 | **All channels have been Locked**`,
      );
    message.guild.channels.cache.forEach(async (channel) => {
      await channel.permissionOverwrites.edit(message.guild.roles.everyone, {
        SEND_MESSAGES: false,
      });
    });
    const sentMessage = await message.reply({
      embeds: [embed],
      components: [lockRow],
    });
    const collector = sentMessage.createMessageComponentCollector({
      componentType: "BUTTON",
      max: 100,
      time: null,
    });
    collector.on("collect", async (interaction) => {
      if (!interaction.member.permissions.has("MANAGE_CHANNELS")) return;
      if (interaction.customId === "unlock") {
        message.guild.channels.cache.forEach(async (channel) => {
          await channel.permissionOverwrites.edit(
            message.guild.roles.everyone,
            { SEND_MESSAGES: true },
          );
        });
        embed.setDescription(
          `> 🟢 | **All channels have been unlocked**`,
        );
        await interaction.update({ embeds: [embed], components: [lockRow] });
      }
      if (interaction.customId === "lock") {
        message.guild.channels.cache.forEach(async (channel) => {
          await channel.permissionOverwrites.edit(
            message.guild.roles.everyone,
            { SEND_MESSAGES: false },
          );
        });
        embed.setDescription(
          `> 🟢 | **All channels have been locked**`,
        );
        await interaction.update({ embeds: [embed], components: [lockRow] });
      }
    });
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === prefix + "un-lock-all") {
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return;
    const lockRow = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("unlock")
        .setLabel("unlock")
        .setStyle("SUCCESS"),
      new MessageButton()
        .setCustomId("lock")
        .setLabel("lock")
        .setStyle("DANGER"),
    );
    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle("**Manage Channels**")
      .setDescription(
        `> 🟢 | **All channels have been Locked**`,
      );
    message.guild.channels.cache.forEach(async (channel) => {
      await channel.permissionOverwrites.edit(message.guild.roles.everyone, {
        SEND_MESSAGES: true,
      });
    });
    const sentMessage = await message.reply({
      embeds: [embed],
      components: [lockRow],
    });
    const collector = sentMessage.createMessageComponentCollector({
      componentType: "BUTTON",
      max: 100,
      time: null,
    });
    collector.on("collect", async (interaction) => {
      if (!interaction.member.permissions.has("MANAGE_CHANNELS")) return;
      if (interaction.customId === "unlock") {
        message.guild.channels.cache.forEach(async (channel) => {
          await channel.permissionOverwrites.edit(
            message.guild.roles.everyone,
            { SEND_MESSAGES: true },
          );
        });
        embed.setDescription(
          `> 🟢 | **All channels have been UnLocked**`,
        );
        await interaction.update({ embeds: [embed], components: [lockRow] });
      }
      if (interaction.customId === "lock") {
        message.guild.channels.cache.forEach(async (channel) => {
          await channel.permissionOverwrites.edit(
            message.guild.roles.everyone,
            { SEND_MESSAGES: false },
          );
        });
        embed.setDescription(
          `> 🟢 | **All channels have been Locked**`,
        );
        await interaction.update({ embeds: [embed], components: [lockRow] });
      }
    });
  }
});




// <================= Public ==================> \\

client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.content.startsWith(prefix + "info-role"))
    return;

  const args = message.content
    .slice(prefix + "info-role".length)
    .trim()
    .split(/ +/);
  const roleName = message.mentions.roles.first();

  if (!roleName) {
    return message.reply(
      "> ⚠️ | **Please Mention A Role **",
    );
  }

  const role = message.guild.roles.cache.find((r) => r.name === roleName);

  if (!role) {
    return message.reply(
      `> ⚠️ | **I Didn’t This Role **`,
    );
  }

  const embed = new MessageEmbed()
    .setTitle("Role Information")
    .setColor(role.color)
    .addField("Name", role.name)
    .addField("Color", `#${role.hexColor}`)
    .addField("Members Count", role.members.size.toString())
    .addField(
      "Permissions",
      role.permissions.toArray().join(", ") || "No Permissions",
    );

  message.channel.send({ embeds: [embed] });
});

client.on("messageCreate", async (message) => {
  if (message.content === prefix + "bans") {
    const guild = message.guild;
    try {
      const bans = await guild.bans.fetch();
      if (bans.size === 0) {
        return message.channel.send(
          "> ⚠️ | **There Aren’t Banned Users In This Server**",
        );
      }
      const embeds = [];
      let description = `> **Total bans:** **${bans.size}**\n\n`;
      bans.forEach((banEntry) => {
        const bannedUser = banEntry.user;
        description += `**Username:** ${bannedUser.tag}\n**ID:** ${bannedUser.id}\n**Reason:** ${banEntry.reason || "No reason specified"}\n\n`;
        if (description.length >= 2048) {
          embeds.push(
            new MessageEmbed()
              .setTitle("Banned Users")
              .setColor(color)
              .setFooter(`${guild.name}`, guild.iconURL({ dynamic: true }))
              .setDescription(description),
          );
          description = "";
        }
      });
      if (description.length > 0) {
        embeds.push(
          new MessageEmbed()
            .setTitle("Banned Users")
            .setColor(color)
            .setFooter(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setDescription(description),
        );
      }
      for (const embed of embeds) {
        await message.channel.send({ embeds: [embed] });
      }
    } catch (error) {
      console.error(error);
    }
  }
});

client.on("messageCreate", async (message) => {
  if (!message.guild || message.author.bot) return;
  const command = message.content.split(" ")[0];
  if (command == prefix + "ping") {
    const msg = Date.now() - message.createdTimestamp;
    const api = Math.round(client.ws.ping);
    let states = "🟢 Excellent";
    let states2 = "🟢 Excellent";
    if (Number(msg) > 70) states = "🟢 Good";
    if (Number(msg) > 170) states = "🟡 Not Bad";
    if (Number(msg) > 350) states = "🔴 Soo Bad";
    if (Number(api) > 70) states2 = "🟢 Good";
    if (Number(api) > 170) states2 = "🟡 Not Bad";
    if (Number(api) > 350) states2 = "🔴 Soo Bad";
    const embed = new MessageEmbed()
      .setAuthor({
        name: `${client.user.username}`,
        iconURL: `${client.user.avatarURL({ format: "png" })}`,
      })
      .addField("**Time Taken:**", msg + " ms , " + states, true)
      .addField("**WebSocket:**", api + " ms 📶 | " + states2, true)
      .setFooter({ text: `${message.guild.name}` })
      .setTimestamp();
    message.channel.send({ embeds: [embed] }).catch((err) => {
      return;
    });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === `${prefix}id`) {
    message.reply(`${message.author.id}`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.content === prefix + "uptime") {
    if (!message.member.permissions.has(`ADMINISTRATOR`))
      return message.reply(`**you don't have permissions**`);
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let s = Math.floor(client.uptime / 1000) % 60;
    ip = `
> __I am Online For__ : \`${days} Days,  ${hours} Hours,  ${minutes} Minutes,  ${s} seconds,\``;
    let embed = new MessageEmbed()
      .setColor("#424242")
      .setTitle(`Bot Uptime :`)
      .setDescription(`**${ip}**`)
      .setThumbnail(client.user.avatarURL())
      .setTimestamp();
    message.reply({ embeds: [embed] });
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "translate") {
    if (args.length < 2) {
      return message.reply(`
**__Please Type It Correctly__ : ${prefix}translate \`[language]\` \`[text]\` **`);
    }

    const language = args[0];
    const text = args.slice(1).join(" ");

    try {
      const translation = await translate(text, { to: language });

      const embed = new MessageEmbed()
        .setTitle(`Translation to __${language}__`)
        .setDescription(
          `
> **Your Text After Translate :**
**__${translation.text}__ **`,
        )
        .setColor(color)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setTimestamp()
        .setAuthor(
          `${message.author.username}`,
          message.author.displayAvatarURL({ dynamic: true }),
        );

      message.channel.send({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      message.reply(`${error}`);
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "calculate") {
    if (args.length < 3) {
      return message.reply("**Please provide a valid operation.**");
    }
    const num1 = parseFloat(args[0]);
    const operator = args[1];
    const num2 = parseFloat(args[2]);
    if (isNaN(num1) || isNaN(num2)) {
      return message.reply(
        "> ⚠️ | ** Please Type The Numbers**",
      );
    }
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          return message.reply(
            "> ⚠️ | ** Please Type A Number Big Than One**",
          );
        }
        result = num1 / num2;
        break;
      default:
        return message.reply(
          "> ⚠️ | ** Please Type A Operator**",
        );
    }
    message.reply(
      `> 📝 | **Your Result Is** : \`${result}\``,
    );
  }
});

client.on("messageCreate", async (message) => {
  if (message.content === prefix + "banner") {
    let userId =
      message.mentions.users.first()?.id ||
      message.content.split(" ")[1] ||
      message.author.id ||
      message.mentions.users.first();
    try {
      const user = await client.users.fetch(userId);
      if (!user.banner) {
        return message.reply(`> ** | This user doesn't have a banner **`);
      }
      const bannerUrl = user.bannerURL({ dynamic: true, size: 1024 });
      const embed = new MessageEmbed()
        .setTitle(`${user.username}'s Banner`)
        .setImage(bannerUrl)
        .setColor(color)
        .setFooter(
          `Requested By ${message.author.username}`,
          message.author.displayAvatarURL({ dynamic: true }),
        )
        .setTimestamp();

      message.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      message.channel.send(`${error}`);
    }
  }
});

client.on("messageCreate", (message) => {
  if (message.content === prefix + "user") {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(message.content.split(" ")[1]) ||
      message.member;
    let Embed = new MessageEmbed()
      .setColor(color)
      .setFields(
        {
          name: "Joined Discord :",
          value: `**<t:${Math.floor(user.user.createdTimestamp / 1000)}:R>**`,
          inline: true,
        },
        {
          name: "Joined Server :",
          value: `**<t:${Math.floor(user.joinedAt / 1000)}:R>**`,
          inline: true,
        },
      )
      .setThumbnail(user.user.avatarURL({ dynamic: true }))
      .setFooter(`${user.user.tag}`, user.user.avatarURL({ dynamic: true }));
    message.reply({
      embeds: [Embed],
      allowedMentions: [{ repliedUser: false }],
    });
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.guild) return;

  if (message.content === prefix + "server") {
    try {
      await message.guild.members.fetch();

      const { guild } = message;
      const { members, channels, emojis, roles } = guild;

      const totalMembers = members.cache.size;
      const onlineMembers = members.cache.filter(
        (member) => member.presence?.status === "online",
      ).size;
      const idleMembers = members.cache.filter(
        (member) => member.presence?.status === "idle",
      ).size;
      const dndMembers = members.cache.filter(
        (member) => member.presence?.status === "dnd",
      ).size;
      const offlineMembers =
        totalMembers - (onlineMembers + idleMembers + dndMembers);
      const botCount = members.cache.filter((member) => member.user.bot).size;

      const firstFiveEmojis =
        emojis.cache
          .map((emoji) => emoji)
          .slice(0, 5)
          .join(" ") || "No emojis";

      const embed = new MessageEmbed()
        .setColor(color)
        .setAuthor({
          name: `${guild.name} Info`,
          iconURL: guild.iconURL({ dynamic: true, size: 1024, format: "png" }),
        })
        .setThumbnail(
          guild.iconURL({ dynamic: true, size: 1024, format: "png" }),
        )
        .addFields(
          { name: "🆔 Server ID:", value: `${guild.id}`, inline: true },
          {
            name: "📆 Created On:",
            value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:R>`,
            inline: true,
          },
          { name: "👑 Owned by:", value: `<@!${guild.ownerId}>`, inline: true },
          {
            name: `👥 Members (${totalMembers}):`,
            value: `**${onlineMembers}** Online | **${idleMembers}** Idle | **${dndMembers}** DND\n**${offlineMembers}** Offline\n**${botCount}** Bots`,
            inline: true,
          },
          {
            name: `💬 Channels (${channels.cache.size}):`,
            value: `**${channels.cache.size} Channels**\n\`${channels.cache.filter((m) => m.type === "GUILD_TEXT").size} Text\` | \`${channels.cache.filter((m) => m.type === "GUILD_VOICE").size} Voice\``,
            inline: true,
          },
          {
            name: "🌐 Others:",
            value: `Verification Level: **${guild.verificationLevel}**\nBoosts: **${guild.premiumSubscriptionCount}**\nRoles: **${roles.cache.size}**`,
            inline: true,
          },
          {
            name: `🛡️ Emojis (${emojis.cache.size}):`,
            value: `${firstFiveEmojis}`,
            inline: true,
          },
        );

      if (embed.fields.length > 0) {
        await message.reply({ embeds: [embed] });
      } else {
        await message.reply(
          "> ⚠️ | **There Aren’t Enough Data**",
        );
      }
    } catch (error) {
      console.error(error);
      await message.reply(`${error.message}`);
    }
  }
});

client.on("messageCreate", async (message) => {
  if (
    message.content == prefix + "top-server" ||
    message.content == prefix + "top-servers"
  ) {
    const guilds = client.guilds.cache
      .sort((a, b) => b.memberCount - a.memberCount)
      .first(100);

    const description = guilds
      .map((guild, index) => {
        return `\`#${index + 1}\` | **${guild.name}** -> **\_\_${guild.memberCount}\_\_** members`;
      })
      .join(`\n\n`);

    const embed = new MessageEmbed()
      .setTitle("Top Guilds")
      .setDescription(description)
      .setColor(color);

    message.reply({ embeds: [embed] });
  }
});

client.on("messageCreate", async (message) => {
  if (message.content === prefix + "boost") {
    if (message.author.bot || !message.guild)
      return message.reply(
        "> ⚠️ | **This Command For Servers Only**",
      );
    let level =
      message.guild.premiumTier === 0
        ? "No Level"
        : `${message.guild.premiumTier}`;
    let boost = message.guild.premiumSubscriptionCount;

    let boostembed = new MessageEmbed()
      .setTitle(`Boost of ${message.guild.name}`)
      .addFields(
        { name: "Boost", value: `**${boost}**` },
        { name: "Level", value: ` **${level}** ` },
      )
      .setColor(color);

    message.reply({ embeds: [boostembed] });
  }
});

client.on("messageCreate", async (message) => {
  const Command = message.content.split(" ")[0].toLowerCase();

  if (Command === prefix + "avatar") {
    try {
      const args = message.content.split(" ");
      const user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[1]) ||
        message.member;
      const embed = new MessageEmbed()
        .setTitle("Download Avatar")
        .setURL(user.user.avatarURL({ dynamic: true, size: 512 }))
        .setAuthor({
          name: `${message.guild.name}`,
          iconURL: message.guild.iconURL({ dynamic: true }),
        })
        .setImage(user.user.avatarURL({ dynamic: true, size: 512 }))
        .setColor(color)
        .setTimestamp()
        .setFooter({
          text: `${message.author.username}`,
          iconURL: message.author.avatarURL({ dynamic: true }),
        });
      message.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      message.reply(`${error}`);
    }
  }
});

function formatDuration(duration) {
  const seconds = Math.floor((duration / 1000) % 60);
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  const days = Math.floor(duration / (1000 * 60 * 60 * 24));

  const dayStr = days > 0 ? `${days}d ` : "";
  const hourStr = hours > 0 ? `${hours}h ` : "";
  const minuteStr = minutes > 0 ? `${minutes}m ` : "";
  const secondStr = seconds > 0 ? `${seconds}s` : "";

  return `${dayStr}${hourStr}${minuteStr}${secondStr}`.trim();
}

client.afk = new Collection();
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + "afk")) {
    let reason = message.content.split(" ").slice(1).join(" ") || "AFK";
    client.afk.set(message.author.id, {
      reason: reason,
      timestamp: Date.now(),
    });

    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle("AFK Status")
      .setDescription(
        `> 🟢  |**${message.author.username}** Is Now Afk For : ${reason}`,
      )
      .setTimestamp();

    message.reply({ embeds: [embed] });
    return;
  }
  if (message.mentions.users.size > 0) {
    message.mentions.users.forEach((user) => {
      if (client.afk.has(user.id)) {
        const afkInfo = client.afk.get(user.id);
        message.channel.send(
          `**${user.username}** Is In Afk For : ${afkInfo.reason}`,
        );
      }
    });
  }
  if (client.afk.has(message.author.id)) {
    const afkInfo = client.afk.get(message.author.id);
    const afkDuration = Date.now() - afkInfo.timestamp;
    client.afk.delete(message.author.id);

    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle("AFK Status")
      .setDescription(
        `**${message.author.username}** : The Afk Ened Now , Afk Duration: ${formatDuration(afkDuration)}\n ,Reason: ${afkInfo.reason}`,
      )
      .setTimestamp();
    message.reply({ embeds: [embed] });
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.channel.guild) return;

  if (message.content.startsWith(prefix + "say")) {
    let args = message.content.split(" ").slice(1).join(" ");

    if (!args)
      return message.reply(
        "> ⚠️ | ** Please Type A Word**",
      );
    message.delete();
    message.channel.send(args);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.guild) return;

  if (message.content.startsWith(prefix + "embed")) {
    const args = message.content.slice(prefix.length + "embed".length).trim();

    if (!args)
      return message.reply(
        "> ⚠️ | **Please type a message**",
      );

    try {
      await message.delete();

      const attach = message.attachments.first();
      const embed = new MessageEmbed()
        .setTitle("**Florida Store**")
        .setDescription(`**${args}**`)
        .setFooter({
          text: `CopyRights by ${DevName}`,
          iconURL: message.guild.iconURL(),
        })
        .setTimestamp()
        .setColor(color || "#000000")
        .setThumbnail(message.guild.iconURL());

      if (attach) {
        embed.setImage(attach.proxyURL);
      }

      await message.channel.send({ embeds: [embed] });
    } catch (error) {
      console.error("Error sending embed:", error);
      message.channel.send(
        "> ⚠️ | **Failed to send embed.**",
      );
    }
  }
});

client.on("messageCreate", (message) => {
  if (message.content === prefix + "roles") {
    let roles = message.guild.roles.cache
      .map((role) => `<@&${role.id}>`)
      .join("\n");
    message.channel.send(
      `> 🔗 | **Roles** : ${roles}`,
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content.startsWith(prefix + "bots")) {
    let u = message.guild.members.cache
      .filter((m) => m.user.bot)
      .map((m) => `<@${m.id}>`)
      .join(`\n`);

    let embed = new MessageEmbed()
      .setTitle(`> **Nervo Bot**`)
      .setDescription(`${u}`)
      .setColor(color)
      .setFooter(
        `${message.author.username}`,
        message.author.avatarURL({ dynamic: true }),
      )
      .setTimestamp();
    message.channel.send({ embeds: [embed] });
  }
});

// <================= Invites System ==================> \\

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content.toLowerCase() === prefix + "c-link") {
    const guild = message.guild;
    const channel = message.channel;
    try {
      const invite = await channel.createInvite({
        maxAge: 0,
        maxUses: 99,
        unique: true,
        reason: `Invite request by ${message.author.tag}`,
      });
      message.reply(
        `> 🟢 | **Link** : ${invite.url}`,
      );
    } catch (error) {
      console.error(`${error}`);
      message.reply(`${error}`);
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.content == prefix + "invites") {
    var invite = await inviteTracker.getMemberInvites(message.member);
    message.channel.send(`**You has ${invite.count} invite(s).**`);
  } else if (message.content == prefix + "top-invites") {
    var top = await inviteTracker.getTopInvites(message.guild);
    message.channel.send(
      top
        .map((i, n) => `\`#${n + 1}\`- **${i.user.tag}** has \`${i.count}\``)
        .join("\n"),
    );
  }
});

// <========== Auto ==========>

client.on("messageCreate", async (message) => {
  if (
    message.content.includes(prefix + `ads` || prefix + `Ads` || prefix + `ADS`)
  ) {
    return message.reply({
      content: ` \`-\`  **إعلان مدفوع وليس لنا علاقه بالسـيرفر 
- لازم تكون داخل السيرفر قبل الانتهاء علشان تستلم. 
- لطلب مثله توجه الي (<#${AdsTicketRoom}>)**`,
      files: [line],
    });
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === "مقبول") {
    message.delete();
    message.channel.send(`**تم قبولك في تيم ${message.guild.name}**

    **برجاء التفاعل بشكل لائق ف السيرفر لكي لا يتم تصفيتك** 

    **برجاء قرائة قوانين و نيوز التيم و اسعار التيم جيداً لعدم أخد ورنات** 
    <#${TeamRules}> , <#${TeamNews}>

    **اجباري وضع اللينك ف البايو الخاص بك بهذه الطريقه**
    **${message.guild.name} :** ${link}

    **و نورتنا يمعلم**`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === "دليل") {
    message.delete();
    message.channel
      .send(`> ** يرجي اجباريأ لمساعدتك بالكامل ، ارسال صوره للتحويلات عن طريق موقع التحويلات :**   

      
  > **About https://probot.io/transactions **`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.content === "شفر") {
    message.delete();
    message.reply(`**من فضلك قم بتشفير الجمله التي ترسلها
  وعدم السب وعدم ذكر خوادم اخري**`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (
    message.content === "لوجو" ||
    message.content === "logo" ||
    message.content === "Logo" ||
    message.content === "LOGO"
  ) {
    message.reply(`${ServerLogo}`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (
    message.content === "png" ||
    message.content === "Png" ||
    message.content === "PNG"
  ) {
    message.reply(`${PngLogo}`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (
    message.content === "banner" ||
    message.content === "Banner" ||
    message.content === "BANNER" ||
    message.content === "بنر"
  ) {
    message.reply(`${ServerBanner}`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (
    message.content === "line" ||
    message.content === "Line" ||
    message.content === "LINE" ||
    message.content === "خط"
  ) {
    message.delete();
    message.channel.send({
      embeds: [
        new MessageEmbed()
          .setTitle("")
          .setTimestamp()
          .setColor(color)
          .setImage(line),
      ],
    });
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (
    message.content === "link" ||
    message.content === "Link" ||
    message.content === "لينك" ||
    message.content === "LINK"
  ) {
    message.reply(`**𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐈𝐧 __${message.guild.name}__ 


> **𝐋𝐢𝐧𝐤 𝐓𝐡𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 : ${link} **

> **𝐅𝐨𝐫 𝐎𝐫𝐝𝐞𝐫 : <#${OrderRoom}>**

> **𝐅𝐨𝐫 𝐀𝐩𝐩𝐥𝐲 : <#${ApplyRoom}>**

> **𝐅𝐨𝐫 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 : <#${SupportRoom}>**


𝐄𝐧𝐣𝐨𝐲 𝐁𝐫𝐨  (☞ ͡° ͜ʖ ͡°)☞**`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === "مرفوض") {
    message.delete();
    message.channel.send(`**__تم رفضك في فريق ${message.guild.name}__  

  __برجاء تطوير مستواك و التقديم مره اخري__** `);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (
    message.content === "Qr" ||
    message.content === "qr" ||
    message.content === "QR"
  ) {
    message.reply(`${QrPhoto}`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === "$close") {
    message.reply(`$transcript`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === "$close") {
    message.reply(`$delete`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === "$dn") {
    message.reply(`$close`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === "$dn") {
    message.reply(`$transcript`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === "$dn") {
    message.reply(`$delete`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === "Are you sure you would like to close this ticket?") {
    message.reply(`$transcript`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === "Are you sure you would like to close this ticket?") {
    message.reply(`$delete`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === prefix + "bot") {
    message.reply(`**Hello Please Fill The List To Help The Developer ・ اهلا بك برجائ ملئ القائمه لمساعده المبرمج


  1-Please Put The Name Of The Bot ・ برجاء كتابه اسم البوت

  2-Please Put Photo Of Bot ・ برجاء ارسال صوره البوت

  3-Whats The Bot Type(system , etc..) ・ ما هو نوع البوت (سستم , الخ..)

  بٱجاء الصبر حتي ينتهي المبرمج من البوت الخاص بك**`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === prefix + "design") {
    message.reply(`**Hello Please Fill The List To Help The Designer ・ برجاء ملء الاستماره لمساعده المصمم

  1-Whats The Name Of Your Server And The Summary ・ ما هو اسم سيرفرك و اختصاره

  2-Whats The Color Of Your Design ・ ما هو لون التصميم الذي تريده

  3-Whats The Type Of Design(Classic , Gaming , Store , etc..) ・ ما هو نوع التصميم (${message.guild.name} , جيمنج , استور , الخ..)

  4-Do You Have An Example Of Your Design(Optional) ・ هل لديك مثال علي التصميم الذي تريده (اختياري)

  5-How Many Hours You Want The Design Finished In It ・ كم عدد الساعات التي تريد ان يتم انهاء التصميم فيها

  ThankYou , شكرا لكم**`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (
    message.content === "fb" ||
    message.content === "Fb" ||
    message.content === "FB" ||
    message.content === prefix + "fb" ||
    message.content === prefix + "Fb" ||
    message.content === prefix + "FB"
  ) {
    message.reply(`**شكرا لاختيارك ${message.guild.name}  


  Thanks For Choosing ${message.guild.name}   


   رايك يهمنا , نتمني ان تعطي فيدباك و تذكر بلمنشن 


   Your opinion matters , Please give feedback and mention the name of the person 

  ----------------------------------------------

  Here :

  
   <#${FeedBackRoom}>**`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === prefix + "rep") {
    message.delete();
    message.channel.send({
      embeds: [
        new MessageEmbed()
          .setTitle(`${message.guild.name} Team Requirements`)
          .setDescription(
            `**\`-\` للتبليغ علي سيلر  قم باملاء الاستماره حتي نستطيع تعويضك

  صاحب البلاغ :
  اسم السيلر فالديسكورد :
  ايدي السيلر فالديسكورد :
  القصه :
  قم بارسال الدلائل مع دليل التحويل :
  **
  `,
          )
          .setFooter({
            text: `${message.guild.name} Requirements`,
            iconUrl: message.guild.iconURL(),
          })
          .setTimestamp()
          .setColor(color)
          .setImage(line)
          .setThumbnail(message.guild.iconURL()),
      ],
    });
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === prefix + "med") {
    message.delete();
    message.channel.send({
      embeds: [
        new MessageEmbed()
          .setTitle(`${message.guild.name} Team Requirements`)
          .setDescription(
            `**\`-\` للتبليغ علي سيلر  قم باملاء الاستماره حتي نستطيع اكمال عمليه الوسطه

  ايدي البائع :
  السلعه :
  المبلغ :
  الضرايب علي مين :
  **`,
          )
          .setFooter({
            text: `${message.guild.name} Requirements`,
            iconUrl: message.guild.iconURL(),
          })
          .setTimestamp()
          .setColor(color)
          .setThumbnail(message.guild.iconURL()),
      ],
    });
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (
    message.content === "bank" ||
    message.content === "Bank" ||
    message.content === "BANK" ||
    message.content === "بنك"
  ) {
    message.reply(`${Idbank}`);
  }
});

client.on("message", (message) => {
  if (message.content.includes("has transferred")) {
    const TransformEmbed = new MessageEmbed().setImage(line).setColor(color);
    message.channel.send({ embeds: [TransformEmbed] });
  }
});

client.on("message", (message) => {
  if (message.content.includes("قام بتحويل")) {
    const TransformEmbed = new MessageEmbed().setImage(line).setColor(color);
    message.channel.send({ embeds: [TransformEmbed] });
  }
});

client.on("message", (message) => {
  if (message.content.includes("> **  Your Tax Is :")) {
    const TransformEmbed = new MessageEmbed().setImage(line).setColor(color);
    message.channel.send({ embeds: [TransformEmbed] });
  }
});

client.on("messageCreate", async (message) => {
  if (
    message.content === `Re` ||
    message.content === `re` ||
    message.content === `RE`
  ) {
    await message.channel.send(
      "**لو المنتج تجاوز 20مليون يرجي طلب وسيط من اونرات السيرفر اجباري لو مطلبتش وسيط مش هنعوضك الوساطه مجانيه تماما**",
    );
    message.delete();
  }
});

client.on("messageCreate", async (message) => {
  if (
    message.content === "re" ||
    message.content === "Re" ||
    message.content === "RE"
  ) {
    if (!message.channel.name.startsWith("sell")) return;
    message.channel.setName(`by-${message.member.displayName}`);
    message.delete();
  }
});
client.on("messageCreate", async (message) => {
  if (
    message.content === "re" ||
    message.content === "Re" ||
    message.content === "RE"
  ) {
    if (!message.channel.name.startsWith("by")) return;
    message.channel.setName(`by-${message.member.displayName}`);
    message.delete();
  }
});

client.on("messageCreate", async (message) => {
  if (
    message.content === "re" ||
    message.content === "Re" ||
    message.content === "RE"
  ) {
    if (!message.channel.name.startsWith("ticket")) return;
    message.channel.setName(`by-${message.member.displayName}`);
    message.delete();
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (
    message.content.startsWith("C") ||
    message.content.startsWith("c") ||
    message.content.startsWith("#Credit") ||
    message.content.startsWith("#credit")
  ) {
    if (!message.channel.name.startsWith("by")) return;
    message.reply(`**اذا كنت تريد معرفة رصيدك في بروبوت فـعليك التوجه الي هذه الاتشانل 
<#${CmdRoom}>

اذا كنت تريد التحويل الي شخص ما فعليك التوجه الي هذه الاتشانل **
<#${TransferRoom}>

**~~ملحوظه~~
هذه الطريقه اجباريه عليك التحويل في اتشانل التحويلات لكي اذا تم النصب عليك نسطيع استرجاع لك حقق**
`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (
    message.content.startsWith("C") ||
    message.content.startsWith("c") ||
    message.content.startsWith("#Credit") ||
    message.content.startsWith("#credit")
  ) {
    if (!message.channel.name.startsWith("ticket")) return;
    message.reply(`**اذا كنت تريد معرفة رصيدك في بروبوت فـعليك التt�جه الي هذه الاتشانل 
<#${CmdRoom}>

اذا كنت تريد التحويل الي شخص ما فعليك التوجه الي هذه الاتشانل **
<#${TransferRoom}>

**~~ملحوظه~~
هذه الطريقه اجباريه عليك التحويل في اتشانل التحويلات لكي اذا تم النصب عليك نسطيع استرجاع لك حقق**
`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (
    message.content.startsWith("C") ||
    message.content.startsWith("c") ||
    message.content.startsWith("#Credit") ||
    message.content.startsWith("#credit")
  ) {
    if (!message.channel.name.startsWith("sell")) return;
    message.reply(`**اذا كنت تريد معرفة رصيدك في بروبوت فـعليك التوجه الي هذه الاتشانل 
<#${CmdRoom}>

اذا كنت تريد التحويل الي شخص ما فعليك التوجه الي هذه الاتشانل **
<#${TransferRoom}>

**~~ملحوظه~~
هذه الطريقه اجباريه عليك التحويل في اتشانل التحويلات لكي اذا تم النصب عليك نسطيع استرجاع لك حقق**
`);
  }
});

client.on("messageCreate", (message) => {
  if (
    message.content === "test" ||
    message.content === "TEST" ||
    message.content === "Test" ||
    message.content === "تست"
  ) {
    if (!message.channel.name.startsWith("ticket")) return;
    message.delete();
    message.channel.send(`**ده تست الرولات بتاع التقديم او حد حابب يزود رول ؛ 
Nitro 1m , 3m :
يكريت ب الطريقه قدامك ف شير
Visa :
 هتخش شير يكريت فيزا  قدامك من اوزان او وايز وتتاكد اني في سواء دولار او 105 ليرة 

Boost
4 بوستات بأسم السيرفر .
${message.guild.name} 1
${message.guild.name} 2

Nitro Gift :
هتمنشن كو اونر 

Discord account
هيديك تلاتة ايدي حسابات تدخلهم السيرفر ويكتب منهم ف التكت وتتاكد أنهم مختلفين ف الصفات زي السنه و لو في شاره وكده 

Rep : 
هتخش شير سكرين يفتح موقع البرو بوت يوريك العضوية بتاعته .
Uc
7 فواتير من اي موقع يوريهملك ف الشير 

Charge Games 
7 فواتير شحن من موقع شحن موثوق أو من اللعبه  7 ل العاب مختلفه .

Charge Network
7 فواتير شحن .

Spotify
هيفعل قدامك ف شير حساب او يورt�ك انه فاميلي اونر ويقدر يبعت انفايت ل حسابات تانية .

Netflix & Shahid & Watch it :
شير سكرين يوريك الاميل انه فل اكسس ب ايميله .
يخش الايميل عنده ف الجهاز ويخش ف الحساب ويكونو نفس الايميل 

Pubg Popularty
يديك صورة معاه كام شعبية او موتسكلات 

Pubg Acc  : 
شير يوريك حسابين يكونو بتوعه .
Server
يبعتلك تلm�ت سيرفرات منتظمين ومختلفين برايفيت .
Steam
شير يوريك الحساب اللي معاه يبقا في العاب اكيد اهم حاجة م فاضي اقل حاجه 5 العاب  .
او يوريك 5 فواتير شحن ستيم 
Lira
منشن كو اونر 
Active developer  
شير يوريك التيم بتاعه ويبعتلك انفايت وتاخد الشاره 
Razer & Crypto & Itunes
يوريك ف شير 10 دولار ف الحساب يكون بتاعه**`);
  }
});

client.on("messageCreate", (message) => {
  if (
    message.content === "tag" ||
    message.content === "Tag" ||
    message.content === "TAG" ||
    message.content === "تاج"
  ) {
    message.reply(`
    > \`-\` **𝐓𝐚𝐠 = ${Tag}**
    `);
  }
});

client.on("messageCreate", (message) => {
  if (
    message.content === `${prefix}io` ||
    message.content === `${prefix}Io` ||
    message.content === `${prefix}IO` ||
    message.content === `خمول` ||
    message.content === prefix + "ws" ||
    message.content === prefix + "Ws" ||
    message.content === prefix + "WS" ||
    message.content === "ws" ||
    message.content === "Ws" ||
    message.content === "WS"
  ) {
    message.channel.send({
      content: `**__ | اذا لم يكون هناك رد خلال 30 دقيقه سوف يتم غلق التيكت بسبب ضغط التيكتات و شكرا لتفهمك طاقم عمل فلوريدا  __** 

**__ | 𝐈𝐟 𝐭𝐡𝐞𝐫𝐞 𝐢𝐬 𝐧𝐨 𝐫𝐞𝐬𝐩𝐨𝐧𝐬𝐞 𝐰𝐢𝐭𝐡𝐢𝐧 30 𝐦𝐢𝐧𝐮𝐭𝐞𝐬, 𝐭𝐡𝐞 𝐭𝐢𝐜𝐤𝐞𝐭 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐜𝐥𝐨𝐬𝐞𝐝 𝐝𝐮𝐞 𝐭𝐨 𝐭𝐡𝐞 𝐩𝐫𝐞𝐬𝐬𝐮𝐫e 𝐨𝐟 𝐭𝐢𝐜𝐤𝐞𝐭𝐬, 𝐚𝐧𝐝 𝐭𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐲𝐨𝐮𝐫 𝐮𝐧𝐝𝐞𝐫𝐬𝐭𝐚𝐧𝐝𝐢𝐧𝐠  Florida  𝐬𝐭𝐚𝐟𝐟  __**
 `,
      files: [line],
    });
  }
});

client.on("messageCreate", (message) => {
  if (
    message.content === "Bot" ||
    message.content === "bot" ||
    message.content === "BOT" ||
    message.content === "بوووت" ||
    message.content === "بوت"
  ) {
    if (!message.channel.name.startsWith("ticket")) return;
    message.delete();
    message.channel.send(`> \`-\` ** /*
 if("Devil Team" === "Devs"){
 console.log(true)
 }//خلي الكود ده يطبع في الك �نسول كلمه true منغير متعدل === او ويرا تيم او ديفس او تحط اي تعريفات هتستعمل فنكشن واحد بس موجود في جافا سكريبت
 *\

 // اي الفرق مبين const,let,var **

 // اي الفرق مبين MessageEmbed, EmbedBuilder**

// اعملي الكود بتاع ال +font ده و خليه يعدل كل الحروف ال في الجمله يعني لو كتبت Devil البوت هيكتبلك l���𝐞𝐯𝐢𝐥 صلح الايرور ده و خليه يعدل كله


 
/*
 const a = "b"
 let b = "c"
 var c = "d"
 a = "e"
 b = "f"
 c = "g"
 console.log(a)
 console.log(b)
 console.log(c) 
 *\

 /*
 client.on("messageCreate", async msg => {
 if(message.content === 'say") {
 let args = msg.content
 .split(" ")
 .slice(1)
 .join(" ")
 message.reply(args)
 }
 })
//الكود ده هيشغل ولا لا و لو لا اي السبب و لو في ايرورات 
�لحها **`);
  }
});

client.on(`messageCreate`, async (message) => {
  if (
    message.content === `<@${client.user.id}>` ||
    message.content === `${prefix}bot` ||
    message.content === `${prefix}bot-info`
  ) {
    try {
      const embed = new MessageEmbed()
        .setTitle(`Bot Information`)
        .setDescription(
          `
          > **My Name : __${client.user.tag}__**
          > **I Support Prefix And My Prefix : ${prefix}**
          > **To Know My Commands Type : ${prefix}help**
          > **Have A Nice Time With Server : ${message.guild.name}**
          > **My Ping : ${client.ws.ping}ms**
          > **My Server Support : [Click Here](${ServerSupport})**
        `,
        )
        .setFooter({
          text: `CopyRights by ${DevName}`,
          iconURL: message.guild.iconURL(),
        })
        .setTimestamp()
        .setColor(color)
        .setImage(line)
        .setThumbnail(message.guild.iconURL());

      const row1 = new MessageActionRow().addComponents(
        new MessageButton()
          .setStyle(`LINK`)
          .setEmoji(`<:ar_link:1278752450718994524>`)
          .setLabel(`Server Support`)
          .setURL(SupportServer),
        new MessageButton()
          .setStyle(`LINK`)
          .setEmoji(`<:ar_heart:1278752439604084852>`)
          .setLabel(`Developer Profile`)
          .setURL(DevProfile),
      );

      if (line) {
        await message.reply({
          content: `> **Hi : <@${message.author.id}>**`,
          embeds: [embed],
          components: [row1],
        });
      }
      message.author
        .send({
          content: `> **Hi : <@${message.author.id}>**`,
          embeds: [embed],
          components: [row1],
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error(error);
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.content === prefix + `font`) {
    const embed = new MessageEmbed()
      .setTitle(`**Fonts System**`)
      .setDescription(
        `
> \`-\` **Fonts System For : ${client.user.username}**

> \`#\`   **${prefix}font1 : To Change Any Word Or Number For This Font (𝐒𝐞𝐫𝐢𝐟 𝐁𝐨𝐥𝐝)**

> \`#\`   **${prefix}font2 : To Change Any Word Or Number For This Font (𝖲𝖺𝗇𝗌)**

`,
      )
      .setFooter({
        text: `CopyRights by ${DevName}`,
        iconURL: message.guild.iconURL(),
      })
      .setTimestamp()
      .setColor(color)
      .setImage(ServerSupportLine)
      .setThumbnail(message.guild.iconURL());
    await message.reply({ embeds: [embed] });
  }
});

// <========== Team ==========>

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.channel.guild) return;

  if (message.content.startsWith(prefix + "send")) {
    if (!message.member.permissions.has("ADMINISTRATOR")) {
      return message.reply(
        `> ⚠️ | ** You Don’t Have Premission**`,
      );
    }
    let id = message.content.split(" ")[1];
    let user =
      message.mentions.members.first() || message.guild.members.cache.get(id);
    let argss = message.content.split(" ").slice(2).join(" ");
    if (!user) {
      return message.reply(
        `> ⚠️ | ** You Have To Mention A Member**`,
      );
    }
    if (!argss) {
      return message.reply(
        `> ⚠️ | ** You Have To Write A Message **`,
      );
    }
    if (user.user.bot) {
      return message.reply(
        `> ⚠️ | ** You Can’t Send To Bot**`,
      );
    }
    if (user.id === message.author.id) {
      return message.reply(
        `> ⚠️ | ** You Can’t Send To Your Self**`,
      );
    }
    let attach = message.attachments.first();
    if (attach) {
      user
        .send({ content: argss, files: [attach] })
        .then((m) => {
          message.reply(`**Done, message sent**`);
        })
        .catch((err) => {
          return message.reply(`**Can't send a message to this user**`);
        });
    } else {
      user
        .send(argss)
        .then((m) => {
          message.channel.send(`> 🟢 | **Done**`);
        })
        .catch((err) => {
          return message.channel.send(
            `> ⚠️ | ** I Can’t Send To This Member Private **`,
          );
        });
    }
  }
});



  
    
          




      
    

    
        
client.on("messageCreate", async (message) => {
  if (
    message.content.toLowerCase().startsWith(prefix + "check-word") &&
    !message.author.bot
  ) {
    let args = message.content.split(" ").slice(1).join(" ");

    if (args.length === 0) {
      return message.reply("**من فضلك اكتب الرسالة التي تريد تشفيرها **");
    }

    let content = args
      .replaceAll("نيترو", "نيتـ رو")
      .replaceAll("فيزا", "فيـ ـزا")
      .replaceAll("كريدت", "كريـ ـدت")
      .replaceAll("كرديت", "كريـ ـدت")
      .replaceAll("كاش", "كـ ـاش")
      .replaceAll("ستيم", "ستـ ـيم")
      .replaceAll("سيرفر", "سيرفـ ـر")
      .replaceAll("ديسكورد", "ديسـ ـكورد")
      .replaceAll("حسابات", "حسابـ ـات")
      .replaceAll("اكونتات", "اكـ ـونتات")
      .replaceAll("بوستات", "بوستـ ـات")
      .replaceAll("تفعيل", "تفـ ـعيل")
      .replaceAll("نيتفليكس", "نيتفلـ ـيكس")
      .replaceAll("سبوتيفاي", "سبوتـ ـيفاي")
      .replaceAll("تيكتوك", "تيكـ ـتوك")
      .replaceAll("فيسبوك", "فيسـ ـبوك")
      .replaceAll("انستا", "انسـ ـتا")
      .replaceAll("توكنات", "توكـ ـنات")
      .replaceAll("فوتات", "فوتـ ـات")
      .replaceAll("بوتات", "بوتـ ـات")
      .replaceAll("كريبتو", "كريبتـ ـو")
      .replaceAll("عملات", "عمـ ـلات")
      .replaceAll("كود", "كـ ـود")
      .replaceAll("بوت", "بـ وت")
      .replaceAll("اكس بوكس", "اكسـ ـبوكس")
      .replaceAll("فيز", "فيـ ـز")
      .replaceAll("موجود", "موجـ ـود")
      .replaceAll("اكونت", "اكـ ونـ ت")
      .replaceAll("متوفر", "مـتـ وفر")
      .replaceAll("سعر", "سـ ـعر")
      .replaceAll("تيكت", "تيـ  �كت")
      .replaceAll("تكت", "تـ كـ ـت")
      .replaceAll("متابع", "مـ ـتـابـع")
      .replaceAll("حساب", "حـ ـسـاب")
      .replaceAll("بيع", "بـ ـيع")
      .replaceAll("اعضاء", "اعـ ـضاء")
      .replaceAll("اوتو", "اوتـ ـو")
      .replaceAll("اوفلاين", "اوفـ ـلاين")
      .replaceAll("اونلاين", "اونـ ـلاين")
      .replaceAll("تيك توك", "تـ ـيك تـ ـوك")
      .replaceAll("وهمي", "وهـ ـمي")
      .replaceAll("استور", "اسـ ـتور")
      .replaceAll("شاهد", "شـ ـاهـ ـد")
      .replaceAll("نوع", "نـ ـوع")
      .replaceAll("شوب", "شـ ـوب")
      .replaceAll("تفاعل", "تفـ ـاعـ ـل")
      .replaceAll("لفل", "لـ ـفـ ـل")
      .replaceAll("ضمان", "ضـ ـمان")
      .replaceAll("محدوده", "محـ ـدوده")
      .replaceAll("فتره", "فـ ـتره")
      .replaceAll("ابدي", "ابـ ـدي")
      .replaceAll("سنه", "سـ ـنه")
      .replaceAll("شهر", "شـ ـهر")
      .replaceAll("شهور", "شـ ـهور")
      .replaceAll("اسبوع", "اسـ ـبوع")
      .replaceAll("انواع", "انـ ـواع")
      .replaceAll("انواع", "انـ ـواع")
      .replaceAll("جميع", "جمـ ـيع")
      .replaceAll("ديس", "ديـ ـس")
      .replaceAll("كوين", "كويـ ـن")
      .replaceAll("والت", "والـ ـت")
      .replaceAll("سويت", "سـ ـويـ ـت")
      .replaceAll("اسعار", "اسعـ ـار")
      .replaceAll("ميمبر", "ميـ ـمبر")
      .replaceAll("ميوزك", "ميـ ـوزك")
      .replaceAll("برودكاست", "برودكـ ـاسـ ـت")
      .replaceAll("سيستم", "سيـ ـستم")
      .replaceAll("ميديا", "ميديـ ـا")
      .replaceAll("خدمات", "خدمـ ـات")
      .replaceAll("سوشيال", "شوشـ ـيال")
      .replaceAll("توكن", "تـ ـوكن")
      .replaceAll("نتفلكس", "نtفلكس");

    const reply = await message.reply(
      "**تم إرسال الرسالة بالتشفير في الخاص **",
    );
    message.author.send(content).then(() => {
      setTimeout(() => {
        message.delete();
      }, 10000);

      setTimeout(() => {
        reply.delete();
      }, 10000);
    });
  }
});

client.on("messageCreate", async (message) => {
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === "font" || command === "font1") {
    if (args.length === 0) {
      return message.channel.send(
        "> ⚠️ | ** Please Type A Word**",
      );
    }
    const inputText = args.join(" ");
    let fontText;
    if (command === "font") {
      fontText = inputText
        .replace(/a/g, "𝐚")
        .replace(/A/g, "𝐀")
        .replace(/b/g, "𝐛")
        .replace(/B/g, "𝐁")
        .replace(/c/g, "𝐜")
        .replace(/C/g, "𝐂")
        .replace(/d/g, "𝐝")
        .replace(/D/g, "𝐃")
        .replace(/e/g, "𝐞")
        .replace(/E/g, "𝐄")
        .replace(/f/g, "𝐟")
        .replace(/F/g, "𝐅")
        .replace(/g/g, "𝐠")
        .replace(/G/g, "𝐆")
        .replace(/h/g, "𝐡")
        .replace(/H/g, "𝐇")
        .replace(/i/g, "𝐢")
        .replace(/I/g, "𝐈")
        .replace(/j/g, "𝐣")
        .replace(/J/g, "𝐉")
        .replace(/k/g, "𝐤")
        .replace(/K/g, "𝐊")
        .replace(/l/g, "𝐥")
        .replace(/L/g, "𝐋")
        .replace(/m/g, "𝐦")
        .replace(/M/g, "𝐌")
        .replace(/n/g, "𝐧")
        .replace(/N/g, "𝐍")
        .replace(/o/g, "𝐨")
        .replace(/O/g, "𝐎")
        .replace(/p/g, "𝐩")
        .replace(/P/g, "𝐏")
        .replace(/q/g, "𝐪")
        .replace(/Q/g, "𝐐")
        .replace(/r/g, "𝐫")
        .replace(/R/g, "𝐑")
        .replace(/s/g, "𝐬")
        .replace(/S/g, "𝐒")
        .replace(/t/g, "𝐭")
        .replace(/T/g, "𝐓")
        .replace(/u/g, "𝐮")
        .replace(/U/g, "𝐔")
        .replace(/v/g, "𝐯")
        .replace(/V/g, "𝐕")
        .replace(/w/g, "𝐰")
        .replace(/W/g, "𝐖")
        .replace(/x/g, "𝐱")
        .replace(/X/g, "𝐗")
        .replace(/y/g, "𝐲")
        .replace(/Y/g, "𝐘")
        .replace(/z/g, "𝐳")
        .replace(/Z/g, "𝐙")
        .replace(/1/g, "𝟏")
        .replace(/2/g, "𝟐")
        .replace(/3/g, "𝟑")
        .replace(/4/g, "𝟒")
        .replace(/5/g, "𝟓")
        .replace(/6/g, "𝟔")
        .replace(/7/g, "𝟕")
        .replace(/8/g, "𝟖")
        .replace(/9/g, "𝟗")
        .replace(/0/g, "𝟎");
    } else if (command === "font1") {
      fontText = inputText
        .replace(/a/g, "𝖺")
        .replace(/A/g, "𝖠")
        .replace(/b/g, "𝖻")
        .replace(/B/g, "𝖡")
        .replace(/c/g, "𝖼")
        .replace(/C/g, "𝖢")
        .replace(/d/g, "𝖽")
        .replace(/D/g, "𝖣")
        .replace(/e/g, "𝖾")
        .replace(/E/g, "𝖤")
        .replace(/f/g, "𝖿")
        .replace(/F/g, "𝖥")
        .replace(/g/g, "𝗀")
        .replace(/G/g, "𝖦")
        .replace(/h/g, "𝗁")
        .replace(/H/g, "𝖧")
        .replace(/i/g, "𝗂")
        .replace(/I/g, "𝖨")
        .replace(/j/g, "𝗃")
        .replace(/J/g, "𝖩")
        .replace(/k/g, "𝗄")
        .replace(/K/g, "𝖪")
        .replace(/l/g, "𝗅")
        .replace(/L/g, "𝖫")
        .replace(/m/g, "𝗆")
        .replace(/M/g, "𝖬")
        .replace(/n/g, "𝗇")
        .replace(/N/g, "𝖭")
        .replace(/o/g, "𝗈")
        .replace(/O/g, "𝖮")
        .replace(/p/g, "𝗉")
        .replace(/P/g, "𝖯")
        .replace(/q/g, "𝗊")
        .replace(/Q/g, "𝖰")
        .replace(/r/g, "𝗋")
        .replace(/R/g, "𝖱")
        .replace(/s/g, "𝗌")
        .replace(/S/g, "𝖲")
        .replace(/t/g, "𝗍")
        .replace(/T/g, "𝖳")
        .replace(/u/g, "𝗎")
        .replace(/U/g, "𝖴")
        .replace(/v/g, "𝗏")
        .replace(/V/g, "𝖵")
        .replace(/w/g, "𝗐")
        .replace(/W/g, "𝖶")
        .replace(/x/g, "𝗑")
        .replace(/X/g, "𝖷")
        .replace(/y/g, "𝗒")
        .replace(/Y/g, "𝖸")
        .replace(/z/g, "𝗓")
        .replace(/Z/g, "𝖹")
        .replace(/1/g, "𝟣")
        .replace(/2/g, "𝟤")
        .replace(/3/g, "𝟥")
        .replace(/4/g, "𝟦")
        .replace(/5/g, "𝟧")
        .replace(/6/g, "𝟨")
        .replace(/7/g, "𝟩")
        .replace(/8/g, "𝟪")
        .replace(/9/g, "𝟫")
        .replace(/0/g, "𝟢");
    }
    message.channel.send(`${fontText}`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "tag")) {
    if (!message.member.permissions.has("MANAGE_NICKNAMES")) {
      return message.reply(
        "> ⚠️ | **You don't have permission**",
      );
    }
    const args = message.content.split(" ").slice(1);
    const userId = message.mentions.users.first();
    const newNickname = args.slice(1).join(" ");
    if (!userId || !newNickname) {
      return message.reply(
        "> ⚠️ | **Please add a Member And The Name**",
      );
    }
    try {
      const member = await message.guild.members.fetch(userId);
      if (!member) {
        return message.reply(
          "> ⚠️ | **Please add a Member/ I Cant Found This Member**",
        );
      }
      const fontMap = {
        a: "𝐚",
        b: "𝐛",
        c: "𝐜",
        d: "𝐝",
        e: "𝐞",
        f: "𝐟",
        g: "𝐠",
        h: "𝐡",
        i: "𝐢",
        j: "𝐣",
        k: "𝐤",
        l: "𝐥",
        m: "𝐦",
        n: "𝐧",
        o: "𝐨",
        p: "𝐩",
        q: "𝐪",
        r: "𝐫",
        s: "𝐬",
        t: "𝐭",
        u: "𝐮",
        v: "𝐯",
        w: "𝐰",
        x: "𝐱",
        y: "𝐲",
        z: "𝐳",
        A: "𝐀",
        B: "𝐁",
        C: "𝐂",
        D: "𝐃",
        E: "𝐄",
        F: "𝐅",
        G: "𝐆",
        H: "𝐇",
        I: "𝐈",
        J: "𝐉",
        K: "𝐊",
        L: "𝐋",
        M: "𝐌",
        N: "𝐍",
        O: "𝐎",
        P: "𝐏",
        Q: "𝐐",
        R: "𝐑",
        S: "𝐒",
        T: "𝐓",
        U: "𝐔",
        V: "𝐕",
        W: "𝐖",
        X: "𝐗",
        Y: "𝐘",
        Z: "𝐙",
        1: "𝟏",
        2: "𝟐",
        3: "𝟑",
        4: "𝟒",
        5: "𝟓",
        6: "𝟔",
        7: "𝟕",
        8: "𝟖",
        9: "𝟗",
        0: "𝟎",
      };
      const formattedNickname = newNickname
        .split("")
        .map((char) => fontMap[char] || char)
        .join("");
      await member.setNickname(`${Tag} ${formattedNickname}`);
      message.reply(`
      > 🟢 **__Done Adding Server Tag To \`${userId}\`__**
      `);
    } catch (error) {
      console.error(`${error}`);
      message.reply(`${error}`);
    }
  }
});

// <========== Token ==========>

client.login("MTM2ODM0MjE2NTk5NDA3ODMxOQ.GoGV6l.vR6-XWfOeHKNl-MXVLjKv1dlXs4OgYjMeRAOks");

// <========== Error ==========>

client.on("error", (e) => console.error(e));

client.on("warn", (e) => console.warn(e));

process.on("unhandledRejection", (e) => {
  return console.log(e);
});

process.on("uncaughtException", (e) => {
  return console.log(e);
});

process.on("uncaughtExceptionMonitor", (e) => {
  return console.log(e);
});

// <========== The Check ==========>

client.on("messageCreate", (message) => {
  if (message.content === prefix + "check") {
    message.reply(`> ✅ | **Done Bot**`).catch((error) => {
      console.error(`${error}`);
      message.reply(`${error}`);
    });
  }
});

// <========== The End ==========>


client.on("channelCreate", async (channel) => {
  if (channel.parentId !== OrderCategory) return;
  
  setTimeout(async () => {
    channel.send({
      content: `**\`-\` السلام عليكم ورحمة الله وبركاته
\`-\` معك طاقم العمل لدي فلوريدا ستور في تذكرة الطلب
برجاء تحديد طلبك من خلال الضغط على القائمة الآتية
**`,
      components: [
        {
          type: 1,
          components: [
            {
              type: 3, // نوع المكون: قائمة منسدلة
              custom_id: "order",
              placeholder: "قم بتحديد طلب من خلال الضغط هنا للاستمرار في تقديم الطلب",
              options: [
                {
                  label: "طلب",
                  value: "order",
                },
              ],
            },
          ],
        },
      ],
    });

    channel.send({
      content: `**ملحوظات مهمة**`,
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              style: "PRIMARY",
              custom_id: "notess",
              label: "ملحوظات مهمة",
            },
          ],
        },
      ],
    });
  }, 2000);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId === "notess") {
    await interaction.reply({
      content: `**\`ملحوظات مهمة للغاية\`

1- أهم حاجة الاحترام المتبادل بينك وبين طاقم العمل داخل السيرفر.

2 - ممنوع طلب اشياء مجانيه

3 -  ممنوع عدم اخذ وسيط ب مبالغ التي تتعدا ال
20m**`,
      ephemeral: true,
    });
  } else if (interaction.customId === "mentionn") {
    const oldEmbed = interaction.message.embeds[0]; // الحفاظ على نفس الإيمبد

    // تحديث الرسالة بإزالة الأزرار
    await interaction.update({
      embeds: [oldEmbed],
      components: [] // حذف الزر بعد الضغط
    });

    // إرسال المنشن للبائعين
    await interaction.followUp({
      content: `<@&${OrderSeller}>`,
      ephemeral: false
    });
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isSelectMenu()) return;

  const order = interaction.values[0];

  if (order === "order") {
    const modalOrder = new Modal()
      .setCustomId("myModalOrder")
      .setTitle("Order");

    const rname = new TextInputComponent()
      .setCustomId("rname")
      .setLabel("طلبك")
      .setStyle("SHORT");

    const age = new TextInputComponent()
      .setCustomId("age")
      .setLabel("هتبيع او تشتري")
      .setStyle("SHORT");

    const svcount = new TextInputComponent()
      .setCustomId("svcount")
      .setLabel("طريقة دفعك")
      .setStyle("SHORT");

    const fbcount = new TextInputComponent()
      .setCustomId("fb")
      .setLabel("اي ملاحظات عن طلبك؟")
      .setStyle("SHORT");

    const name = new MessageActionRow().addComponents(rname);
    const agge = new MessageActionRow().addComponents(age);
    const svvcount = new MessageActionRow().addComponents(svcount);
    const fbvcount = new MessageActionRow().addComponents(fbcount);

    modalOrder.addComponents(name, agge, svvcount, fbvcount);

    await interaction.showModal(modalOrder);
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isModalSubmit()) return;

  const modalId = interaction.customId;

  if (modalId === "myModalOrder") {
    const rname = interaction.fields.getTextInputValue("rname");
    const rrname = interaction.fields.getTextInputValue("age");
    const rrrname = interaction.fields.getTextInputValue("svcount");
    const rrrrname = interaction.fields.getTextInputValue("fb");

    const embed = new MessageEmbed()
      .setDescription(
        `>  الطلب  : ${rname}\n\n> هيبيع او يشتري : ${rrname}\n\n>  طرق الدفع  : ${rrrname}\n\n> ملاحظات اخرى عن الطلب  : ${rrrrname}\n\n> نورت ستور فلوريدا   `
      )
      .setColor("GREEN")
      .setThumbnail(interaction.guild.iconURL({ size: 128 }));

    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setStyle("PRIMARY")
        .setCustomId("notess")
        .setLabel("ملاحظات مهمة قبل الطلب"),
      new MessageButton()
        .setStyle("PRIMARY")
        .setCustomId("mentionn")
        .setLabel("منشن السيلرز")
    );

    await interaction.reply({
      content: `> **تم اكمال ارسال الطلب. يرجى الانتظار السيلرز لحين الرد عليك**`,
      embeds: [embed],
      components: [row],
    });
  }
});
   


                  
  



    
            

























        
       
    // الكود الحالي للضريبة
client.on("messageCreate", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  
  if (command === "tax") {
    let args1 = message.content.split(" ").slice(1).join(" ");
    if (args1.endsWith("m")) args1 = args1.replace(/m/gi, "") * 1000000;
    else if (args1.endsWith("k")) args1 = args1.replace(/k/gi, "") * 1000;
    else if (args1.endsWith("M")) args1 = args1.replace(/M/gi, "") * 1000000;
    else if (args1.endsWith("K")) args1 = args1.replace(/K/gi, "") * 1000;
    else if (args1.endsWith("b")) args1 = args1.replace(/b/gi, "") * 1000000000;
    else if (args1.endsWith("B")) args1 = args1.replace(/B/gi, "") * 1000000000;
    
    let args2 = parseInt(args1);
    let tax = Math.floor(args2 * (20) / (19) + (1));
    let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2));
    let tax3 = Math.floor(tax2 * (20) / (19) + (1));
    let tax4 = Math.floor(tax2 + tax3 + args2);

    if (!args2 || isNaN(args2) || args2 < 1) {
      return message.reply("> ** Error: Input Must Be A Valid Number Greater Than 1 ⚠⚠ **");
    }

    let row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId('tax_mediator') // تعديل معرف الزر
        .setLabel("Mediator")
        .setEmoji("👮")
        .setStyle('SUCCESS')
    );
    
    let row2 = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId('tax_back') // تعديل معرف الزر
        .setLabel("Back")
        .setEmoji("↩️")
        .setStyle('DANGER')
    );

    let m = await message.reply({ content: `> **  Your Tax Is: __${tax}__**`, components: [row] });
    
    let collector = m.createMessageComponentCollector({
      filter: i => i.user.id === message.author.id,
      time: 3600000,
      max: 2
    });

    collector.on('collect', async i => {
    
          if (i.customId === 'tax_mediator') {
        await m.edit({ content: `> **  Your Tax Is: __${tax4}__**`, components: [row2] });
        await i.deferUpdate();
      }
      if (i.customId === 'tax_back') {
        await m.edit({ content: `> **  Your Tax Is: __${tax}__**`, components: [row] });
        await i.deferUpdate();
      } 
    });
  }
});
    
    

  
  
    
    
    
    
    client.on("messageCreate", async(message) => {
        let args = message.content
          .split(" ")
          .slice(0)
          .join(" "); if (message.author.bot) return;
          if (args.endsWith("m")) args =  args.replace(/m/gi, "") * 1000000;
      else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
      else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
      else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
      else if (args.endsWith("b")) args = args.replace(/b/gi, "") * 1000000000;
    else if (args.endsWith("B")) args = args.replace(/B/gi, "") * 1000000000;
        if (!message.guild) return;
        if (message.channel.id != TaxRoom) return;  
          let args2 = parseInt(args)
          let tax = Math.floor(args2 * (20) / (19) + (1))
          let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
          let tax3 = Math.floor(tax2 * (20) / (19) + (1))
          let tax4 = Math.floor(tax2 + tax3 + args2)
          if (!args2) return message.reply(`
    > ** Error It Must Be A Number ⚠⚠ **`);
          if (isNaN(args2)) return message.reply(`
    > ** Error It Must Be A Number ⚠⚠ **`);
          if (args2 < 1) return message.reply(`
    > ** Error It Must Be Larger Than 1 ⚠⚠ **`);

        let m = await message.reply({ content: `
    > **  Your Tax Is : __${tax}__**` });
    })

    
    
    
    
   
          
client.on("messageCreate", async message => {
if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).trim().split(/ +/);
const command = args.shift().toLowerCase();

if (command === "come") {
const user = message.mentions.members.first();
if (!user) return message.reply(`**⚠️ | I Can't Find This User!**`);
if (user.id === message.author.id) return message.reply(`**⚠️ | You Can't Send To Yourself!**`);
if (user.user.bot) return message.reply(`**⚠️ | You Can't Send To Bot!**`);

let inv; 
try {
inv = await message.channel.createInvite({ maxAge: 300, maxUses: 1 });
} catch (error) {
return message.reply(`**⚠️ | Failed to create invite link!**`);
}

user.send(`** Sorry For Disturbance You Have Requested 🙋

CHANNEL : ${message.channel} 🛡

You Request By : ${message.guild.members.cache.get(message.author.id).displayName || message.author.tag} :emoji_211:

link Server Link : ${inv.url} 🔗
**`).then(() => {
message.reply({
embeds: [
new MessageEmbed()
.setDescription(`**⚙️ | Please Wait ....**`)
.setImage(line)
.setAuthor(message.author.username, message.author.avatarURL())
.setColor(color)
]
}).then((t) => {
setTimeout(() => t.edit({
embeds: [
new MessageEmbed()
.setDescription(`**🟢 | Done Message Has Been Send To ${user.displayName}**

**⚙️ | Please Wait**`)
.setImage(line)
.setAuthor(message.author.username, message.author.avatarURL())
.setColor(color)
]
}), 1800);
});
}).catch((y) => {
message.reply({
embeds: [
new MessageEmbed()
.setDescription(`> **⚙️ | Please Wait ....**`)
.setImage(line)
.setAuthor(message.author.username, message.author.avatarURL())
.setColor(color)
]
}).then((t) => {
setTimeout(() => t.edit({
embeds: [
new MessageEmbed()
.setDescription(`⚠️ | **Error __${y.message}__**`)
.setImage(line)
.setAuthor(message.author.username, message.author.avatarURL())
.setColor(color)
]
}), 1800);
});
});
}
});
    
        


const AutoReactId = "1306373207250571325"

client.on("messageCreate", async EgyptTeam => {
  if (EgyptTeam.channel.id != `${AutoReactId}`) return;
  if (EgyptTeam.author.id === client.user.id) return;
  EgyptTeam.react("<:biglove:1311996655683371039>")//React
})

const AutoReactId2 = "1306373207250571325"

client.on("messageCreate", async EgyptTeam => {
  if (EgyptTeam.channel.id != `${AutoReactId2}`) return;
  if (EgyptTeam.author.id === client.user.id) return;
  EgyptTeam.react("<:foxlove:1311996662612365353>")//React
})




const AutoReactId3 = "1306373207250571325"

client.on("messageCreate", async EgyptTeam => {
  if (EgyptTeam.channel.id != `${AutoReactId3}`) return;
  if (EgyptTeam.author.id === client.user.id) return;
  EgyptTeam.react("<a:1127069787948863538:1307280344898207755>")//React
})

// ticket \\



client.on('messageCreate', message => {
    if (message.content.startsWith(prefix + 'ticket-support')) {
        if (message.author.bot) return;

        let ticketSetup = new MessageEmbed()
            .setColor('DARK_BLUE')
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setThumbnail(message.guild.iconURL())
            .setTitle('> Florida Store Support・ الدعم الفني')
            .setImage('https://cdn.discordapp.com/attachments/1335210886322982994/1368270504405897367/aa52640b3d66e02a.jpg?ex=68179cb5&is=68164b35&hm=98bb9e4cab89e2b523cfcbf8cfa2e697329e865921584fbddb8361326ba922b9&')
            .setDescription('> **~ Florida Store \n الدعم الفني \n يمكنك اختيار الدعم الفني لأكثر من سبب منهم : \n   لل إستلام نظام البوستات \n للطلب المساعده او الاستفسار ب شيء يخص خادمنا\n للتقديم على طاقم العمل والتيم**');

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('ticket_button')
                    .setLabel('🎫 فـتـح تـذكره')
                    .setStyle('PRIMARY')
            );

        message.channel.send({ embeds: [ticketSetup], components: [row] })
            .catch(err => console.error('Error sending embed:', err));
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'ticket_button') {
        const row1 = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select')
                    .setPlaceholder('اختر نوع التذكرة')
                    .addOptions([
                        {
                            label: 'الدعم الفني',
                            value: 'support',
                        },
                    ])
            );

        const embed1 = new MessageEmbed()
            .setColor('DARK_BLUE')
            .setTitle('> يُرجى منك اختيار نوع التذكرة حسب المشكلة التي تواجهك')
            .setThumbnail(interaction.guild.iconURL());

        interaction.reply({embeds: [embed1], components: [row1], ephemeral: true});
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isSelectMenu()) return;
    if (interaction.customId === 'select') {
        const selectedValue = interaction.values[0];
        const categoryId = '1368422637981798491'; // Replace with your actual category ID
        const guild = interaction.guild;
        const userId = interaction.user.id;

        let channelOptions = {
            type: 'GUILD_TEXT',
            parent: categoryId,
            permissionOverwrites: [
                {
                    id: guild.roles.everyone.id,
                    deny: ['VIEW_CHANNEL'],
                },
                {
                    id: interaction.user.id,
                    allow: ['VIEW_CHANNEL'],
                },
                {
                    id: '1323404718353027174', // Replace with the role ID you want
                    allow: ['VIEW_CHANNEL'],
                },
                {
                    id: '1306759163321385020', // Replace with the role ID you want
                    allow: ['VIEW_CHANNEL'],
                }
            ]
        };

        let channelName = `Support-${interaction.user.username}`;
        let embedMessage = new MessageEmbed()
            .setColor('DARK_BLUE')
            .setAuthor(interaction.guild.name, interaction.guild.iconURL())
            .setThumbnail(interaction.guild.iconURL())
            .setDescription('**أهلاً بك في تذكرة الدعم الفني**');

        const components = [
            new MessageActionRow().addComponents(
                new MessageButton()
                    .setCustomId('close_ticket')
                    .setLabel('قفل التذكرة')
                    .setStyle('DANGER'),
                new MessageButton()
                    .setCustomId('claim_ticket')
                    .setLabel('استلام التذكرة')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('escalate_ticket')
                    .setLabel('مساعد الادارة')
                    .setStyle('SECONDARY')
            )
        ];

        await interaction.reply({ content: '**جاري انشاء التذكره...**', ephemeral: true });

        guild.channels.create(channelName, channelOptions)
            .then(channel => {
                interaction.editReply({ content: `**تم فتح تذكرتك : ${channel}**`, ephemeral: true });

channel.send({ content: `${interaction.user}`, embeds: [embedMessage], components: components });

                            
            
            });
    }
});



client.on('interactionCreate', async i => {
    if (!i.isButton()) return;

    if (i.customId === 'close_ticket') {
        // إرسال رسالة تأكيد الإغلاق أولاً
        const confirmationMessage = await i.channel.send({
            content: `> ${i.user} هل أنت متأكد من إغلاق التذكرة؟`,
            components: [
                new MessageActionRow().addComponents(
                    new MessageButton()
                        .setCustomId('confirm_close')
                        .setLabel('تأكيد')
                        .setStyle('DANGER'),
                    new MessageButton()
                        .setCustomId('cancel_close')
                        .setLabel('إلغاء')
                        .setStyle('SECONDARY')
                )
            ]
        });

        const filter = i => i.customId === 'confirm_close' || i.customId === 'cancel_close';
        
        // إعداد Collector مع زيادة الوقت
        const collector = i.channel.createMessageComponentCollector({ filter, time: 30000 });

        collector.on('collect', async interaction => {
            if (interaction.customId === 'confirm_close') {
                const channelToDelete = interaction.channel;

                // حفظ السجل في ملف
                const transcript = await discordTranscripts.createTranscript(channelToDelete);

                // إرسال السجل إلى قناة محددة (ID القناة هنا)
                const transcriptChannel = i.guild.channels.cache.get('1368404857064521868');
                transcriptChannel.send({
                    content: `**سجل التذكرة للمستخدم ${interaction.user.tag}**:`,
                    files: [transcript]
                });

                // إغلاق القناة بعد 3 ثواني
                await interaction.reply('**جاري حذف التذكرة...**');
                setTimeout(async () => {
                    try {
                        await channelToDelete.delete();
                        console.log(`Ticket channel ${channelToDelete.name} deleted.`);
                    } catch (error) {
                        console.error('Error deleting channel:', error);
                    }
                }, 3000);  // تأخير 3 ثواني قبل حذف القناة
            } else if (interaction.customId === 'cancel_close') {
                await interaction.update({ content: 'تم إلغاء قفل التذكرة.', components: [] });
            }
        });

        collector.on('end', (collected, reason) => {
            if (reason === 'time') {
                confirmationMessage.edit({ content: 'انتهى الوقت، أعد المحاولة.', components: [] });
            }
        });
    }
});

       


        

client.on('interactionCreate', async interaction => {
    if (interaction.isButton() && interaction.customId === 'escalate_ticket') {
        const selectMenu = new MessageSelectMenu()
            .setCustomId('ticket_action')
            .setPlaceholder('Select an action')
            .addOptions([
                {
                    label: 'إضافة عضو للتذكرة',
                    description: 'لإضافة شخص في تذكرة',
                    value: 'add_member',
                },
                {
                    label: 'تغيير اسم التذكرة',
                    description: 'لتغيير اسم التذكرة لإسم جديد',
                    value: 'rename_channel',
                },
                {
                    label: 'حذف شخص من التذكرة',
                    description: 'لإزالة الشخص من التذكرة',
                    value: 'delete_user',
                }
            ]);

        const row = new MessageActionRow().addComponents(selectMenu);

        await interaction.reply({ content: 'Select an action for the ticket:', components: [row], ephemeral: true });
    } else if (interaction.isSelectMenu() && interaction.customId === 'ticket_action') {
        const selectedAction = interaction.values[0];
        let modal;

        switch (selectedAction) {
            case 'add_member':
                modal = new Modal()
                    .setCustomId('add_member_modal')
                    .setTitle('إضافة عضو')
                    .addComponents(
                        new MessageActionRow().addComponents(
                            new TextInputComponent()
                                .setCustomId('member_id')
                                .setLabel("ID العضو")
                                .setStyle('SHORT')
                        )
                    );
                break;
            case 'rename_channel':
                modal = new Modal()
                    .setCustomId('rename_channel_modal')
                    .setTitle('تغيير اسم القناة')
                    .addComponents(
                        new MessageActionRow().addComponents(
                            new TextInputComponent()
                                .setCustomId('new_channel_name')
                                .setLabel("اسم القناة الجديد")
                                .setStyle('SHORT')
                        )
                    );
                break;
            case 'delete_user':
                modal = new Modal()
                    .setCustomId('delete_user_modal')
                    .setTitle('حذف شخص من التذكرة')
                    .addComponents(
                        new MessageActionRow().addComponents(
                            new TextInputComponent()
                                .setCustomId('delete_member_id')
                                .setLabel("ID العضو الذي سيتم حذفه")
                                .setStyle('SHORT')
                        )
                    );
                break;
        }

        await interaction.showModal(modal);
    } else if (interaction.isModalSubmit()) {
        if (interaction.customId === 'add_member_modal') {
            const memberId = interaction.fields.getTextInputValue('member_id');
            const channel = interaction.channel;

            try {
                const member = await interaction.guild.members.fetch(memberId);
                await channel.permissionOverwrites.create(member, { VIEW_CHANNEL: true, SEND_MESSAGES: true });
                await interaction.reply({ content: `تم إضافة ${member.user.tag} إلى التذكرة بنجاح.`, ephemeral: true });
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: `فشل في إضافة العضو. يرجى التأكد من أن ID العضو صحيح.`, ephemeral: true });
            }
        } else if (interaction.customId === 'rename_channel_modal') {
            const newChannelName = interaction.fields.getTextInputValue('new_channel_name');
            const channel = interaction.channel;

            try {
                await channel.setName(newChannelName);
                await interaction.reply({ content: ` تم تغيير اسم القناة إلى ${newChannelName} بنجاح.`, ephemeral: true });
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: `فشل في تغيير اسم القناة. يرجى المحاولة مرة أخرى.`, ephemeral: true });
            }
        } else if (interaction.customId === 'delete_user_modal') {
            const memberId = interaction.fields.getTextInputValue('delete_member_id');
            const channel = interaction.channel;

            try {
                const member = await interaction.guild.members.fetch(memberId);
                await channel.permissionOverwrites.delete(member);
                await interaction.reply({ content: ` تم حذف ${member.user.tag} من التذكرة بنجاح.`, ephemeral: true });
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: `فشل في حذف العضو. يرجى التأكد من أن ID العضو صحيح.`, ephemeral: true });
            }
        }
    }
});

        


    client.on('interactionCreate', async (interaction) => {
    if (interaction.isButton() && interaction.customId === 'claim_ticket') {
        const userId = interaction.user.id;
        const user = interaction.guild.members.cache.get(userId);

        // التحقق من الأدوار المسموح لها
        if (!user.roles.cache.has('1306759163321385020') && !user.roles.cache.has('1323404718353027174')) {
            await interaction.reply({ content: 'أنت لا تملك الأذونات اللازمة لهذا.', ephemeral: true });
            return;
        }

        // زيادة النقاط في قاعدة البيانات
        let levelll = db.get(`support_${userId}`);
        if (levelll == null) {
            db.set(`support_${userId}`, { poi: 0, id: userId });
        }
        
        let levell = db.get(`support_${userId}`);
        let level = levell.poi;
        
        // إضافة 3 نقاط للمستخدم
        db.set(`support_${userId}`, { poi: Math.floor(level + 3), id: userId });

        // تغيير اسم القناة إلى اسم المستخدم
        interaction.channel.setName(`${interaction.member.nickname}`);

        // الرد برسالة تأكيد استلام التذكرة
        await interaction.reply({
            embeds: [
                new MessageEmbed().setDescription(`**تم استلام تذكرة من قبل ${interaction.member.nickname}**`).setColor('DARK_BLUE'),
            ],
        });

        // إرسال سجل التذكرة إلى قناة سجل التذاكر
        interaction.guild.channels.cache.get(ClaimLogRoom).send({
            embeds: [
                new MessageEmbed()
                    .setColor(color)
                    .setTitle("New Notification")
                    .setDescription(`<@${interaction.user.id}> قام ب استلام تكت جديده  `),
            ],
        });

        // إذا كانت القناة تبدأ بـ "support"
        if (!interaction.channel.name.startsWith("support")) return;

        // إرسال رسالة تأكيد بأن التذكرة تم استلامها بنجاح
        const embed = new MessageEmbed()
            .setDescription(`**تم استلام تذكرة ${interaction.channel} من قبل ${interaction.user}**`)
            .setColor('DARK_BLUE')
            .setAuthor(interaction.guild.name, interaction.guild.iconURL())
            .setThumbnail(interaction.guild.iconURL());

        await interaction.reply({ embeds: [embed] });
    }
});

    // select meun \\



client.on(`messageCreate`, async message => {
  if(message.content.startsWith(prefix + "sendinfo")){

    let owner = ["582995548706045973"]
  
    if(!owner.includes(message.member.id)) return;

const menu_i = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
                    .setCustomId('menu_info')
                    .setPlaceholder('اختار من هنا')
          .setMinValues(1)
          .setMaxValues(1)
                    .addOptions(
                        {
                            label: 'قوانين الخادم',
                          value: "1",

                        },
                        {
                            label: 'شروط الخدمة' ,
                            value: '2',
                        },
                      {
   label : "سياسات الخصوصية",  
          value: "3",
},

               ),
        );

  message.channel.send({
      embeds: [
        new MessageEmbed()
        .setTitle("Florida Store")
        .setDescription(` يمكنكم رؤية القوانين والشروط والسياسات الخاصه بنا  عن طريق  القائمه التاليه
- **شروط الخدمة **
- **قوانين الخادم**
- **سياسات الخصوصية**
`)
        .setColor(color)
       .setImage("https://cdn.discordapp.com/attachments/1306356168641478748/1368318470990594078/bce336cc388f8c83.webp?ex=6817c961&is=681677e1&hm=2c3e2e85bf25d5ef08c7ab79b2f547ba7293466efcfc02c4d1cba9864c1f5b4e&")
        .setThumbnail(message.guild.iconURL({dynamic:true}))
      ], components: [menu_i]})


}
})

      client.on("interactionCreate", async interaction => {
    if (interaction.customId === "menu_info") {
          let vale = interaction.values[0];
      if(vale === "1"){
      interaction.reply({embeds:[
      new MessageEmbed()
      .setTitle(`__ شروط الخدمة __`)

.setDescription(`\n- ** 
عند اتخاذ قرار شراء يرجى فتح تذكرة شراء عن طريق ⁠ لا نتحمل مسؤولية اي شيء خارج التذكرة
⁠#ﬡ〢・𝐎𝐫𝐝𝐞𝐫・طلب
٢. اسعار المنتجات ثابته مذكورة عند فتح تذكرة طلب ولايوجد خصم الا في حال تم اعلان ذلك في روم العروض
⁠#⚚〢・𝐎𝐟𝐟𝐞𝐫𝐬・العروض
٣. الوسطاء المعترف بهم من قبلنا هم (خذ وسيط لضمان حقك)

⁠⁠#وسطاء

ولا نقبل اي وسيط خارج هذه السيرفرات

٤. عند اتمام عملية الشراء لا يمكنك استرداد المبلغ الا في حال وجود تلف في المنتج او عدم إكتمال مدة رفع البوت الخاص بك او الموقع

٥. بعد اتمام الخدمة إجباري  تقيم الخدمة هنا
⁠#₪〢・𝐅𝐞𝐞𝐝𝐛𝐚𝐜𝐤・الفيدباك

٦. التحويل اولاً في اي خدمة من خدماتنا سوا الخدمات البرمجيه التصاميم بيع تلقائي الخ ويمنع طلب اشياء مجانيه او خصومات



القوانين التي يجب اتباعها عند فتح تذكرة الشراء

١. التحلي بالصبر وعدم المنشن و الازعاج سوف يتواصل معك البائعين ب اسرع وقت

٢. تجنب السلوك السيء والسب والخ مع البائعين نهدف الى تكوين بيئة جيدة بين البائع والزبون للكي يكون هنالك توافق تام

٣. عدم الاستهبال في التكت او فتح تكتات كثيرة بوقت واحد و اقفالها يعرضك الى البلاك ليست فوراً


ملاحظة / شروط الخدمة يرجى اتباعها اثناء الرغبه بل شراء لل عدم حصول اي مشاكل
وضمان حقك عند طلب تعويض في حالة كان هنالك اي مشكلة او خلل من المنتج
يرجى العلم تحتاج ان يكون معك فيديو لا يقل عن 60 ثانيه توضح مشكلتك
يكون التعويض خلال اليوم الاول من شراء من المنتج فقط لا اكثر ممنوع بعد يومين او اسبوع
ولايعني هذا انت منتجاتنا ليست مضمونه ولكن في حالة حدوث اي مشكلة يمكنك طلب تعويض وفي حالة خالفت هذه الشروط واعترضت على السياسات سوف تحصل على البلاك ليست

أنت تتحمل كامل المسؤولية عن الحساب بعد شرائه. ولن يتم تعويضك إلا في حال تعرض الحساب للحظر
(لا يشمل الـ Limited Access)

عند طلب تصاميم يجب توضيح كل شيء تريده المصمم سوف يفعل ماذت تريد وليس للديه قدرة على قرأة الافكار كي يعرف ماذا تريد او اي لون تفضل كل شيء راجع الى تقديم فكرتك بشكل واضح إليه
عند طلب الاسراع بل تصميم يتم دفع مبلغ يرجع الى المصمم الذي استلم طلبك

عندما تطلب بوت سوف يتم إعطائك استمارة مثل طلبات التصميم ولكن بس الاشياء التي يحتاجها منك الممبرمج للكي يقوم بعمل طلبك ب افضل شيء ممكن يجب ان تكون جميع الاشياء التي تطلبها واضحه ولا تخالف قوانين الطلبات البرمجيه


عدم اتباع قوانين الشراء يعرضك الى البلاك ليست`)
.setColor(color)
.setImage(line)
      ],ephemeral:true
        })

                        }
    }
        if (interaction.customId === "menu_info") {
          let vale = interaction.values[0];
      if(vale === "2"){
      interaction.reply({embeds:[
      new MessageEmbed()
      .setTitle(`__ قوانين الخادم  __`)

.setDescription(`\n- **~ ممنوع السب والقذف بكل أنواعه. 
 ~ ممنوع افتعال المشاكل والسبام بالشات. 
 ~ ممنوع الكلام عن المواضيع السياسيه والدينية والطائفيه. 
 ~ ممنوع استخدام الأوامر بالشات العام. 
 ~ ممنوع العنصرية ضد أي أحد. 
 ~ ممنوع وضع ايموجيات مثل علم الشواذ او ايموجيات مسيئة. 
 ~ ممنوع الاساءة الى الأونرات أو طاقم العمل او اي شخص داخل السيرفر. 
~ ممنوع نشر  روابط سيرفرات أخرى.
 ~ ممنوع طلب رتب ، ريب ، كريدت الخ.. . 
~ ممنوع نشر صور اباحية او +18. 
 ~ ممنوع  البيع او الشراء. 
~ ممنوع نشر السيرفرات او الترويج لها.  
~ ممنوع التكلم ب كلام غير مفهوم او للغة غير اللغة العربية والانكليزية.
~ يمنع طلب مساعده في حل مشكلة برمجيه خارج الرومات المخصصه لها.
~ يمنع ازعاج الاعضاء بل منشن او طاقم العمل ب اي شكل من الاشكال.
~ القوانين قابله للتعديل في أي وقت
ويجب اتباع جميع قوانين الديسكورد 
https://discord.com/terms
https://discord.com/guidelines
https://discord.com/privacy`)
        .setColor(color)
.setImage(line)

      ],ephemeral:true
        })

                        }
    }

  if (interaction.customId === "menu_info") {
          let vale = interaction.values[0];
      if(vale === "3"){
      interaction.reply({embeds:[
      new MessageEmbed()
      .setTitle(`__ السياسات والخصوصية __`)

.setDescription(`\n -
سياسات وخصوصية المستخدمين

1 - نحن لانحتفظ ب معلوماتكم الشخصيه مثل
ايميلات باسوردات طرق الدفع توكن حسابك المحادثات واي من الممتلكات الالكترونيه عند دخول حسابك عند طلب تفعيل نيترو او شراء افكت او تفعيل شارات او توثيق التيم الخاص بك ولانحتفظ ب تواريخ الميلاد والخ

2 - جميع الخدمات مضمونة وعليها ضمان ولاتضر حساباتكم 

3 - جميع التكتات مسجلة ومشفره يمكن فقط لل الاونرز رؤية سجلات التكتات وجميع عمليات البيع والشراء داخل خادمنا آمنه وبسرية تامة
`)
.setColor(color)
.setImage(line)     
      ],ephemeral:true
        })

                        }}
      })
