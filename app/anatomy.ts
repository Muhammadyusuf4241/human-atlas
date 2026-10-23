export type SystemId = 'skeletal'|'muscular'|'arterial'|'venous'|'nervous'|'digestive'|'respiratory'|'urinary'|'reproductive'|'lymphatic'|'endocrine'|'integumentary'|'connective'|'sensory'|'cardiac';
export const SYSTEMS: {id:SystemId;name:string;color:string;description:string}[] = [
 {id:'skeletal',name:'Skelet',color:'#e2d9ba',description:'Suyaklar tananing tayanch karkasini hosil qiladi, a\'zolarni himoya qiladi va mushaklar birikadigan joy bo\'lib xizmat qiladi. Ularning ichki to\'qimasi minerallarni saqlaydi va qon hujayralarini ishlab chiqaradi.'},
 {id:'muscular',name:'Mushaklar',color:'#a85b50',description:'Skelet mushaklari birikkan joylarini tortib harakatni yuzaga keltiradi. Paylar bilan birga ular bo\'g\'imlarni harakatlantiradi, gavda holatini barqaror tutadi va issiqlik hosil qiladi.'},
 {id:'cardiac',name:'Yurak',color:'#b96760',description:'Yurak — to\'rt kamerali mushakli nasos. Uning klapanlari qonni kichik va katta qon aylanish doiralari bo\'ylab oldinga yo\'naltiradi.'},
 {id:'sensory',name:'Sezgi a\'zolari',color:'#b0c8ce',description:'Bu tuzilmalar ko\'rish, eshitish va muvozanat kabi maxsus sezgilarni ta\'minlaydi. Ularning maxsus to\'qimalari ta\'sirlarni sezadi va nerv tizimi bilan birga axborotni uzatadi.'},
 {id:'arterial',name:'Arteriyalar',color:'#c05245',description:'Yurak qonni qon aylanish tizimi bo\'ylab haydaydi. Arteriyalar qonni yurakdan olib chiqib, to\'qimalarga yoki kichik qon aylanish doirasida o\'pkaga yetkazadi.'},
 {id:'venous',name:'Venalar',color:'#527c9f',description:'Venalar qonni yurakka qaytaradi. Yuza va chuqur venalar to\'qimalardan qonni yig\'adi; o\'pka venalari esa kislorodga boy qonni o\'pkadan yurakka olib keladi.'},
 {id:'nervous',name:'Nerv tizimi',color:'#d8b565',description:'Bosh miya, orqa miya va periferik nervlar signallarni uzatadi va qayta ishlaydi. Ular sezish, harakat, muvofiqlashtirish va tana funksiyalarining avtomatik boshqaruvini ta\'minlaydi.'},
 {id:'respiratory',name:'Nafas olish tizimi',color:'#b98991',description:'Nafas yo\'llari havoni o\'pkaga o\'tkazadi, u yerda kislorod va karbonat angidrid havo bilan qon o\'rtasida almashinadi. Nafas olish nafas mushaklari hosil qiladigan bosim o\'zgarishlariga bog\'liq.'},
 {id:'digestive',name:'Hazm qilish tizimi',color:'#b8916b',description:'Hazm yo\'li ovqatni parchalaydi, oziq moddalar va suvni so\'radi hamda qoldiqlarni oldinga suradi. Yordamchi a\'zolar o\'t suyuqligi va hazm fermentlarini ishlab chiqaradi.'},
 {id:'urinary',name:'Siydik ayirish tizimi',color:'#b47961',description:'Buyraklar qonni filtrlaydi hamda suyuqlik, elektrolitlar va kislota–ishqor muvozanatini boshqaradi. Siydik siydik yo\'llari orqali qovuqqa boradi va siydik chiqarish kanali orqali tashqariga chiqadi.'},
 {id:'lymphatic',name:'Limfa tizimi',color:'#879f7c',description:'Limfa tomirlari to\'qimalardagi ortiqcha suyuqlikni qon aylanishiga qaytaradi. Limfa tugunlari va boshqa limfoid a\'zolar immun nazorat va himoya javoblarida qatnashadi.'},
 {id:'endocrine',name:'Endokrin tizim',color:'#c5a09a',description:'Endokrin a\'zolar qonga gormonlar chiqarib, modda almashinuvi, o\'sish, stressga javob va ko\'payish kabi jarayonlarni muvofiqlashtiradi.'},
 {id:'reproductive',name:'Jinsiy tizim',color:'#bda098',description:'Bu yerda ko\'rsatilgan erkak jinsiy a\'zolari spermatozoidlarning hosil bo\'lishi, yetilishi va tashilishida hamda jinsiy gormonlar ishlab chiqarilishida qatnashadi.'},
 {id:'integumentary',name:'Tana yuzasi',color:'#ba9b7d',description:'Tana yuzasi tashqi anatomik mo\'ljal vazifasini bajaradi. Teri qoplami himoya to\'sig\'ini hosil qiladi, sezish va harorat boshqaruvida qatnashadi.'},
 {id:'connective',name:'Biriktiruvchi to\'qima',color:'#aec3bb',description:'Tog\'ay, boylamlar va boshqa biriktiruvchi to\'qimalar tuzilmalarni tutib turadi, bog\'laydi va ajratib turadi. Ular bo\'g\'imlarni mustahkamlaydi va mexanik yukni taqsimlaydi.'},
];
export interface Part {id:string;name:string;conceptId:string;system:SystemId;chunk:number;positions:number;normals:number;indices:number;vertexCount:number;indexCount:number;bounds:[number[],number[]]}
export interface Concept {id:string;name:string;elements:string[]}
export interface Atlas {version:string;sex?:'male';source?:string;scope?:string;parts:Part[];concepts:Concept[];chunks:{url:string;bytes:number;gzip?:string;gzipBytes?:number}[];triangles:number}
export type View = 'three-quarter'|'front'|'back'|'side';
export interface SceneState {inspectorOpen?:boolean;explode:number;visible:SystemId[];selected:string[];isolate:boolean;view:View;rotate:boolean;reset:number}
export const DEFAULT_VISIBLE:SystemId[] = ['cardiac','sensory','skeletal','muscular','arterial','venous','nervous','respiratory','digestive','urinary','lymphatic','endocrine','connective'];
export const EXPLANATIONS:Record<string,string> = {
 'heart':'Ko\'krak qafasidagi mushakli nasos. Uning o\'ng qismi qonni o\'pkaga, chap qismi esa katta qon aylanish doirasiga haydaydi.',
 'liver':'Diafragmaning o\'ng tomoni ostida joylashgan yirik a\'zo. U so\'rilgan oziq moddalarni qayta ishlaydi, o\'t suyuqligi ishlab chiqaradi va qonda tashiladigan ko\'plab oqsillarni sintez qiladi.',
 'brain':'Nerv tizimining markaziy a\'zosi. Uning o\'zaro bog\'langan qismlari idrok, harakat, xotira, nutq va tana funksiyalarini boshqarishni ta\'minlaydi.',
 'stomach':'Qizilo\'ngach va ingichka ichak orasidagi mushakli bo\'shliq. U ovqatni to\'plab, kislota va fermentlar bilan aralashtiradi, so\'ng o\'n ikki barmoqli ichakka o\'tkazadi.',
 'spleen':'Qorin bo\'shlig\'ining chap yuqori qismidagi limfoid a\'zo. U qonni filtrlaydi, eskirgan qon hujayralarini yo\'qotadi va immun javoblarda qatnashadi.',
 'pancreas':'Hazm va endokrin vazifalarni bajaruvchi qorin bo\'shlig\'i a\'zosi. U ingichka ichakka fermentlar yetkazib beradi, insulin va glyukagon kabi gormonlarni chiqaradi.',
 'urinary bladder':'Kichik chanoqdagi mushakli xaltacha. U buyraklardan siydik yo\'llari orqali keladigan siydikni yig\'ib turadi.',
 'trachea':'Hiqildoqni bronxlar bilan bog\'lovchi asosiy nafas yo\'li. Uning tog\'ay halqalari nafas olish paytida yo\'lni ochiq tutadi.',
 'diaphragm':'Ko\'krak qafasi va qorin bo\'shlig\'ini ajratib turuvchi keng mushak. U qisqarganda ko\'krak qafasi hajmi kattalashadi va havo o\'pkaga tortiladi.',
};
export const UZ_NAMES:Record<string,string> = {'heart':'Yurak','liver':'Jigar','brain':'Bosh miya','stomach':'Oshqozon','spleen':'Taloq','pancreas':'Oshqozon osti bezi','urinary bladder':'Qovuq','trachea':'Traxeya','diaphragm':'Diafragma'};
export function uzName(name:string){return UZ_NAMES[name.toLowerCase()] ?? name;}
export function explanation(name:string,system:SystemId){return EXPLANATIONS[name.toLowerCase()] ?? SYSTEMS.find(s=>s.id===system)?.description ?? '';}
