

/* 
------------------------------------------------------------ HOME PAGE JavaScript / jQuery -----------------------------
------------------------------------------------------------ HOME PAGE JavaScript / jQuery -----------------------------
------------------------------------------------------------ HOME PAGE JavaScript / jQuery -----------------------------
------------------------------------------------------------ HOME PAGE JavaScript / jQuery -----------------------------
*/




/**
 * Get array of ALL the indexes of sub strings (subStr here) in a multi string (origStr here)
 * @param  {string} sub strings (subStr here)
 * @param  {string} multi string (origStr here)
 * @return [numbers], array of numbers
 */


const HAPSLABHEADERFOOTER         = 'https://spreadsheets.google.com/feeds/cells/10AKPZt1ehWKnnQhXub6SzHzcLZf-iec25OGtxN9Kc5o/1/public/full?alt=json';

// -> https://docs.google.com/spreadsheets/d/1N_l-ZLwYsIllwauqCZzcYBm0gt1WDO-d4RC09hWlgyc/edit#gid=1689677455
const HAPSLABHEADERFOOTERPING     = 'https://spreadsheets.google.com/feeds/cells/1N_l-ZLwYsIllwauqCZzcYBm0gt1WDO-d4RC09hWlgyc/1/public/full?alt=json';

const HAPSLABHEADERFOOTERPICBLOGS = 'https://spreadsheets.google.com/feeds/cells/1P5GW-72d67j63WUK4SDif0olWiTY-AzJL6d2FSrRH5w/1/public/full?alt=json';

// -> https://docs.google.com/spreadsheets/d/1u8CPzHsaLjvFpHF9A_4To-pR7s_L9BHEuQ3kEwDu-2s/edit#gid=1689677455
const PAGEPORTALHEADERFOOTERDEAL     = 'https://spreadsheets.google.com/feeds/cells/1u8CPzHsaLjvFpHF9A_4To-pR7s_L9BHEuQ3kEwDu-2s/1/public/full?alt=json';


const NUMBEROFCOLUMNS = 3;
var NUMBEROFCOLUMNSS;
var PAGEPORTALNAME;
var PAGEPORTALMOTO;
var PAGEPORTALHREF;
var PAGEPORTALNAMECOLOR;
var PAGEPORTALNAMEFONTSIZE;
var PAGEPORTALMOTOCOLOR;
var PAGEPORTALMOTOFONTSIZE;
var PAGEPORTALNAMEDESC;
var PAGEPORTALLOGO;
var PAGEPORTALTITLECOLOR;
var PAGEPORTALTITLEFONTSIZE;
var PAGEPORTALHEADERCOLOR;
var PAGEPORTALHEADERFONTSIZE;
var PAGEPORTALFOOTERCOLOR;
var PAGEPORTALFOOTERFONTSIZE;



function prepareParaIndexesArray(origStr, subStr)
{
         var Indexes = [], index = -1;
         while ((index = origStr.indexOf(subStr, index + 1)) != -1)
         {
               Indexes.push(index);
         }
         return Indexes;
}


function returnFileExtn(l_str) 
{
         var l_idx = l_str.lastIndexOf(".");
         var l_len = l_str.length;
         var nstr = l_str.substr(l_idx);
         return nstr
}


function toTitleCase(str) 
{
         str = str.toLowerCase().split(' ');
         for (var i = 0; i < str.length; i++) 
         {
             str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
         }
         return str.join(' ');
}


function printError(ll_error, ll_explicit) 
{
    window.alert (`[${ll_explicit ? 'EXPLICIT' : 'INEXPLICIT'}] ${ll_error.name}: ${ll_error.message}`);
}


/*
function checkNullValueNEW(ll_file, ll_column)
{
         var errmsg = '';
         var status = 1;

         try 
         {
                var nll_column = ll_column.trim();
                if (typeof ll_column === "undefined"  || nll_column.length == 0 ) throw " column value is NULL";
         }
         catch (err) 
         {
                errmsg = 'ERROR: '+ll_file+', '+ll_column+' '+err;
               
         }
         finally 
         {
                var x = 'byeee';
                return status, errmsg;
            
         }
}
*/

function checkNullValue(ll_column)
{

//         window.alert('NULLLLLL: '+varToString({ll_column});

var status = 1;
var errmsg = 'NONE';

         try 
         {
               var nll_column = ll_column.trim();
               if (typeof ll_column === "undefined"  || nll_column.length == 0 ) throw " column value is NULL";
         }
         catch (err) 
         {
//                      window.alert('ERROR: '+ll_column+' '+err);

                     // errmsg = 'ERROR: '+ll_column+' '+err;
                     status = -1;
         }
         finally 
         {
                   var x = 'byeee';
                   //return errmsg;
         }

         return status;
}


function definedJSFunction(ll_runFunction)
{
         /*
         Desc: Finds if function exist or is define in <script> html tag.
         */

         return (typeof window[ll_runFunction] === 'function');
}



function checkJSFunction(ll_divid, ll_runFunction)
{
         /*
         Desc: Checks if function ll_runFunction is defined in <script> html tag.
         */

         var fnstatus = 1;
         try 
         {
               if ( ! definedJSFunction(ll_runFunction) ) 
               {
                  fnstatus = 0;
                  throw "Function does not exist in <script> html tag";
               }
         }
         catch (err) 
         {
                      window.alert('ERROR: checkJSFunction(): '+ll_runFunction+': '+err);
         }
         finally 
         {
                   var x = 'byeee';
         }

         return fnstatus;

         // if(isNaN(x)) throw "is not a number";
         // x = Number(x);
}


function populateEnvVariables (ll_HeaderFooterJSONArray)
{
         //
         // Assigns ENV VARIABLES from ReadHeaderFooterJSONFile json file used by header & footer areas.
         //
         if ( ll_HeaderFooterJSONArray.length < 2 )
         {
              window.alert("ERROR: No data in JS Array or associated .js file");
         }
         else
         {
              PAGEPORTALNAME           =  ll_HeaderFooterJSONArray[0].name;
              PAGEPORTALMOTO           =  ll_HeaderFooterJSONArray[1].desc;
              PAGEPORTALHREF           =  ll_HeaderFooterJSONArray[0].webpage;
              PAGEPORTALNAMEDESC       =  ll_HeaderFooterJSONArray[0].desc;
              PAGEPORTALLOGO           =  ll_HeaderFooterJSONArray[2].webpage;
         }
}


function validateVariables(ll_array, ll_env)
{
         if ( ll_array.length < 2 )
         {
              window.alert("ERROR: validateVariables(): No data in JS Array or associated .js file");
         }

         if ( ll_env == null ) 
         {
              window.alert("ERROR: validateVariables(): Environment variable is not defined");
         }
}


// createHeaderFooterPingJSONArray (HAPSLABHEADERFOOTERPING);
// createHeaderFooterJSONArray (HAPSLABHEADERFOOTER);


function defineArray(ll_hfp_col_arr, ll_hfp_Len)
{
            //
            // Fill hfp_col2 with spaces so that it does not stay UNDEFINED
            //
            var hfp_IDX;
            for (hfp_IDX = 0; hfp_IDX < hfp_Len; hfp_IDX++)
            {
                 ll_hfp_col_arr.splice( hfp_IDX, 0, ' ');
            }
            return ll_hfp_col_arr;
}


/* 
------------------------------------------------ HOME PAGE - Ping / Contact Us ------------------------------------------------
------------------------------------------------ HOME PAGE - Ping / Contact Us ------------------------------------------------
------------------------------------------------ HOME PAGE - Ping / Contact Us ------------------------------------------------
------------------------------------------------ HOME PAGE - Ping / Contact Us ------------------------------------------------
*/


function createHeaderFooterPingJSONArray(ll_HAPSLABHEADERFOOTERPING) 
{
         var HeaderFooterPingJSONArray = [];

         // Declare array for JSON Arrray columns 
         var hfp_col1_arr  = [];
         var hfp_col2_arr  = [];

         try
         {

            if (typeof ll_HAPSLABHEADERFOOTERPING == 'undefined')
            {
               window.alert ('ERROR: createHeaderFooterPingJSONArray(): HAPSLABHEADERFOOTERPING is not defined');
            }
            else
            {
               var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

               xhr.onreadystatechange = function()
               {

                   if (xhr.readyState == 4 && xhr.status == 200)
                   {
                       var resptxt = xhr.responseText;
                       JSON.parse( JSON.stringify(resptxt) );

                       developerName  = JSON.parse (resptxt).feed.author[0].name.$t;
                       developerEmail = JSON.parse (resptxt).feed.author[0].email.$t;

                       hfp_Len = JSON.parse(resptxt).feed.entry.length;

                       // Add if you want to know blank columns
                       hfp_col2_arr = defineArray(hfp_col2_arr, hfp_Len);


                       var hfp_Idx;
                       var row_idx;
                       for (hfp_Idx = 0; hfp_Idx < hfp_Len; hfp_Idx++)
                       {
                            row_idx = JSON.parse(resptxt).feed.entry[hfp_Idx].gs$cell.row;

                                row_idx = row_idx - 1;     // JSON object array starts with 1

                                if (JSON.parse(resptxt).feed.entry[hfp_Idx].gs$cell.col == 1)
                                {
                                    hfp_col1_arr.splice( row_idx, 0, JSON.parse(resptxt).feed.entry[hfp_Idx].gs$cell.$t );
                                }
 
                                if (JSON.parse(resptxt).feed.entry[hfp_Idx].gs$cell.col == 2)
                                {
                                    hfp_col2_arr.splice( row_idx, 0, JSON.parse(resptxt).feed.entry[hfp_Idx].gs$cell.$t );
                                }

                       }      // END OF FOR loop

                    HeaderFooterPingJSONArray = populateHeaderFooterPingJSONArray(HeaderFooterPingJSONArray, hfp_col1_arr, hfp_col2_arr);
                    createHapslabHeaderFooterContact(HeaderFooterPingJSONArray, 'Contact Us');

                   }
               }

               xhr.open("GET", ll_HAPSLABHEADERFOOTERPING, true);
               xhr.send();

            }  // Checking defination of ll_HAPSLABHEADERFOOTERPING

         }
         catch (e) 
         {
               if (e instanceof SyntaxError) 
               {
                   printError(e, true);
               } 
               else 
               {
                   printError(e, false);
               }
         }
}


function createHeaderFooterPingJSONRecord(type, desc) 
{
         this.type = type;
         this.desc = desc;
}


function populateHeaderFooterPingJSONArray(ll_HeaderFooterPingJSONArray, ll_hfp_col1_arr, ll_hfp_col2_arr)
{
            //
            // Fill hfp_col2 with spaces so that it does not stay UNDEFINED
            //

            if (typeof ll_HeaderFooterPingJSONArray == 'undefined')
            {
               window.alert ('ERROR: populateHeaderFooterPingJSONArray(): ll_HeaderFooterPingJSONArray is not defined');
            }
            else
            {
                var hfp_IDXA;
                for (hfp_IDXA = 1; hfp_IDXA < ll_hfp_col1_arr.length; hfp_IDXA++)
                {
                     HeaderFooterPingJSONObject = new createHeaderFooterPingJSONRecord (ll_hfp_col1_arr[hfp_IDXA], ll_hfp_col2_arr[hfp_IDXA]);
                     ll_HeaderFooterPingJSONArray.push (HeaderFooterPingJSONObject);
                }    // END OF FOR loop
            }
            
            return ll_HeaderFooterPingJSONArray;
}

// hapslabHeaderPing
// STOPPED & CHANGED 18:17 30-10-2021
// function createHapslabHeaderFooterContact(ll_HeaderFooterPingJSONArray, ll_header)
// function funcHapslabHeaderFooterContact(ll_ContactsJSONArray, ll_header)
var funcHapslabHeaderFooterContact = function ( ll_argsToFunction )
{
    var ll_desc     = ll_argsToFunction[0];
    var ll_divid    = ll_argsToFunction[1];
    var ll_divclass = ll_argsToFunction[2];

// window.alert ('FYI: INN Contact1: '+ll_desc+': '+ ll_divid+': '+ ll_divclass );
         var hfp_picIDX;
         var hfpArrayLen = ContactsJSONArray.length;
// window.alert("FYI: INN Contact2: " + hfpArrayLen );

	 var hspan0 = document.createElement('h1');
	 hspan0.id  = ll_divid; 
	 var hspan0Class = document.createAttribute("class");
	 hspan0Class.value = "h1-only"; 
	 hspan0.classList.add("h1-only", "trends-blogs-header-margin");
         // hspan0.style.marginTop = '5vw';
         // hspan0.style.marginBottom = '5vw';
         var h0output = toTitleCase(ll_desc);
         var hspan0node = document.createTextNode(h0output);
         hspan0.appendChild(hspan0node);
         document.getElementsByClassName(ll_divclass)[0].appendChild(hspan0);

         for (hfp_picIDX = 0; hfp_picIDX < hfpArrayLen; hfp_picIDX++)
         {
              var hfp_type = ContactsJSONArray[hfp_picIDX].type;
              var hfp_desc = ContactsJSONArray[hfp_picIDX].desc;
              if (hfp_desc.length > 0) 
              {
                  var hfpHead2Para    = document.createElement("p");
                  var hfpHead2Class   = document.createAttribute("class");
                  hfpHead2Class.value = "trends-contact-box";
                  hfpHead2Para.classList.add("trends-contact-box");
                  var hfp_type0 = toTitleCase(hfp_type);
                  var hfp_type1 = hfp_type0.fontcolor("black");
                  var hfp_type2 = hfp_type1.bold();
                  if ( (hfp_desc.startsWith("https://")) || (hfp_desc.startsWith("www.")) )
                  {
                     var hfp_desc2 = hfp_desc.fontcolor("black"); 
                     var hfp_desc3 = hfp_desc2.fontsize(1.5);
                     var hfp_desc4 = hfp_desc3.link(hfp_desc3);
//#2DO a tag
                     hfpHead2Para.innerHTML = hfp_type2 +': '+ hfp_desc4;
                  }
                  else
                  {
                     hfpHead2Para.innerHTML = hfp_type2 +': '+ hfp_desc;
                  }
                  document.getElementsByClassName(ll_divclass)[0].appendChild(hfpHead2Para); 
              }     
         }
}



/* 
------------------------------------------------- HOME PAGE - Header, Footer H -------------------------------------------------
------------------------------------------------- HOME PAGE - Header, Footer H -------------------------------------------------
------------------------------------------------- HOME PAGE - Header, Footer H -------------------------------------------------
------------------------------------------------- HOME PAGE - Header, Footer H -------------------------------------------------
*/

function printJSONArray(ll_JSONArray)
{
         window.alert ('ll_JSONArray Len: '+ll_JSONArray.length);

         for (var j=0; j < ll_JSONArray.length; j++)
         {
              var hf_type    = ll_JSONArray[j].type;
              var hf_name    = ll_JSONArray[j].name;
              var hf_need    = ll_JSONArray[j].need;
              var hf_desc    = ll_JSONArray[j].desc;
              var hf_webpage = ll_JSONArray[j].webpage;
              window.alert ('ll_JSONArray: Idx: '+j+', '+hf_type+', '+hf_name+', '+hf_need+', '+hf_desc+', '+hf_webpage);
         }
}


function createHeaderFooterJSONArray(ll_HAPSLABHEADERFOOTER)
{
         var HeaderFooterJSONArray = [];
         // Declare array for JSON Arrray columns 
         var hfp_col1_arr  = [];
         var hfp_col2_arr  = [];
         var hfp_col3_arr  = [];
         var hfp_col4_arr  = [];
         var hfp_col5_arr  = [];

         try
         {

            if (typeof ll_HAPSLABHEADERFOOTER == 'undefined')
            {
               window.alert ('ERROR: createHeaderFooterJSONArray(): HAPSLABHEADERFOOTER is not defined');
            }
            else
            {
               var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

               xhr.onreadystatechange = function()
               {

                   if (xhr.readyState == 4 && xhr.status == 200)
                   {
                       var resptxt = xhr.responseText;
                       JSON.parse( JSON.stringify(resptxt) );

                       developerName  = JSON.parse (resptxt).feed.author[0].name.$t;
                       developerEmail = JSON.parse (resptxt).feed.author[0].email.$t;


                       hfp_Len = JSON.parse(resptxt).feed.entry.length;

                       // window.alert ('HF: '+hfp_Len);

                       // ADD below if we want to allow nulls in some columns
                       // hfp_col2_arr = defineArray (hfp_col2_arr, hfp_Len);
                       // hfp_col3_arr = defineArray (hfp_col3_arr, hfp_Len);
                       // hfp_col4_arr = defineArray (hfp_col4_arr, hfp_Len);
                       // hfp_col5_arr = defineArray (hfp_col5_arr, hfp_Len);

                       var row_idx;
                       for (var hfp_Idx = 0; hfp_Idx < hfp_Len; hfp_Idx++)
                       {
                            row_idx = JSON.parse(resptxt).feed.entry[hfp_Idx].gs$cell.row;

                            row_idx = row_idx - 1;     // JSON object array starts with 1

                            if (JSON.parse(resptxt).feed.entry[hfp_Idx].gs$cell.col == 1)
                            {
                                hfp_col1_arr.splice( row_idx, 0, JSON.parse(resptxt).feed.entry[hfp_Idx].gs$cell.$t );
                            }

                            if (JSON.parse(resptxt).feed.entry[hfp_Idx].gs$cell.col == 2)
                            {
                                hfp_col2_arr.splice( row_idx, 0, JSON.parse(resptxt).feed.entry[hfp_Idx].gs$cell.$t );
                            }

                            if (JSON.parse(resptxt).feed.entry[hfp_Idx].gs$cell.col == 3)
                            {
                                hfp_col3_arr.splice( row_idx, 0, JSON.parse(resptxt).feed.entry[hfp_Idx].gs$cell.$t );
                            }

                            if (JSON.parse(resptxt).feed.entry[hfp_Idx].gs$cell.col == 4)
                            {
                                hfp_col4_arr.splice( row_idx, 0, JSON.parse(resptxt).feed.entry[hfp_Idx].gs$cell.$t );
                            }

                            if (JSON.parse(resptxt).feed.entry[hfp_Idx].gs$cell.col == 5)
                            {
                                hfp_col5_arr.splice( row_idx, 0, JSON.parse(resptxt).feed.entry[hfp_Idx].gs$cell.$t );
                            }

                       }      // END OF FOR loop


                    HeaderFooterJSONArray = populateHeaderFooterJSONArray( HeaderFooterJSONArray, hfp_col1_arr, hfp_col2_arr, hfp_col3_arr, hfp_col4_arr, hfp_col5_arr );

//                    window.alert ('HeaderFooterJSONArray Len: '+HeaderFooterJSONArray.length);
//                      printJSONArray (HeaderFooterJSONArray);


                    // hapslabHeaderFooterStartHeader(); 
                    // hapslabHeaderFooterStartFooter(); 
                    populateEnvVariables ( HeaderFooterJSONArray );
                    createHapslabHeaderFooterHeader ( HeaderFooterJSONArray );
                    createHapslabHeaderFooterFooter ( HeaderFooterJSONArray );
                   }
               }

               xhr.open("GET", ll_HAPSLABHEADERFOOTER, true);
               xhr.send();

            }  // Checking defination of ll_HAPSLABHEADERFOOTER

         }
         catch (e) 
         {
               if (e instanceof SyntaxError) 
               {
                   printError(e, true);
               } 
               else 
               {
                   printError(e, false);
               }
         }
}


function populateHeaderFooterJSONArray(ll_HeaderFooterJSONArray, ll_hfp_col1_arr, ll_hfp_col2_arr, ll_hfp_col3_arr, ll_hfp_col4_arr, ll_hfp_col5_arr)
{
            //
            // Fill hfp_col2 with spaces so that it does not stay UNDEFINED
            //

            if (typeof ll_HeaderFooterJSONArray == 'undefined')
            {
               window.alert ('ERROR: populateHeaderFooterJSONArray(): ll_HeaderFooterJSONArray is not defined');
            }
            else
            {
                var j;
                for (var hfp_IDXA = 1; hfp_IDXA < ll_hfp_col1_arr.length; hfp_IDXA++)
                {
//                     j = hfp_IDXA;
//                       window.alert ('populateHFJA: '+ll_hfp_col1_arr[j]+', '+ll_hfp_col2_arr[j]+', '+ll_hfp_col3_arr[j]+', '+ll_hfp_col4_arr[j]+', '+ll_hfp_col5_arr[j]);

                         HeaderFooterJSONObject = new createHeaderFooterJSONRecord (ll_hfp_col1_arr[hfp_IDXA], ll_hfp_col2_arr[hfp_IDXA], ll_hfp_col3_arr[hfp_IDXA], ll_hfp_col4_arr[hfp_IDXA], ll_hfp_col5_arr[hfp_IDXA]);
                         ll_HeaderFooterJSONArray.push (HeaderFooterJSONObject);
                }    // END OF FOR loop
            }
            return ll_HeaderFooterJSONArray;
}


function createHeaderFooterJSONRecord(type, name, need, desc, webpage) 
{
         this.type    = type;
         this.name    = name;
         this.need    = need;
         this.desc    = desc;
         this.webpage = webpage;
}


/* 
------------------------------------------------- HOME PAGE - Header, Footer F -------------------------------------------------
------------------------------------------------- HOME PAGE - Header, Footer F -------------------------------------------------
------------------------------------------------- HOME PAGE - Header, Footer F -------------------------------------------------
------------------------------------------------- HOME PAGE - Header, Footer F -------------------------------------------------
*/


// var funcHapslabHeaderFooterHeader = function ()
var funcHapslabHeaderFooterHome = function ( ll_argsToFunction )
{
    var ll_desc     = ll_argsToFunction[0];
    var ll_divid    = ll_argsToFunction[1];
    var ll_divclass = ll_argsToFunction[2];

// window.alert ('FYI: INN Home: '+ll_desc+': '+ ll_divid+': '+ ll_divclass );

         //#######################################
         // Blogpage: Header
         //#######################################

	 var hspan0 = document.createElement('h1');
	 hspan0.id  = ll_divid; 
	 var hspan0Class = document.createAttribute("class");
	 hspan0Class.value = "h1-only"; 
	 hspan0.classList.add("h1-only", "trends-blogs-header-margin");
         var h0output = ll_desc;
         var hspan0node = document.createTextNode(h0output);
         hspan0.appendChild(hspan0node);
         document.getElementsByClassName(ll_divclass)[0].appendChild(hspan0);


         //#######################################
         // Blogpage: Logo
         //#######################################
/*
         var bppHeadDiv = document.createElement('div');
         var bppHeadClass = document.createAttribute("class");
         bppHeadClass.value = "trends-blogs-details-container"; 
         bppHeadDiv.classList.add("trends-blogs-details-container");
         document.getElementsByClassName("trends-blogs-header")[0].appendChild(bppHeadDiv); 
*/

         var imgTagH = document.createElement('img');
         imgTagH.id = "trends-blogpage-imgidH";
         var imgTagHClass = document.createAttribute("class");
         imgTagHClass.value = "trends-blogs-img-only";
         imgTagH.classList.add("trends-blogs-img-only");
         imgTagH.src    = PAGEPORTALLOGO; 
         document.getElementsByClassName(ll_divclass)[0].appendChild(imgTagH); 

	 var hspan1 = document.createElement('span');
	 var hspan1Class = document.createAttribute("class");
	 hspan1Class.value = "trends-blogs-header-only"; 
	 hspan1.classList.add("trends-blogs-header-only", "trends-blogs-header-margin", "trends-home-container");
         var h1output = PAGEPORTALNAMEDESC;   // Add any text here
//         var ph1output = h1output.fontcolor(PAGEPORTALTITLECOLOR);
//         hspan1.innerHTML = ph1output;
         var hspan1node = document.createTextNode(h1output);
         hspan1.appendChild(hspan1node);
         document.getElementsByClassName(ll_divclass)[0].appendChild(hspan1); 

}     // funcHapslabHeaderFooterHome 



var funcHapslabHeaderFooterDeals = function ( ll_argsToFunction )
{
    var ll_desc     = ll_argsToFunction[0];
    var ll_divid    = ll_argsToFunction[1];
    var ll_divclass = ll_argsToFunction[2];

// window.alert ('FYI: INN Home: '+ll_desc+': '+ ll_divid+': '+ ll_divclass );

         //#######################################
         // Blogpage: Header
         //#######################################

	 var hspan0 = document.createElement('h1');
	 hspan0.id  = "home"; 
	 var hspan0Class = document.createAttribute("class");
	 hspan0Class.value = "h1-only"; 
	 hspan0.classList.add("h1-only", "trends-blogs-header-margin");
         var h0output = ll_desc;
         var hspan0node = document.createTextNode(h0output);
         hspan0.appendChild(hspan0node);
         document.getElementsByClassName(ll_divclass)[0].appendChild(hspan0);


         //#######################################
         // Blogpage: Logo
         //#######################################
/*
         var bppHeadDiv = document.createElement('div');
         var bppHeadClass = document.createAttribute("class");
         bppHeadClass.value = "trends-blogs-details-container"; 
         bppHeadDiv.classList.add("trends-blogs-details-container");
         document.getElementsByClassName("trends-blogs-header")[0].appendChild(bppHeadDiv); 
*/

         var imgTagH = document.createElement('img');
         imgTagH.id = "trends-blogpage-imgidH";
         var imgTagHClass = document.createAttribute("class");
         imgTagHClass.value = "trends-blogs-img-only";
         imgTagH.classList.add("trends-blogs-img-only");
         imgTagH.src    = PAGEPORTALLOGO; 
         document.getElementsByClassName(ll_divclass)[0].appendChild(imgTagH); 

	 var hspan1 = document.createElement('span');
	 var hspan1Class = document.createAttribute("class");
	 hspan1Class.value = "trends-blogs-header-only"; 
	 hspan1.classList.add("trends-blogs-header-only", "trends-blogs-header-margin", "trends-deal-container");
         const ll_PAGEPORTALNAMEDESC = "Patience Rewards...";
         var h1output = toTitleCase (ll_PAGEPORTALNAMEDESC);
//         var ph1output = h1output.fontcolor(PAGEPORTALTITLECOLOR);
//         hspan1.innerHTML = ph1output;
         var hspan1node = document.createTextNode(h1output);
         hspan1.appendChild(hspan1node);
         document.getElementsByClassName(ll_divclass)[0].appendChild(hspan1); 
}

         
// function funcHapslabHeaderFooterProduct(ll_header)
var funcHapslabHeaderFooterProduct = function ( ll_argsToFunction )
{
    var ll_descheader     = ll_argsToFunction[0];
    var ll_divid    = ll_argsToFunction[1];
    var ll_divclass = ll_argsToFunction[2];

//  window.alert ('FYI: INN Blog: '+ll_descheader+': '+ ll_divid+': '+ ll_divclass );
         var bp_picIDX;
         var loopIdx = 0;    // Used to add images with a continuous index array
         var picBlogsArrayLen = PictureBlogsJSONArray.length; 

//         window.alert("Pix picBlogsArrayLen: " + picBlogsArrayLen );

         //#############################################
         // Blogpage: Title details & Picture 
         //           Uses first index of the .js file array
         //#############################################


         var p0name        = PictureBlogsJSONArray[0].name;
         var p0title       = PictureBlogsJSONArray[0].title;
         var p0desc        = PictureBlogsJSONArray[0].desc;
         var p0createdate  = PictureBlogsJSONArray[0].createdate;
         var p0modifydate  = PictureBlogsJSONArray[0].modifydate;
         var p0category    = PictureBlogsJSONArray[0].category;
         var p0subcategory = PictureBlogsJSONArray[0].subcategory;
         var p0blogyn      = PictureBlogsJSONArray[0].blogyn;
         var p0blogpage    = PictureBlogsJSONArray[0].blogpage;
         var p0author      = PictureBlogsJSONArray[0].author;


         //#######################################
         // Blogpage: title
         //#######################################

         var bpHeadDiv = document.createElement('div');
         var bpHeadClass = document.createAttribute("class");
         bpHeadClass.value = "trends-product-header"; 
         bpHeadDiv.classList.add("trends-product-header");
         document.getElementsByClassName(ll_divclass)[0].appendChild(bpHeadDiv); 

	 var hspan0 = document.createElement('h1');
	 var hspan0Class = document.createAttribute("class");
	 hspan0Class.value = "h1-only"; 
//         hspan0.classList.add("h1-only", "trends-blogs-header-margin");
	 hspan0.classList.add("h1-only");
         var h0output = ll_descheader;
         var hspan0node = document.createTextNode(h0output);
         hspan0.appendChild(hspan0node);
         document.getElementsByClassName("trends-product-header")[loopIdx].appendChild(hspan0); 
//         document.getElementsByClassName(ll_divclass)[0].appendChild(hspan0); 


         //#######################################
         // Blogpage: CONTAINER for details, author, date, href category, subcategory, title, desc
         //#######################################

         var bppHeadDiv = document.createElement('div');
         var bppHeadClass = document.createAttribute("class");
         bppHeadClass.value = "trends-product-container-one"; 
         bppHeadDiv.classList.add("trends-product-container-one");
         document.getElementsByClassName(ll_divclass)[0].appendChild(bppHeadDiv); 

         for (bp_picIDX = 1; bp_picIDX < picBlogsArrayLen; bp_picIDX++)
         {
             var ls_picIDX = parseInt(bp_picIDX);
             var pname        = PictureBlogsJSONArray[bp_picIDX].name;
             var ptitle       = PictureBlogsJSONArray[bp_picIDX].title;
             var pdesc        = PictureBlogsJSONArray[bp_picIDX].desc;
             var pcreatedate  = PictureBlogsJSONArray[bp_picIDX].createdate;
             var pmodifydate  = PictureBlogsJSONArray[bp_picIDX].modifydate;
             var pcategory    = PictureBlogsJSONArray[bp_picIDX].category;
             var psubcategory = PictureBlogsJSONArray[bp_picIDX].subcategory;
             var ppicyn      = PictureBlogsJSONArray[bp_picIDX].picyn;
             var pdescyn      = PictureBlogsJSONArray[bp_picIDX].descyn;
             var pblogyn      = PictureBlogsJSONArray[bp_picIDX].blogyn;
             var pblogpage    = PictureBlogsJSONArray[bp_picIDX].blogpage;
             var pauthor      = PictureBlogsJSONArray[bp_picIDX].author;

             //#############################################
             // Product: Check IF picyn, descyn, & blogyn == 'y' 
             // blogpage.html exists > 0, 
             // blogpage.html extn is .html
             //#############################################

             ppicyn  = parseFlag(ppicyn);
             pdescyn = parseFlag(pdescyn);
             pblogyn = parseFlag(pblogyn);
             var pfilextn = returnFileExtn(pblogpage);

             if ( (ppicyn == 'y') && (pdescyn == 'y') && (pblogyn == 'y') && (pblogpage.length > 6) && (pfilextn == '.html') )
             {
                var blogpageDiv = document.createElement('div');
                blogpageDiv.id = "trends-product-containerid";
                var blogpageClass = document.createAttribute("class");
                blogpageClass.value = "trends-product-container-two";
                blogpageDiv.classList.add("trends-product-container-two");
                     document.getElementsByClassName("trends-product-container-one")[0].appendChild(blogpageDiv); 
              
                var parent0 = this.parentNode;
   		var aTag0 = document.createElement('a');
   		aTag0.id  = "trends-product-atagid";
   		var aTag0Class = document.createAttribute("class");
                aTag0Class.value = "trends-product-atag";
                aTag0.href = pblogpage;

               //#######################################          
               // Blogpage: Image
               //#######################################

   		var imgTag0 = document.createElement('img');
                imgTag0.id = "trends-product-imgid";
   		var imgTag0Class = document.createAttribute("class");
   		imgTag0Class.value = "trends-product-img";
   		imgTag0.classList.add("trends-product-img");
    		imgTag0.src =   pname;
                aTag0.appendChild(imgTag0);
                document.getElementsByClassName("trends-product-container-two")[loopIdx].appendChild(aTag0);


               //#######################################
               // Blogpage: CONTAINER for details, author, date, href category, subcategory, title, desc
               //#######################################
/*
   		var bptcDiv = document.createElement('div');
   		var bptcClass = document.createAttribute("class");
   		bptcClass.value = "trends-product-text-container"; 
   		bptcDiv.classList.add("trends-product-text-container");
   		document.getElementsByClassName("trends-product-container-two")[loopIdx].appendChild(bptcDiv); 
*/   

               //#######################################
               // Blogpage: title
               //#######################################

   		var hspan = document.createElement('h2');
   		var hspanClass = document.createAttribute("class");
   		hspanClass.value = "trends-product-title"; 
   		hspan.classList.add("trends-product-title");
                var houtput = ptitle;
                var hspannode = document.createTextNode(houtput);
                hspan.appendChild(hspannode);
   		     document.getElementsByClassName("trends-product-container-two")[loopIdx].appendChild(hspan); 

   
               //#######################################
               // Blogpage: desc
               //#######################################

   		var descDiv = document.createElement('div');
   		var descClass = document.createAttribute("class");
   		descClass.value = "trends-product-desc"; 
   		descDiv.classList.add("trends-product-desc");

                var tempdesc1 = pdesc.slice (0, 225);
                var tempdesc2 = tempdesc1.concat ('...');
                descDiv.innerHTML = tempdesc2;
   		     document.getElementsByClassName("trends-product-container-two")[loopIdx].appendChild(descDiv); 
   
                loopIdx = loopIdx + 1;
             }
         }

         // createHeaderFooterPingJSONArray( HAPSLABHEADERFOOTERPING ); 

}     // END of funcHapslabHeaderFooterProduct


var funcHapslabHeaderFooterPlatform = function ( ll_argsToFunction )
{
    var ll_desc         = ll_argsToFunction[0];
    var ll_divid        = ll_argsToFunction[1];
    var ll_divclass     = ll_argsToFunction[2];
    var ll_dsjsonarray  = ll_argsToFunction[3];

/*
    #POWPOW: Below works just like C pointer assignment for array: arr[] &arr.
    ll_dsjsonarray  = PictureBlogsJSONArray; assigns json array to ll_dsjsonarray

    PlatformsJSONArray = PictureBlogsJSONArray;
    
*/

    ll_dsjsonarray  = PictureBlogsJSONArray;
    
//    window.alert ('FYI: INN Platform: '+ll_desc+': '+ ll_divid+': '+ ll_divclass+': '+ ll_dsjsonarray.length );

         var bp_picIDX;
         var loopIdx = 0;    // Used to add images with a continuous index array
         var picBlogsArrayLen = ll_dsjsonarray.length; 

         //#############################################
         // Blogpage: Title only & Picture 
         //           Uses first index of the .js file array
         //#############################################
         //#######################################
         // Blogpage: title
         //#######################################

         var bpHeadDiv = document.createElement('div');
         var bpHeadClass = document.createAttribute("class");
         bpHeadClass.value = "trends-platform-header"; 
         bpHeadDiv.classList.add("trends-platform-header");
         document.getElementsByClassName(ll_divclass)[0].appendChild(bpHeadDiv); 

	 var hspan0        = document.createElement('h1');
	 hspan0.id         = ll_divid; 
	 var hspan0Class   = document.createAttribute("class");
	 hspan0Class.value = "h1-only"; 
//         hspan0.classList.add("h1-only", "trends-blogs-header-margin");
	 hspan0.classList.add("h1-only");
         var h0output      = ll_desc;
         var hspan0node    = document.createTextNode(h0output);
         hspan0.appendChild(hspan0node);
         document.getElementsByClassName("trends-platform-header")[loopIdx].appendChild(hspan0); 
//         document.getElementsByClassName(ll_divclass)[0].appendChild(hspan0); 


         //#######################################
         // Blogpage: CONTAINER for details, author, date, href category, subcategory, title, desc
         //#######################################

         var bppHeadDiv = document.createElement('div');
         var bppHeadClass = document.createAttribute("class");
         bppHeadClass.value = "trends-platform-container-one"; 
         bppHeadDiv.classList.add("trends-platform-container-one");
         document.getElementsByClassName(ll_divclass)[0].appendChild(bppHeadDiv); 

         for (bp_picIDX = 1; bp_picIDX < picBlogsArrayLen; bp_picIDX++)
         {
             var ls_picIDX = parseInt(bp_picIDX);
             var pname        = ll_dsjsonarray[bp_picIDX].name;
             var ptitle       = ll_dsjsonarray[bp_picIDX].title;
             var ppicyn       = ll_dsjsonarray[bp_picIDX].picyn;
             var pblogpage    = ll_dsjsonarray[bp_picIDX].blogpage;

             //#############################################
             // Partner: Check IF picyn, descyn, & blogyn == 'y' 
             // blogpage.html exists > 0, 
             // blogpage.html extn is .html
             //#############################################

             ppicyn  = parseFlag(ppicyn);

//             var pfilextn = returnFileExtn(pblogpage);

             if (ppicyn == 'y')
             {
                var blogpageDiv = document.createElement('div');
                blogpageDiv.id = "trends-platform-containerid";
                var blogpageClass = document.createAttribute("class");
                blogpageClass.value = "trends-platform-container-two";
                blogpageDiv.classList.add("trends-platform-container-two");
                     document.getElementsByClassName("trends-platform-container-one")[0].appendChild(blogpageDiv); 
              
                var parent0 = this.parentNode;
   		var aTag0 = document.createElement('a');
   		aTag0.id  = "trends-platform-atagid";
   		var aTag0Class = document.createAttribute("class");
                aTag0Class.value = "trends-platform-atag";
                aTag0.href = pblogpage;

               //#######################################          
               // Blogpage: Image
               //#######################################

   		var imgTag0 = document.createElement('img');
                imgTag0.id = "trends-platform-imgid";
   		var imgTag0Class = document.createAttribute("class");
   		imgTag0Class.value = "trends-platform-img";
   		imgTag0.classList.add("trends-platform-img");
    		imgTag0.src   =   pname;
    		imgTag0.title =   ptitle;
    		imgTag0.alt   =   ptitle;
                aTag0.appendChild(imgTag0);
                document.getElementsByClassName("trends-platform-container-two")[loopIdx].appendChild(aTag0);
 
                loopIdx = loopIdx + 1;
             }
         }

         // createHeaderFooterPingJSONArray( HAPSLABHEADERFOOTERPING ); 

}     // END of funcHapslabHeaderFooterPlatform


var funcHapslabHeaderFooterData = function ( ll_argsToFunction )
{
    var ll_desc        = ll_argsToFunction[0];
    var ll_divid       = ll_argsToFunction[1];
    var ll_divclass    = ll_argsToFunction[2];
    var ll_dsjsonarray = ll_argsToFunction[3];

/*
    #POWPOW: Below works just like C pointer assignment for array: arr[] &arr.
    Any of the below 2 assignment statements assigns values to 
    PlatformsJSONArray or ll_dsjsonarray thus printing same value for both.

    DatasJSONArray = PictureBlogsJSONArray;
    ll_dsjsonarray = PictureBlogsJSONArray;
*/

//    DatasJSONArray = PictureBlogsJSONArray;

    ll_dsjsonarray  = PictureBlogsJSONArray;
    
//    window.alert ('FYI: INN Data: '+ll_desc+': '+ ll_divid+': '+ ll_divclass+': '+ ll_dsjsonarray.length );

         //#######################################
         // Blogpage: title
         //#######################################

	 var hspan12Div = document.createElement('div');
	 var hspan12Class = document.createAttribute("class");
	 hspan12Class.value = "trends-data-header"; 
	 hspan12Div.classList.add("trends-data-header");
         document.getElementsByClassName(ll_divclass)[0].appendChild(hspan12Div);

	 var hspan0 = document.createElement('h1');
	 hspan0.id  = ll_divid; // "datasservices"; 
	 var hspan0Class = document.createAttribute("class");
	 hspan0Class.value = "h1-only"; 
	 hspan0.classList.add("h1-only");
         var h0output = toTitleCase(ll_desc);
         var hspan0node = document.createTextNode(h0output);
         hspan0.appendChild(hspan0node);
         document.getElementsByClassName("trends-data-header")[0].appendChild(hspan0);

         var bppHeadDiv = document.createElement('div');
         var bppHeadClass = document.createAttribute("class");
         bppHeadClass.value = "pixrowgriddata"; 
         bppHeadDiv.classList.add("pixrowgriddata");
         document.getElementsByClassName(ll_divclass)[0].appendChild(bppHeadDiv); 

         var dataBlogsArrayLen = ll_dsjsonarray.length;
         validateVariables ( ll_dsjsonarray, NUMBEROFCOLUMNS );
         var rl_colPix   = Math.round(dataBlogsArrayLen / NUMBEROFCOLUMNS);

//         window.alert("PixGrid: " + dataBlogsArrayLen );

         var rl_dataIDX;
         var lg_dataIDX;
         var curr_dataIDX;
         for (rl_dataIDX = 0; rl_dataIDX < NUMBEROFCOLUMNS; rl_dataIDX++)
         {
              for (lg_dataIDX = 0; lg_dataIDX < rl_colPix; lg_dataIDX++)
              {
                   curr_dataIDX       = lg_dataIDX + (rl_dataIDX * rl_colPix);
                   var pixcolDiv     = document.createElement('div');
                   pixcolDiv.id      = "pixcolgrididdata";
                   var pixcolClass   = document.createAttribute("class");
                   pixcolClass.value = "pixcolgriddata";
                   pixcolDiv.classList.add("pixcolgriddata");
                   var pname         = ll_dsjsonarray[curr_dataIDX].name;
                   var pblogpage     = ll_dsjsonarray[curr_dataIDX].blogpage;
                   var ptitle        = ll_dsjsonarray[curr_dataIDX].title;
                   var pwidthpx      = "100%";

   		var aTagData         = document.createElement('a');
   		aTagData.id          = "trends-data-atagid";
   		var aTagDataClass    = document.createAttribute("class");
                aTagDataClass.value  = "trends-data-atag";
                aTagData.href        = pblogpage;

                   document.getElementsByClassName("pixrowgriddata")[0].appendChild(pixcolDiv);
                   var imgContainerDiv     = document.createElement('img');
                   var imgContainerClass   = document.createAttribute("class");
                   imgContainerClass.value = "pixcolimggriddata";
                   imgContainerDiv.classList.add("pixcolimggriddata");
                   imgContainerDiv.setAttribute("src",    pname);
                   imgContainerDiv.setAttribute("title",    ptitle);
                   imgContainerDiv.setAttribute("width",  pwidthpx);
                aTagData.appendChild(imgContainerDiv);
                document.getElementsByClassName("pixcolgriddata")[curr_dataIDX].appendChild(aTagData);
              }
         }
}       // END of funcHapslabHeaderFooterData


function funcHapslabHeaderFooterPing(ll_header)
{
         var hfp_picIDX;
         var hfpArrayLen = HeaderFooterPingJSONArray.length;
         window.alert("HFP: " + hfpArrayLen );

	 var hspan0 = document.createElement('h1');
	 hspan0.id  = "contactus"; 
	 var hspan0Class = document.createAttribute("class");
	 hspan0Class.value = "h1-only"; 
	 hspan0.classList.add("h1-only", "trends-blogs-header-margin");
         // hspan0.style.marginTop = '5vw';
         // hspan0.style.marginBottom = '5vw';
         ll_header = 'TESTING';
         var h0output = toTitleCase(ll_header);
         var hspan0node = document.createTextNode(h0output);
         hspan0.appendChild(hspan0node);
         document.getElementsByClassName("trends-contacts-container")[0].appendChild(hspan0);

         var hfpHead1Para    = document.createElement('div');
         var hfpHead1Class   = document.createAttribute("class");
         hfpHead1Class.value = "trends-contact-container";
         hfpHead1Para.classList.add("trends-contact-container");
         document.getElementsByClassName("trends-contacts-container")[0].appendChild(hfpHead1Para);

         for (hfp_picIDX = 0; hfp_picIDX < hfpArrayLen; hfp_picIDX++)
         {
              hfp_type = HeaderFooterPingJSONArray[hfp_picIDX].type;
              hfp_desc = HeaderFooterPingJSONArray[hfp_picIDX].desc;
              if (hfp_desc.length > 0) 
              {
                  var hfpHead2Para    = document.createElement('p');
                  var hfpHead2Class   = document.createAttribute("class");
                  hfpHead2Class.value = "trends-contact-containerr";
                  hfpHead2Para.classList.add("trends-contact-containerr");
                  var hfp_type0 = toTitleCase(hfp_type);
                  var hfp_type1 = hfp_type0.fontcolor("black");
                  var hfp_type2 = hfp_type1.bold();
                  hfpHead2Para.innerHTML = hfp_type2 +': '+ hfp_desc;
                  document.getElementsByClassName("trends-contact-container")[0].appendChild(hfpHead2Para); 
              }     
         }
}


// function hapslabHeaderFooterStartHeader()
var funcHapslabHeaderFooterHeader = function ()
{
         var ll_HeaderFooterJSONArray = HeaderFooterJSONArray;
         var hfArrayLen = ll_HeaderFooterJSONArray.length;
//         window.alert("Pix: " + hfArrayLen );

         //#############################################
         // Blogpage: Header items 
         //           Uses first index of the .js file array
         //#############################################

         //#############################################
         // Blogpage: Websitename 
         //#############################################

//         var p0srno        =  ll_HeaderFooterJSONArray[0].srno;
         var p0type        =  ll_HeaderFooterJSONArray[0].type;
         var p0name        =  ll_HeaderFooterJSONArray[0].name;
         var p0need        =  ll_HeaderFooterJSONArray[0].need;
         var p0desc        =  ll_HeaderFooterJSONArray[0].desc;
         var p1descm        =  ll_HeaderFooterJSONArray[1].desc;
         var p0webpage     =  ll_HeaderFooterJSONArray[0].webpage;
//         var p0adddate     =  ll_HeaderFooterJSONArray[0].adddate;
//         var p0changedate  =  ll_HeaderFooterJSONArray[0].changedate;
//         var p0rel         =  ll_HeaderFooterJSONArray[0].rel;
//
// div                  menu-box-header-org-NameMotoHeader
//        span          menu-box-header
//                      a     org-NameHeader
//        span          "menu-box-header", "org-MotoHeader", "shift-Moto"
//

         var hfHead00Div     = document.createElement('div');
         var hfHead00Class   = document.createAttribute("class");
         hfHead00Class.value = "menu-box-header-org-NameMotoHeader"; 
         hfHead00Div.classList.add("menu-box-header-org-NameMotoHeader");
         document.getElementsByClassName("menu-box-header-container")[0].appendChild(hfHead00Div); 


         var hfHead0Span     = document.createElement('span');
         var hfHead0Class   = document.createAttribute("class");
         hfHead0Class.value = "menu-box-header"; 
         hfHead0Span.classList.add("menu-box-header", "menu-box-header-Header-shift");
         document.getElementsByClassName("menu-box-header-org-NameMotoHeader")[0].appendChild(hfHead0Span); 
   		var atagHF0 = document.createElement('a');
   		var atagHF0Class = document.createAttribute("class");
                atagHF0Class.value = "org-NameHeader";
   		atagHF0.classList.add("org-NameHeader");
                atagHF0.href  = p0webpage;
                atagHF0.title = PAGEPORTALNAME;
                var atagHF0node = document.createTextNode(PAGEPORTALNAME);
                atagHF0.appendChild(atagHF0node);
   		     document.getElementsByClassName("menu-box-header")[0].appendChild(atagHF0); 


         //#############################################
         // Blogpage: Moto
         //#############################################

//         var p1srno        =  ll_HeaderFooterJSONArray[1].srno;
         var p1type        =  ll_HeaderFooterJSONArray[1].type;
         var p1name        =  ll_HeaderFooterJSONArray[1].name;
         var p1need        =  ll_HeaderFooterJSONArray[1].need;
         var p1desc        =  ll_HeaderFooterJSONArray[1].desc;
         var p1webpage     =  ll_HeaderFooterJSONArray[1].webpage;
//         var p1adddate     =  ll_HeaderFooterJSONArray[1].adddate;
//         var p1changedate  =  ll_HeaderFooterJSONArray[1].changedate;
//         var p1rel         =  ll_HeaderFooterJSONArray[1].rel;

         var hfHead1Span     = document.createElement('span');
         var hfHead1Class   = document.createAttribute("class");
         hfHead1Class.value = "menu-box-header";
         hfHead1Span.classList.add("menu-box-header", "org-MotoHeader", "menu-box-header-Moto-shift");
         var hfHead1node = document.createTextNode(PAGEPORTALMOTO);
         hfHead1Span.appendChild(hfHead1node);
         document.getElementsByClassName("menu-box-header-org-NameMotoHeader")[0].appendChild(hfHead1Span); 


         //#############################################
         // Blogpage: Header Menu Bar
         //#############################################

         var headerArray    = [];
         var headerArrayLen = 0;
         var hf0_picIDX;
         for (hf0_picIDX = 0; hf0_picIDX < hfArrayLen; hf0_picIDX++)
         {
              var p00type = ll_HeaderFooterJSONArray[hf0_picIDX].type;
              var p00need = ll_HeaderFooterJSONArray[hf0_picIDX].need;
              if ( (p00type.toLowerCase() == 'header') && (p00need.toLowerCase() == 'y') )
              {
                    headerArray.push(hf0_picIDX)
              }
         }
//         window.alert("headerArrayLen: " +headerArray.length +', '+headerArray );
         
         var hf_eleIDX;     
         for (hf_eleIDX in headerArray)
         {
             var nhf_eleIDX    =  parseInt(hf_eleIDX);
             var hf_picIDX     =  parseInt(headerArray[hf_eleIDX]);
  //         var ppsrno        =  ll_HeaderFooterJSONArray[hf_picIDX].srno;
             var pptype        =  ll_HeaderFooterJSONArray[hf_picIDX].type;
             var ppname        =  ll_HeaderFooterJSONArray[hf_picIDX].name;
             var ppneed        =  ll_HeaderFooterJSONArray[hf_picIDX].need;
             var ppdesc        =  ll_HeaderFooterJSONArray[hf_picIDX].desc;
             var ppwebpage     =  ll_HeaderFooterJSONArray[hf_picIDX].webpage;
//           var ppadddate     =  ll_HeaderFooterJSONArray[hf_picIDX].adddate;
//           var ppchangedate  =  ll_HeaderFooterJSONArray[hf_picIDX].changedate;
//           var pprel         =  ll_HeaderFooterJSONArray[hf_picIDX].rel;

             var pptype1 = pptype.trim();
             pptype      = pptype1.toLowerCase();

             var ppname1 = ppname.trim();
             ppname      = ppname1.toLowerCase();

             var ppneed1 = ppneed.trim();
             ppneed      = ppneed1.toLowerCase();

             var ppdesc1 = ppdesc.trim();
// STOPPED 20:13 03-11-2021
//             ppdesc      = toTitleCase(ppdesc1);
             ppdesc      = ppdesc1;

                   var hfHeadppDiv     = document.createElement('div');
                   var hfHeadppClass   = document.createAttribute("class");
                   hfHeadppDiv.classList.add("menu-box-header", "menu-box-header-right-shift");
                   document.getElementsByClassName("menu-box-header-container")[0].appendChild(hfHeadppDiv);
   		            var atagHFpp = document.createElement('a');
   		            var atagHFppClass = document.createAttribute("class");
                            atagHFppClass.value = "a-noborder";
   		            atagHFpp.classList.add("a-noborder");
                            atagHFpp.href  = ppwebpage;
                            atagHFpp.title = ppdesc;
                            var atagHFppnode = document.createTextNode(ppdesc);
                            atagHFpp.appendChild(atagHFppnode);
   		            document.getElementsByClassName("menu-box-header")[nhf_eleIDX+2].appendChild(atagHFpp); 
//                 window.alert("Header: " +hf_eleIDX+', ' +hf_picIDX +', '+ ppname +', '+ppdesc );
         }
}


// function hapslabHeaderFooterStartFooter()
var funcHapslabHeaderFooterFooter = function ()
{
         var ll_HeaderFooterJSONArray = HeaderFooterJSONArray;
         var hf_picIDX;
         var hfArrayLen = ll_HeaderFooterJSONArray.length;
//         window.alert("Pix: " + hfArrayLen );

         //#############################################
         // Blogpage: Header items 
         //           Uses first index of the .js file array
         //#############################################

         //#############################################
         // Blogpage: Websitename 
         //#############################################

//         var p0srno        =  ll_HeaderFooterJSONArray[0].srno;
         var p0type        =  ll_HeaderFooterJSONArray[0].type;
         var p0name        =  ll_HeaderFooterJSONArray[0].name;
         var p0need        =  ll_HeaderFooterJSONArray[0].need;
         var p0desc        =  ll_HeaderFooterJSONArray[0].desc;
         var p0webpage     =  ll_HeaderFooterJSONArray[0].webpage;
//         var p0adddate     =  ll_HeaderFooterJSONArray[0].adddate;
//         var p0changedate  =  ll_HeaderFooterJSONArray[0].changedate;
//         var p0rel         =  ll_HeaderFooterJSONArray[0].rel;
//
// div                  menu-box-footer-org-NameMotoHeader
//        span          menu-box-footer
//                      a     org-NameHeader
//        span          "menu-box-footer", "org-MotoHeader", "shift-Moto"
//

         var hfHead00Div     = document.createElement('div');
         var hfHead00Class   = document.createAttribute("class");
         hfHead00Class.value = "menu-box-footer-org-NameMotoFooter"; 
         hfHead00Div.classList.add("menu-box-footer-org-NameMotoFooter");
         document.getElementsByClassName("menu-box-footer-container")[0].appendChild(hfHead00Div); 


         var hfHead0Span     = document.createElement('span');
         var hfHead0Class   = document.createAttribute("class");
         hfHead0Class.value = "org-NameFooter"; 
         hfHead0Span.classList.add("org-NameFooter", "menu-box-footer", "menu-box-header-Header-shift");
         document.getElementsByClassName("menu-box-footer-org-NameMotoFooter")[0].appendChild(hfHead0Span); 
   		var atagHF0 = document.createElement('a');
   		var atagHF0Class = document.createAttribute("class");
                atagHF0Class.value = "a-noborder";
   		atagHF0.classList.add("a-noborder");
                atagHF0.href  = p0webpage;
                atagHF0.title = p0desc;
                var atagHF0node = document.createTextNode(p0name);
                atagHF0.appendChild(atagHF0node);
   		     document.getElementsByClassName("menu-box-footer")[0].appendChild(atagHF0); 


         //#############################################
         // Blogpage: Moto
         //#############################################

//         var p1srno        =  ll_HeaderFooterJSONArray[1].srno;
         var p1type        =  ll_HeaderFooterJSONArray[1].type;
         var p1name        =  ll_HeaderFooterJSONArray[1].name;
         var p1need        =  ll_HeaderFooterJSONArray[1].need;
         var p1desc        =  ll_HeaderFooterJSONArray[1].desc;
         var p1webpage     =  ll_HeaderFooterJSONArray[1].webpage;
//         var p1adddate     =  ll_HeaderFooterJSONArray[1].adddate;
//         var p1changedate  =  ll_HeaderFooterJSONArray[1].changedate;
//         var p1rel         =  ll_HeaderFooterJSONArray[1].rel;
//center-div
         var hfHead1Span     = document.createElement('span');
         var hfHead1Class   = document.createAttribute("class");
         hfHead1Class.value = "menu-box-footer"; 
         hfHead1Span.classList.add("menu-box-footer", "org-MotoFooter");
         var hfHead1node = document.createTextNode(PAGEPORTALMOTO);
         hfHead1Span.appendChild(hfHead1node);
         document.getElementsByClassName("menu-box-footer-org-NameMotoFooter")[0].appendChild(hfHead1Span); 


         //#############################################
         // Blogpage: Header Menu Bar
         //#############################################

         var hfHeadppDiv     = document.createElement('div');
         var hfHeadppClass   = document.createAttribute("class");
         hfHeadppClass.value = "center-div"; 
         hfHeadppDiv.classList.add("center-div");
//         document.getElementsByClassName("menu-box-footer-container")[0].appendChild(hfHeadppDiv);
           document.getElementsByClassName("menu-box-footer-container-two")[0].appendChild(hfHeadppDiv);

         var footerArray    = [];
         var footerArrayLen = 0;
         var hf0_picIDX;
         for (hf0_picIDX = 0; hf0_picIDX < hfArrayLen; hf0_picIDX++)
         {
              var p00type = ll_HeaderFooterJSONArray[hf0_picIDX].type;
              var p00need = ll_HeaderFooterJSONArray[hf0_picIDX].need;
              if ( (p00type.toLowerCase() == 'footer') && (p00need.toLowerCase() == 'y') )
              {
                    footerArray.push(hf0_picIDX)
              }
         }
//         window.alert("footerArrayLen: " +footerArray.length +', '+footerArray );


         var firstFooterElement = 0;
         for (hf_picIDX = 2; hf_picIDX < hfArrayLen; hf_picIDX++)
         {
  //         var ppsrno        =  ll_HeaderFooterJSONArray[hf_picIDX].srno;
             var pptype        =  ll_HeaderFooterJSONArray[hf_picIDX].type;
             var ppname        =  ll_HeaderFooterJSONArray[hf_picIDX].name;
             var ppneed        =  ll_HeaderFooterJSONArray[hf_picIDX].need;
             var ppdesc        =  ll_HeaderFooterJSONArray[hf_picIDX].desc;
             var ppwebpage     =  ll_HeaderFooterJSONArray[hf_picIDX].webpage;
//           var ppadddate     =  ll_HeaderFooterJSONArray[hf_picIDX].adddate;
//           var ppchangedate  =  ll_HeaderFooterJSONArray[hf_picIDX].changedate;
//           var pprel         =  ll_HeaderFooterJSONArray[hf_picIDX].rel;

             var pptype1 = pptype.trim();
             pptype      = pptype1.toLowerCase();

             var ppname1 = ppname.trim();
             ppname      = toTitleCase(ppname1);

             var ppneed1 = ppneed.trim();
             ppneed      = ppneed1.toLowerCase();

             var ppdesc1 = ppdesc.trim();
// STOPPED 20:11 03-11-2021
//             ppdesc      = toTitleCase(ppdesc1);
             ppdesc      = ppdesc1;

// window.alert("OUT: " +hf_picIDX+', '+pptype+', '+ppneed+', '+ppdesc+', '+ppwebpage );

             var my_picIDX = 2;
             if ( ( pptype == 'footer' ) && (ppneed.length>0) && (ppneed == 'y') )
             {
                   var hfHeadppDiv     = document.createElement('div');
                   var hfHeadppClass   = document.createAttribute("class");
                   hfHeadppClass.value = "menu-box-footer"; 
                   hfHeadppDiv.classList.add("menu-box-footer");
                   document.getElementsByClassName("center-div")[0].appendChild(hfHeadppDiv);
                        
                          if (ppname == 'Contactus')
                          {
                              ppname = 'Contact Us';
                          }

   		              var atagHFpp = document.createElement('a');
   		              var atagHFppClass = document.createAttribute("class");
                              atagHFppClass.value = "a-border";
                          if (ppname == 'Developed')
                          {
   		              atagHFpp.classList.add("a-border", "menu-box-footer", "org-DevelopedBy-margin");
                          }
                          else
                          {
   		              atagHFpp.classList.add("a-border", "menu-box-footer");
                          }

                              atagHFpp.href  = ppwebpage;
                              atagHFpp.title = ppdesc;
                              var atagHFppnode = document.createTextNode(ppdesc);
                              atagHFpp.appendChild(atagHFppnode);
                          // firstFooterElement 

                          if (ppname == 'Developed')
                          {
                              var devby     = "Developed By ".fontcolor("black");
                              var devppdesc = ppdesc1.fontcolor("#855800");
                              atagHFpp.innerHTML = devby + devppdesc; 
                          }

   		          document.getElementsByClassName("menu-box-footer")[my_picIDX].appendChild(atagHFpp); 
                          
                   my_picIDX = my_picIDX + 1;
             }
         }
}


function truncDesc(str, ll_NumWords) 
{
         return str.split(" ").splice(0,ll_NumWords).join(" ");
}


function parseFlag(ll_flag)
{
         var pflagyn;
         pflagyn = ll_flag.trim();
         pflagyn = pflagyn.substr(0,1);
         pflagyn = pflagyn.toLowerCase();

         return pflagyn;
}


var funcHapslabHeaderFooterPartner = function ( ll_argsToFunction )
{
    var ll_descheader     = ll_argsToFunction[0];
    var ll_divid    = ll_argsToFunction[1];
    var ll_divclass = ll_argsToFunction[2];

//  window.alert ('FYI: INN Blog: '+ll_descheader+': '+ ll_divid+': '+ ll_divclass );
         var bp_picIDX;
         var loopIdx = 0;    // Used to add images with a continuous index array
         var picBlogsArrayLen = PictureBlogsJSONArray.length; 

//         window.alert("Pix picBlogsArrayLen: " + picBlogsArrayLen );

         //#############################################
         // Blogpage: Title details & Picture 
         //           Uses first index of the .js file array
         //#############################################


         var p0name        = PictureBlogsJSONArray[0].name;
         var p0title       = PictureBlogsJSONArray[0].title;
         var p0desc        = PictureBlogsJSONArray[0].desc;
         var p0createdate  = PictureBlogsJSONArray[0].createdate;
         var p0modifydate  = PictureBlogsJSONArray[0].modifydate;
         var p0category    = PictureBlogsJSONArray[0].category;
         var p0subcategory = PictureBlogsJSONArray[0].subcategory;
         var p0blogyn      = PictureBlogsJSONArray[0].blogyn;
         var p0blogpage    = PictureBlogsJSONArray[0].blogpage;
         var p0author      = PictureBlogsJSONArray[0].author;


         //#######################################
         // Blogpage: title
         //#######################################

         var bpHeadDiv = document.createElement('div');
         var bpHeadClass = document.createAttribute("class");
         bpHeadClass.value = "trends-partner-header"; 
         bpHeadDiv.classList.add("trends-partner-header");
         document.getElementsByClassName(ll_divclass)[0].appendChild(bpHeadDiv); 

	 var hspan0 = document.createElement('h1');
	 hspan0.id  = ll_divid; 
	 var hspan0Class = document.createAttribute("class");
	 hspan0Class.value = "h1-only"; 
//         hspan0.classList.add("h1-only", "trends-blogs-header-margin");
	 hspan0.classList.add("h1-only");
         var h0output = ll_descheader;
         var hspan0node = document.createTextNode(h0output);
         hspan0.appendChild(hspan0node);
         document.getElementsByClassName("trends-partner-header")[loopIdx].appendChild(hspan0); 
//         document.getElementsByClassName(ll_divclass)[0].appendChild(hspan0); 


         //#######################################
         // Blogpage: CONTAINER for details, author, date, href category, subcategory, title, desc
         //#######################################

         var bppHeadDiv = document.createElement('div');
         var bppHeadClass = document.createAttribute("class");
         bppHeadClass.value = "trends-partner-container-one"; 
         bppHeadDiv.classList.add("trends-partner-container-one");
         document.getElementsByClassName(ll_divclass)[0].appendChild(bppHeadDiv); 

         for (bp_picIDX = 1; bp_picIDX < picBlogsArrayLen; bp_picIDX++)
         {
             var ls_picIDX = parseInt(bp_picIDX);
             var pname        = PictureBlogsJSONArray[bp_picIDX].name;
             var ptitle       = PictureBlogsJSONArray[bp_picIDX].title;
             var pdesc        = PictureBlogsJSONArray[bp_picIDX].desc;
             var pcreatedate  = PictureBlogsJSONArray[bp_picIDX].createdate;
             var pmodifydate  = PictureBlogsJSONArray[bp_picIDX].modifydate;
             var pcategory    = PictureBlogsJSONArray[bp_picIDX].category;
             var psubcategory = PictureBlogsJSONArray[bp_picIDX].subcategory;
             var ppicyn      = PictureBlogsJSONArray[bp_picIDX].picyn;
             var pdescyn      = PictureBlogsJSONArray[bp_picIDX].descyn;
             var pblogyn      = PictureBlogsJSONArray[bp_picIDX].blogyn;
             var pblogpage    = PictureBlogsJSONArray[bp_picIDX].blogpage;
             var pauthor      = PictureBlogsJSONArray[bp_picIDX].author;

             //#############################################
             // Partner: Check IF picyn, descyn, & blogyn == 'y' 
             // blogpage.html exists > 0, 
             // blogpage.html extn is .html
             //#############################################

             ppicyn  = parseFlag(ppicyn);
             pdescyn = parseFlag(pdescyn);
             pblogyn = parseFlag(pblogyn);
             var pfilextn = returnFileExtn(pblogpage);

             if ( (ppicyn == 'y') && (pdescyn == 'y') && (pblogyn == 'y') && (pblogpage.length > 6) && (pfilextn == '.html') )
             {
                var blogpageDiv = document.createElement('div');
                blogpageDiv.id = "trends-partner-containerid";
                var blogpageClass = document.createAttribute("class");
                blogpageClass.value = "trends-partner-container-two";
                blogpageDiv.classList.add("trends-partner-container-two");
                     document.getElementsByClassName("trends-partner-container-one")[0].appendChild(blogpageDiv); 
              
                var parent0 = this.parentNode;
   		var aTag0 = document.createElement('a');
   		aTag0.id  = "trends-partner-atagid";
   		var aTag0Class = document.createAttribute("class");
                aTag0Class.value = "trends-partner-atag";
                aTag0.href = pblogpage;

               //#######################################          
               // Blogpage: Image
               //#######################################

   		var imgTag0 = document.createElement('img');
                imgTag0.id = "trends-partner-imgid";
   		var imgTag0Class = document.createAttribute("class");
   		imgTag0Class.value = "trends-partner-img";
   		imgTag0.classList.add("trends-partner-img");
    		imgTag0.src =   pname;
                aTag0.appendChild(imgTag0);
                document.getElementsByClassName("trends-partner-container-two")[loopIdx].appendChild(aTag0);


               //#######################################
               // Blogpage: CONTAINER for details, author, date, href category, subcategory, title, desc
               //#######################################
/*
   		var bptcDiv = document.createElement('div');
   		var bptcClass = document.createAttribute("class");
   		bptcClass.value = "trends-partner-text-container"; 
   		bptcDiv.classList.add("trends-partner-text-container");
   		document.getElementsByClassName("trends-partner-container-two")[loopIdx].appendChild(bptcDiv); 
*/   

               //#######################################
               // Blogpage: title
               //#######################################

   		var hspan = document.createElement('h2');
   		var hspanClass = document.createAttribute("class");
   		hspanClass.value = "trends-partner-title"; 
   		hspan.classList.add("trends-partner-title");
                var houtput = ptitle;
                var hspannode = document.createTextNode(houtput);
                hspan.appendChild(hspannode);
   		     document.getElementsByClassName("trends-partner-container-two")[loopIdx].appendChild(hspan); 

   
               //#######################################
               // Blogpage: desc
               //#######################################

   		var descDiv = document.createElement('div');
   		var descClass = document.createAttribute("class");
   		descClass.value = "trends-partner-desc"; 
   		descDiv.classList.add("trends-partner-desc");

                var tempdesc1 = pdesc.slice (0, 75);  // text in the partner detail box
                var tempdesc2 = tempdesc1.concat ('...');
                descDiv.innerHTML = tempdesc2;
   		     document.getElementsByClassName("trends-partner-container-two")[loopIdx].appendChild(descDiv); 
   
                loopIdx = loopIdx + 1;
             }
         }

         // createHeaderFooterPingJSONArray( HAPSLABHEADERFOOTERPING ); 

}     // END of funcHapslabHeaderFooterPartner


var funcHapslabHeaderFooterCustomer = function ( ll_argsToFunction )
{
    var ll_descheader     = ll_argsToFunction[0];
    var ll_divid    = ll_argsToFunction[1];
    var ll_divclass = ll_argsToFunction[2];

//  window.alert ('FYI: INN Blog: '+ll_descheader+': '+ ll_divid+': '+ ll_divclass );
         var bp_picIDX;
         var loopIdx = 0;    // Used to add images with a continuous index array
         var picBlogsArrayLen = PictureBlogsJSONArray.length; 

// trends-blogspage-container
//         window.alert("Pix picBlogsArrayLen: " + picBlogsArrayLen );

         //#############################################
         // Blogpage: Title details & Picture 
         //           Uses first index of the .js file array
         //#############################################


         var p0name        = PictureBlogsJSONArray[0].name;
         var p0title       = PictureBlogsJSONArray[0].title;
         var p0desc        = PictureBlogsJSONArray[0].desc;
         var p0createdate  = PictureBlogsJSONArray[0].createdate;
         var p0modifydate  = PictureBlogsJSONArray[0].modifydate;
         var p0category    = PictureBlogsJSONArray[0].category;
         var p0subcategory = PictureBlogsJSONArray[0].subcategory;
         var p0blogyn      = PictureBlogsJSONArray[0].blogyn;
         var p0blogpage    = PictureBlogsJSONArray[0].blogpage;
         var p0author      = PictureBlogsJSONArray[0].author;

//         window.alert("Pic: " + p0name );

         //#######################################
         // Blogpage: title
         //#######################################

         var bpHeadDiv = document.createElement('div');
         var bpHeadClass = document.createAttribute("class");
         bpHeadClass.value = "trends-customer-header"; 
         bpHeadDiv.classList.add("trends-customer-header");
         document.getElementsByClassName(ll_divclass)[0].appendChild(bpHeadDiv); 

	 var hspan0 = document.createElement('h1');
	 var hspan0Class = document.createAttribute("class");
	 hspan0Class.value = "h1-only"; 
//         hspan0.classList.add("h1-only", "trends-blogs-header-margin");
	 hspan0.classList.add("h1-only");
         var h0output = ll_descheader;
         var hspan0node = document.createTextNode(h0output);
         hspan0.appendChild(hspan0node);
         document.getElementsByClassName("trends-customer-header")[loopIdx].appendChild(hspan0); 
//         document.getElementsByClassName(ll_divclass)[0].appendChild(hspan0); 

         //#######################################
         // Blogpage: CONTAINER for details, author, date, href category, subcategory, title, desc
         //#######################################

         var bppHeadDiv = document.createElement('div');
         var bppHeadClass = document.createAttribute("class");
         bppHeadClass.value = "trends-customer-container-one"; 
         bppHeadDiv.classList.add("trends-customer-container-one");
         document.getElementsByClassName(ll_divclass)[0].appendChild(bppHeadDiv); 

         for (bp_picIDX = 1; bp_picIDX < picBlogsArrayLen; bp_picIDX++)
         {
             var ls_picIDX = parseInt(bp_picIDX);
             var pname        = PictureBlogsJSONArray[bp_picIDX].name;
             var ptitle       = PictureBlogsJSONArray[bp_picIDX].title;
             var pdesc        = PictureBlogsJSONArray[bp_picIDX].desc;
             var pcreatedate  = PictureBlogsJSONArray[bp_picIDX].createdate;
             var pmodifydate  = PictureBlogsJSONArray[bp_picIDX].modifydate;
             var pcategory    = PictureBlogsJSONArray[bp_picIDX].category;
             var psubcategory = PictureBlogsJSONArray[bp_picIDX].subcategory;
             var ppicyn       = PictureBlogsJSONArray[bp_picIDX].picyn;
             var pdescyn      = PictureBlogsJSONArray[bp_picIDX].descyn;
             var pblogyn      = PictureBlogsJSONArray[bp_picIDX].blogyn;
             var pblogpage    = PictureBlogsJSONArray[bp_picIDX].blogpage;
             var pauthor      = PictureBlogsJSONArray[bp_picIDX].author;

             //#############################################
             // Customer: Check IF picyn, descyn, & blogyn == 'y' 
             // blogpage.html exists > 0, 
             // blogpage.html extn is .html
             //#############################################

             ppicyn  = parseFlag(ppicyn);
             pdescyn = parseFlag(pdescyn);
             pblogyn = parseFlag(pblogyn);
             var pfilextn = returnFileExtn(pblogpage);

             if ( (ppicyn == 'y') && (pdescyn == 'y') && (pblogyn == 'y') && (pblogpage.length > 6) && (pfilextn == '.html') )
             {
                var blogpageDiv = document.createElement('div');
                blogpageDiv.id = "trends-customer-containerid";
                var blogpageClass = document.createAttribute("class");
                blogpageClass.value = "trends-customer-container-two";
                blogpageDiv.classList.add("trends-customer-container-two");
                     document.getElementsByClassName("trends-customer-container-one")[0].appendChild(blogpageDiv); 
              
                // var parent0 = this.parentNode;
   		var aTag0 = document.createElement('a');
   		aTag0.id  = "trends-customer-atagid";
   		var aTag0Class = document.createAttribute("class");
                aTag0Class.value = "trends-customer-atag";
                aTag0.href = pblogpage;

               //#######################################          
               // Blogpage: Image
               //#######################################

   		var imgTag0 = document.createElement('img');
                imgTag0.id = "trends-customer-imgid";
   		var imgTag0Class = document.createAttribute("class");
   		imgTag0Class.value = "trends-customer-img";
   		imgTag0.classList.add("trends-customer-img");
    		imgTag0.src =   pname;
                aTag0.appendChild(imgTag0);
                document.getElementsByClassName("trends-customer-container-two")[loopIdx].appendChild(aTag0);
                loopIdx = loopIdx + 1;
             }
         }

         // createHeaderFooterPingJSONArray( HAPSLABHEADERFOOTERPING ); 

}     // END of funcHapslabHeaderFooterCustomer




// function funcHapslabHeaderFooterBlog(ll_header)
var funcHapslabHeaderFooterBlog = function ( ll_argsToFunction )
{
    var ll_descheader     = ll_argsToFunction[0];
    var ll_divid    = ll_argsToFunction[1];
    var ll_divclass = ll_argsToFunction[2];

//  window.alert ('FYI: INN Blog: '+ll_descheader+': '+ ll_divid+': '+ ll_divclass );
         var bp_picIDX;
         var loopIdx = 0;    // Used to add images with a continuous index array
         var picBlogsArrayLen = PictureBlogsJSONArray.length;

// trends-blogspage-container
//         window.alert("Pix picBlogsArrayLen: " + picBlogsArrayLen );

         //#############################################
         // Blogpage: Title details & Picture 
         //           Uses first index of the .js file array
         //#############################################


         var p0name        = PictureBlogsJSONArray[0].name;
         var p0title       = PictureBlogsJSONArray[0].title;
         var p0desc        = PictureBlogsJSONArray[0].desc;
         var p0createdate  = PictureBlogsJSONArray[0].createdate;
         var p0modifydate  = PictureBlogsJSONArray[0].modifydate;
         var p0category    = PictureBlogsJSONArray[0].category;
         var p0subcategory = PictureBlogsJSONArray[0].subcategory;
         var p0blogyn      = PictureBlogsJSONArray[0].blogyn;
         var p0blogpage    = PictureBlogsJSONArray[0].blogpage;
         var p0author      = PictureBlogsJSONArray[0].author;

//         window.alert("Pic: " + p0name );


         //#######################################
         // Blogpage: title
         //#######################################

         var bpHeadDiv = document.createElement('div');
         var bpHeadClass = document.createAttribute("class");
         bpHeadClass.value = "trends-blogs-header"; 
         bpHeadDiv.classList.add("trends-blogs-header");
         document.getElementsByClassName(ll_divclass)[0].appendChild(bpHeadDiv); 
         
	 var hspan0 = document.createElement('h1');
	 var hspan0Class = document.createAttribute("class");
	 hspan0Class.value = "h1-only"; //trends-blogs-header-only
	 hspan0.classList.add("h1-only");
         var h0output = ll_descheader;
         var hspan0node = document.createTextNode(h0output);
         hspan0.appendChild(hspan0node);
         document.getElementsByClassName("trends-blogs-header")[loopIdx].appendChild(hspan0); 


/* STOPPED 18:42 31-10-2021

         //#######################################
         // Blogpage: CONTAINER for details, author, date, href category, subcategory, title, desc
         //#######################################

         var bppHeadDiv = document.createElement('div');
         var bppHeadClass = document.createAttribute("class");
         bppHeadClass.value = "trends-blogs-details-container"; 
         bppHeadDiv.classList.add("trends-blogs-details-container");
         document.getElementsByClassName("trends-blogs-header")[0].appendChild(bppHeadDiv); 

         //#######################################
         // Blogpage: details - author
         //#######################################

         var dspan01 = document.createElement('span');
         var dspan01Class = document.createAttribute("class");
         dspan01Class.value = "trends-blogs-details"; 
         dspan01.classList.add("trends-blogs-details");
         var p0output = "";
         var dspan01node = document.createTextNode(p0output);
         dspan01.appendChild(dspan01node);
         document.getElementsByClassName("trends-blogs-details-container")[0].appendChild(dspan01); 
   
         var dspan02 = document.createElement('span');
         var dspan02Class = document.createAttribute("class");
         dspan02Class.value = "trends-blogs-details";
         dspan02.classList.add("trends-blogs-details");
         var p0outout2 = p0author;
         var dspan02node = document.createTextNode(p0outout2);
         dspan02.appendChild(dspan02node);
         document.getElementsByClassName("trends-blogs-header")[0].appendChild(dspan02); 
 
  
         //#######################################
         // Blogpage: details - createdate
         //#######################################

         var dspan03 = document.createElement('span');
         var dspan03Class = document.createAttribute("class");
         dspan03Class.value = "trends-blogs-details"; 
         dspan03.classList.add("trends-blogs-details");
         var p0output = " on ";
         var dspan03node = document.createTextNode(p0output);
         dspan03.appendChild(dspan03node);
         document.getElementsByClassName("trends-blogs-header")[0].appendChild(dspan03); 
   
         var dspan04 = document.createElement('span');
         var dspan04Class = document.createAttribute("class");
         dspan04Class.value = "trends-blogs-details";
         dspan04.classList.add("trends-blogs-details");
         var p0outout4 = p0createdate + ", ";
         var dspan04node = document.createTextNode(p0outout4);
         dspan04.appendChild(dspan04node);
         document.getElementsByClassName("trends-blogs-header")[0].appendChild(dspan04); 


         //#######################################   
         // Blogpage: details - category
         //#######################################

         var atag01 = document.createElement('a');
         var atag01Class = document.createAttribute("class");
         atag01Class.value = "trends-blogs-details";
         atag01.classList.add("trends-blogs-details");
         var atag011  = "Category: " + capitalizeFirstLetter(p0category);
         atag01.title  = atag011;
         var p0outout11 = p0category.toLowerCase();
         atag01.href = "https://www.hapslab.com/" + p0outout11 + ".html";
         var atag01node = document.createTextNode(atag011);
         atag01.appendChild(atag01node);
         document.getElementsByClassName("trends-blogs-header")[0].appendChild(atag01); 
   

         //#######################################
         // Blogpage: details - sub-category
         //#######################################

         var atag02 = document.createElement('a');
         var atag02Class = document.createAttribute("class");
         atag02Class.value = "trends-blogs-details";
         atag02.classList.add("trends-blogs-details");
         var atag021  = "Sub-category: " + capitalizeFirstLetter(p0subcategory);
         atag02.title  = atag021;
         var p0outout21 = p0subcategory.toLowerCase();
         atag02.href = "https://www.hapslab.com/" + p0outout21 + ".html";
         var atag02node = document.createTextNode(", "+atag021);
         atag02.appendChild(atag02node);
         document.getElementsByClassName("trends-blogs-header")[0].appendChild(atag02); 

   STOPPED 18:42 31-10-2021  ******* */

/* STOPPED 18:42 31-10-2021
         var imgTagH = document.createElement('img');
         imgTagH.id = "trends-blogpage-imgidH";
         var imgTagHClass = document.createAttribute("class");
         imgTagHClass.value = "trends-blogs-img-only";
         imgTagH.classList.add("trends-blogs-img-only");
         imgTagH.src    = p0name; 
         document.getElementsByClassName("trends-blogs-header")[0].appendChild(imgTagH); 
*/


         for (bp_picIDX = 1; bp_picIDX < picBlogsArrayLen; bp_picIDX++)
         {
             var ls_picIDX = parseInt(bp_picIDX);
             var pname        = PictureBlogsJSONArray[bp_picIDX].name;
             var ptitle       = PictureBlogsJSONArray[bp_picIDX].title;
             var pdesc        = PictureBlogsJSONArray[bp_picIDX].desc;
             var pcreatedate  = PictureBlogsJSONArray[bp_picIDX].createdate;
             var pmodifydate  = PictureBlogsJSONArray[bp_picIDX].modifydate;
             var pcategory    = PictureBlogsJSONArray[bp_picIDX].category;
             var psubcategory = PictureBlogsJSONArray[bp_picIDX].subcategory;
             var pblogyn      = PictureBlogsJSONArray[bp_picIDX].blogyn;
             var pblogpage    = PictureBlogsJSONArray[bp_picIDX].blogpage;
             var pauthor      = PictureBlogsJSONArray[bp_picIDX].author;

             //#############################################
             // Blogpage: Check IF 
             // blogyn = y, 
             // blogpage.html exists > 0, 
             // blogpage.html extn is .html
             //#############################################

             var pblogyn1 = pblogyn.trim();
             var pblogyn2 = pblogyn1.substr(1,1);
             var pblogyn3 = pblogyn1.toLowerCase();
             var pfilextn = returnFileExtn(pblogpage);

             if ( (pblogyn3 == 'y') && (pblogpage.length > 6) && (pfilextn == '.html') )
             {
                var blogpageDiv = document.createElement('div');
                blogpageDiv.id = "trends-blogpage-containerid";
                var blogpageClass = document.createAttribute("class");
                blogpageClass.value = "trends-blogpage-container";
                blogpageDiv.classList.add("trends-blogpage-container");
                     document.getElementsByClassName(ll_divclass)[0].appendChild(blogpageDiv); 
              
                var parent0 = this.parentNode;
   		var aTag0 = document.createElement('a');
   		aTag0.id  = "trends-blogpage-atagid";
   		var aTag0Class = document.createAttribute("class");
                aTag0Class.value = "trends-blogpage-atag";
                aTag0.href = pblogpage;

               //#######################################          
               // Blogpage: Image
               //#######################################

   		var imgTag0 = document.createElement('img');
                imgTag0.id = "trends-blogpage-imgid";
   		var imgTag0Class = document.createAttribute("class");
   		imgTag0Class.value = "trends-blogpage-img";
   		imgTag0.classList.add("trends-blogpage-img");
    		imgTag0.src =   pname;
                aTag0.appendChild(imgTag0);
                document.getElementsByClassName("trends-blogpage-container")[loopIdx].appendChild(aTag0);


               //#######################################
               // Blogpage: CONTAINER for details, author, date, href category, subcategory, title, desc
               //#######################################

   		var bptcDiv = document.createElement('div');
   		var bptcClass = document.createAttribute("class");
   		bptcClass.value = "trends-blogpage-text-container"; 
   		bptcDiv.classList.add("trends-blogpage-text-container");
   		document.getElementsByClassName("trends-blogpage-container")[loopIdx].appendChild(bptcDiv); 
   

               //#######################################
               // Blogpage: details - author
               //#######################################

   		var dspan1 = document.createElement('span');
   		var dspan1Class = document.createAttribute("class");
   		dspan1Class.value = "trends-blogpage-details"; 
   		dspan1.classList.add("trends-blogpage-details");
                var poutput = "By ";
                var dspan1node = document.createTextNode(poutput);
                dspan1.appendChild(dspan1node);
                     document.getElementsByClassName("trends-blogpage-text-container")[loopIdx].appendChild(dspan1); 
   
   		var dspan2 = document.createElement('span');
   		var dspan2Class = document.createAttribute("class");
                dspan2Class.value = "trends-blogpage-style";
   		dspan2.classList.add("trends-blogpage-style");
                var poutout2 = pauthor;
                var dspan2node = document.createTextNode(poutout2);
                dspan2.appendChild(dspan2node);
   		     document.getElementsByClassName("trends-blogpage-text-container")[loopIdx].appendChild(dspan2); 
 
  
               //#######################################
               // Blogpage: details - createdate
               //#######################################

   		var dspan3 = document.createElement('span');
   		var dspan3Class = document.createAttribute("class");
   		dspan3Class.value = "trends-blogpage-details"; 
   		dspan3.classList.add("trends-blogpage-details");
                var poutput = " on ";
                var dspan3node = document.createTextNode(poutput);
                dspan3.appendChild(dspan3node);
   		     document.getElementsByClassName("trends-blogpage-text-container")[loopIdx].appendChild(dspan3); 
   
   		var dspan4 = document.createElement('span');
   		var dspan4Class = document.createAttribute("class");
                dspan4Class.value = "trends-blogpage-style";
   		dspan4.classList.add("trends-blogpage-style");
                var poutout4 = pcreatedate + " ";
                var dspan4node = document.createTextNode(poutout4);
                dspan4.appendChild(dspan4node);
   		     document.getElementsByClassName("trends-blogpage-text-container")[loopIdx].appendChild(dspan4); 


               //#######################################   
               // Blogpage: details - category
               //#######################################

   		var atag1 = document.createElement('a');
   		var atag1Class = document.createAttribute("class");
                atag1Class.value = "trends-blogpage-details";
   		atag1.classList.add("trends-blogpage-details");
                var atag11  = "Category: " + capitalizeFirstLetter(pcategory);
                atag1.title  = atag11;
                var poutout11 = pcategory.toLowerCase();
                // #hardcode
                atag1.href = "https://www.hapslab.com/" + poutout11 + ".html";
                var atag1node = document.createTextNode(atag11);
                atag1.appendChild(atag1node);
   		     document.getElementsByClassName("trends-blogpage-text-container")[loopIdx].appendChild(atag1); 
   

               //#######################################
               // Blogpage: details - sub-category
               //#######################################

   		var atag2 = document.createElement('a');
   		var atag2Class = document.createAttribute("class");
                atag2Class.value = "trends-blogpage-details";
   		atag2.classList.add("trends-blogpage-details");
                var atag21  = "Sub-category: " + capitalizeFirstLetter(psubcategory);
                atag2.title  = atag21;
                var poutout21 = psubcategory.toLowerCase();
                atag2.href = "https://www.hapslab.com/" + poutout21 + ".html";
                var atag2node = document.createTextNode(", "+atag21);
                atag2.appendChild(atag2node);
   		     document.getElementsByClassName("trends-blogpage-text-container")[loopIdx].appendChild(atag2); 

   
               //#######################################
               // Blogpage: title
               //#######################################

   		var hspan = document.createElement('h2');
   		var hspanClass = document.createAttribute("class");
   		hspanClass.value = "trends-blogpage-title"; 
   		hspan.classList.add("trends-blogpage-title");
                var houtput = ptitle;
                var hspannode = document.createTextNode(houtput);
                hspan.appendChild(hspannode);
   		     document.getElementsByClassName("trends-blogpage-text-container")[loopIdx].appendChild(hspan); 

   
               //#######################################
               // Blogpage: desc
               //#######################################

   		var descDiv = document.createElement('div');
   		var descClass = document.createAttribute("class");
   		descClass.value = "trends-blogpage-desc"; 
   		descDiv.classList.add("trends-blogpage-desc");

                var tempdesc1 = pdesc.slice (0, 135);    /* more or less text */
                var tempdesc2 = tempdesc1.concat ('...');
                descDiv.innerHTML = tempdesc2;

  		     document.getElementsByClassName("trends-blogpage-text-container")[loopIdx].appendChild(descDiv); 
   
                loopIdx = loopIdx + 1;
             }
         }

// STOPPED 18:13 30-10-2021
//         createHeaderFooterPingJSONArray( HAPSLABHEADERFOOTERPING ); 

}     // END of hapslabHeaderPixBlogs(ll_desc)


var funcHapslabHeaderFooterHelp = function ( ll_argsToFunction )
{
    var ll_desc     = ll_argsToFunction[0];
    var ll_divid    = ll_argsToFunction[1];
    var ll_divclass = ll_argsToFunction[2];

// window.alert ('FYI: INN Help: '+ll_desc+': '+ ll_divid+': '+ ll_divclass );

         //#######################################
         // Blogpage: Header
         //#######################################

	 var hspan0 = document.createElement('h1');
	 hspan0.id  = ll_divid; 
	 var hspan0Class = document.createAttribute("class");
	 hspan0Class.value = "h1-only"; 
	 hspan0.classList.add("h1-only", "trends-blogs-header-margin");
         var h0output = ll_desc;
         var hspan0node = document.createTextNode(h0output);
         hspan0.appendChild(hspan0node);
         document.getElementsByClassName(ll_divclass)[0].appendChild(hspan0);


         //#######################################
         // Blogpage: Logo 
         //#######################################
/*
         var bppHeadDiv = document.createElement('div');
         var bppHeadClass = document.createAttribute("class");
         bppHeadClass.value = "trends-blogs-details-container"; 
         bppHeadDiv.classList.add("trends-blogs-details-container");
         document.getElementsByClassName("trends-blogs-header")[0].appendChild(bppHeadDiv); 
*/

         var imgTagH = document.createElement('img');
         imgTagH.id = "trends-blogpage-imgidH";
         var imgTagHClass = document.createAttribute("class");
         imgTagHClass.value = "trends-blogs-img-only";
         imgTagH.classList.add("trends-blogs-img-only");
         imgTagH.src    = PAGEPORTALLOGO; 
         document.getElementsByClassName(ll_divclass)[0].appendChild(imgTagH); 


	 var hspan1 = document.createElement('span');
	 var hspan1Class = document.createAttribute("class");
	 hspan1Class.value = "trends-blogs-header-only"; 
	 hspan1.classList.add("trends-blogs-header-only", "trends-blogs-header-margin", "trends-home-container");
         var h1output = "Help the planet heal. Have such deal";   // Add any text here
         var ph1output = h1output.fontcolor("olive");
         hspan1.innerHTML = ph1output;
         // var hspan1node = document.createTextNode(h1output);
         // hspan1.appendChild(hspan1node);
         document.getElementsByClassName(ll_divclass)[0].appendChild(hspan1); 
}



function capitalizeFirstLetter(string)
{
         return string.charAt(0).toUpperCase() + string.slice(1);
}

function ReadHeaderFooterPingJSONFile(picHFPArray)
{
// ReadHeaderFooterPingJSONFile is the name of JSON object in file hapslabHeaderFooterPing.js
// The typeof operator, when used on an array, returns object.

         if (isanArray(picHFPArray))
         {
            HeaderFooterPingJSONArray = picHFPArray.sort();
         }
         else
         {
            window.alert("ERROR: ReadHeaderFooterPingJSONFile(): Not an array");
         }
}


function validateReadHeaderFooterJSONFile(ll_JSfile, ll_HFJA)
{
         //
         // Validates hapslabHeaderFooter.js, json file's columns: 
         //           type, name, need, desc, webpage, divid
         //

         for (var inx=0; inx < ll_HFJA.length; inx++)
         {
              if ( checkNullValue (ll_HFJA[inx].type) < 0 )
              {
                   window.alert('ERROR: validateReadHeaderFooterJSONFile(): '+ll_JSfile+', JS file array row '+inx+', column type is NULL');
              }
              if ( checkNullValue (ll_HFJA[inx].name) < 0 )
              {
                   window.alert('ERROR: validateReadHeaderFooterJSONFile(): '+ll_JSfile+', JS file array row '+inx+', column name is NULL');
              }
              if ( checkNullValue (ll_HFJA[inx].need) < 0 )
              {
                   window.alert('ERROR: validateReadHeaderFooterJSONFile(): '+ll_JSfile+', JS file array row '+inx+', column need is NULL');
              }
              if ( checkNullValue (ll_HFJA[inx].desc) < 0 )
              {
                   window.alert('ERROR: validateReadHeaderFooterJSONFile(): '+ll_JSfile+', JS file array row '+inx+', column desc is NULL');
              }
              if ( checkNullValue (ll_HFJA[inx].webpage) < 0 )
              {
                   window.alert('ERROR: validateReadHeaderFooterJSONFile(): '+ll_JSfile+', JS file array row '+inx+', column webpage is NULL');
              }
              if ( checkNullValue (ll_HFJA[inx].divid) < 0 )
              {
                   window.alert('ERROR: validateReadHeaderFooterJSONFile(): '+ll_JSfile+', JS file array row '+inx+', column divid is NULL');
              }
         }
}


function ReadHeaderFooterJSONFile(picHFArray)
{
// ReadHeaderFooterJSONFile is the name of JSON object in file hapslabHeaderFooter.js
// The typeof operator, when used on an array, returns object.

var status;
var errmsg;

         if (isanArray(picHFArray))
         {
             HeaderFooterJSONArray = picHFArray.sort();
// window.alert("HFJA INN: " + HeaderFooterJSONArray.length);
         }
         else
         {
             window.alert("ERROR: ReadHeaderFooterJSONFile(): Not an array");
         }

         //
         // Assigns ENV VARIABLES from ReadHeaderFooterJSONFile json file used by header & footer areas.
         //
             populateEnvVariables (HeaderFooterJSONArray);

         //
         // Validates ReadHeaderFooterJSONFile json file array columns
         //
            const ll_JSfile = "hapslabHeaderFooter.js";
           // NOT STOPPED 18:48 30-10-2021 #vali #2do
           validateReadHeaderFooterJSONFile (ll_JSfile, HeaderFooterJSONArray)
}


function validateReadHeaderBlogsJSONFile(ll_JSfile, ll_PBJA)
{
// validateReadPictureBlogsJSONFile (ll_JSfile, PictureBlogsJSONArray);

         //
         // Validates hapslabHeaderFooter.js, json file's columns: 
         //           name picyn descyn	blogyn title precis desc createdate 
         //           modifydate category subcategory blogpage tags author
         //

         for (var inx=0; inx < ll_PBJA.length; inx++)
         {
              if ( checkNullValue (ll_PBJA[inx].name) < 0 )
              {
                   window.alert('ERROR: validateReadHeaderBlogsJSONFile(): '+ll_JSfile+', JS file array row '+inx+', column name is NULL');
              }
              if ( checkNullValue (ll_PBJA[inx].picyn) < 0 )
              {
                   window.alert('ERROR: validateReadHeaderBlogsJSONFile(): '+ll_JSfile+', JS file array row '+inx+', column picyn is NULL');
              }
              if ( checkNullValue (ll_PBJA[inx].descyn) < 0 )
              {
                   window.alert('ERROR: validateReadHeaderBlogsJSONFile(): '+ll_JSfile+', JS file array row '+inx+', column descyn is NULL');
              }
              if ( checkNullValue (ll_PBJA[inx].blogyn) < 0 )
              {
                   window.alert('ERROR: validateReadHeaderBlogsJSONFile(): '+ll_JSfile+', JS file array row '+inx+', blogyn desc is NULL');
              }
              if ( checkNullValue (ll_PBJA[inx].title) < 0 )
              {
                   window.alert('ERROR: validateReadHeaderBlogsJSONFile(): '+ll_JSfile+', JS file array row '+inx+', column title is NULL');
              }
              if ( checkNullValue (ll_PBJA[inx].precis) < 0 )
              {
                   window.alert('ERROR: validateReadHeaderBlogsJSONFile(): '+ll_JSfile+', JS file array row '+inx+', column precis is NULL');
              }
              if ( checkNullValue (ll_PBJA[inx].desc) < 0 )
              {
                   window.alert('ERROR: validateReadHeaderBlogsJSONFile(): '+ll_JSfile+', JS file array row '+inx+', column desc is NULL');
              }
              if ( checkNullValue (ll_PBJA[inx].createdate) < 0 )
              {
                   window.alert('ERROR: validateReadHeaderBlogsJSONFile(): '+ll_JSfile+', JS file array row '+inx+', column createdate is NULL');
              }
              if ( checkNullValue (ll_PBJA[inx].modifydate) < 0 )
              {
                   window.alert('ERROR: validateReadHeaderBlogsJSONFile(): '+ll_JSfile+', JS file array row '+inx+', column modifydate is NULL');
              }
              if ( checkNullValue (ll_PBJA[inx].category) < 0 )
              {
                   window.alert('ERROR: validateReadHeaderBlogsJSONFile(): '+ll_JSfile+', JS file array row '+inx+', column category is NULL');
              }
              if ( checkNullValue (ll_PBJA[inx].subcategory) < 0 )
              {
                   window.alert('ERROR: validateReadHeaderBlogsJSONFile(): '+ll_JSfile+', JS file array row '+inx+', column subcategory is NULL');
              }
              if ( checkNullValue (ll_PBJA[inx].blogpage) < 0 )
              {
                   window.alert('ERROR: validateReadHeaderBlogsJSONFile(): '+ll_JSfile+', JS file array row '+inx+', column blogpage is NULL');
              }
              if ( checkNullValue (ll_PBJA[inx].tags) < 0 )
              {
                   window.alert('ERROR: validateReadHeaderBlogsJSONFile(): '+ll_JSfile+', JS file array row '+inx+', column tags is NULL');
              }
              if ( checkNullValue (ll_PBJA[inx].author) < 0 )
              {
                   window.alert('ERROR: validateReadHeaderBlogsJSONFile(): '+ll_JSfile+', JS file array row '+inx+', column author is NULL');
              }
         }
}


function ReadHeaderContactsJSONFile(contactsArray)
{
// ReadshowPictureBlogsJSONFile is the name of JSON object in file hapslabShowPictureBlogs.js
// The typeof operator, when used on an array, returns object.

         if (isanArray(contactsArray))
         {
            ContactsJSONArray = contactsArray.sort();
         }
         else
         {
            window.alert("ERROR: ReadHeaderContactsJSONFile(): Not an array");
         }

// name	picyn	descyn	blogyn title	precis	desc	createdate	modifydate	category	subcategory	blogpage	tags	author
         //
         // Validates ReadHeaderFooterJSONFile json file array columns
         //
            const ll_JSfile = "hapslabHeaderFooterContacts.js";
            // STOPPED 18:52 30-10-2021 #vali #2do
            // validateReadHeaderBlogsJSONFile (ll_JSfile, ContactsJSONArray);
}


function ReadHeaderDataBlogsJSONFile(dataBlogsArray)
{
// ReadHeaderDataBlogsJSONFile is the name of JSON object in file hapslabDataBlogs.js
// The typeof operator, when used on an array, returns object.

         if (isanArray(dataBlogsArray))
         {
            DataBlogsJSONArray = dataBlogsArray.sort();
         }
         else
         {
            window.alert("ERROR: ReadHeaderDataBlogsJSONFile(): Not an array");
         }

// name	picyn	descyn	blogyn title	precis	desc	createdate	modifydate	category	subcategory	blogpage	tags	author
         //
         // Validates ReadHeaderDataBlogsJSONFile json file array columns
         //
            const ll_JSfile = "hapslabDataBlogs.js";
            // STOPPED 18:53 30-10-2021 #vali #2do
            // validateReadHeaderDataBlogsJSONFile (ll_JSfile, DataBlogsJSONArray);

}        // END of ReadHeaderDataBlogsJSONFile


function ReadHeaderPictureBlogsJSONFile(picBlogsArray)
{
// ReadshowPictureBlogsJSONFile is the name of JSON object in file hapslabShowPictureBlogs.js
// The typeof operator, when used on an array, returns object.

         if (isanArray(picBlogsArray))
         {
            PictureBlogsJSONArray = picBlogsArray.sort();

// window.alert("PBJA INN: " + PictureBlogsJSONArray.length);

         }
         else
         {
            window.alert("ERROR: ReadHeaderPictureBlogsJSONFile(): Not an array");
         }

// name	picyn	descyn	blogyn title	precis	desc	createdate	modifydate	category	subcategory	blogpage	tags	author
         //
         // Validates ReadHeaderFooterJSONFile json file array columns
         //
            const ll_JSfile = "hapslabPictureBlogs.js";
            // STOPPED 18:53 30-10-2021 #vali #2do
            // validateReadHeaderBlogsJSONFile (ll_JSfile, PictureBlogsJSONArray);
}


function ReadshowPictureJSONFile(picArray)
{
// ReadshowPictureJSONFile is the name of JSON object in file showPicture.js
// The typeof operator, when used on an array, returns object.

         if (isanArray(picArray))
         {
            showPictureJSONArray = picArray.sort();
         }
         else
         {
            window.alert("ERROR: ReadshowPictureJSONFile(): Not an array");
         }

         var arrLen = showPictureJSONArray.length;
         window.alert("arrLen: " + arrLen);
}


function isanArray(objectArray) {
//  The typeof operator, when used on an array, returns object.

         if (typeof(objectArray) === 'object')
         {
            return true;
         }
         else
         {
            return false;
         }
}

function hapslabChk(ll_desc)
{
         window.alert("JFYI Chk: " + ll_desc);
}

function checkDivClassCSSExists(ll_div_id)
{
    //
    // Check if div tag named, htmlEle exists with class ll_div_class
    // Loop through ALL the div tags in the base html code at init/start
    //

//    var ll_div_class = "trends-blogspage-container";

    var htmlEle = document.getElementsByName(ll_div_id);

    window.alert("FYI: "+ll_div_id);

    //
    // If it isn't "undefined" and it isn't "null", then it exist.
    //
    if ( typeof(htmlEle) != 'undefined' && htmlEle != null )
    {
       //
       // process go ahead
       //
         window.alert('FYI: div exists');
    } 
    else
    {
         window.alert('ERROR: checkDivClassCSSExists(): div tag '+htmlEle+' associated with class '+ll_div_id+' does not exist in the html base code!');
         // return -1;
    }

}


function getAllPageDivsClasses(ll_object, ll_AllPageDivsClassArray)
{
      for (var jdiv of ll_object)
      {
//           window.alert('jdiv: '+jdiv.className);
                  ll_AllPageDivsClassArray.push(jdiv.className);
      }
      
      return ll_AllPageDivsClassArray;
}


function checkAllPageDivsClassesExist(ll_AllPageDivsClassesLookupArray, ll_AllPageDivsClassesCurrArray)
{
         let divsNotExisting = ll_AllPageDivsClassesLookupArray.filter(x => ll_AllPageDivsClassesCurrArray.indexOf(x) != -1);
         return divsNotExisting;         
}


function runFunc(funcName, funcArgs)
{
//         funcName('Home');   
// working
         window.alert('INNN: '+funcName+', '+funcArgs);
         funcName.apply(this, funcArgs);
}


function returnHeaderFooterJSONArrayIndexElements(ll_HeaderFooterJSONArray, ll_divContainerArray, ll_str)
{
// 'Products'.indexOf("s");
// str.substring(0, 4);

         var returnArgArray = [];
         var Idx = [];
         var j = -1;

         var hfjaType;
         var hfjaNeed;
         var hfjaDesc;
         var hfjaDivid;
         var hfjaDivclass;
         var hfjaJSf;
         var hfjaJSfd;
         var hfjaJSfds;
         var hfjaJSfp;
         var hfjaJSfile;
         //
         // Find the index of ll_str in ll_divContainerArray (divid array/column)
         //
         while (( j = ll_divContainerArray.indexOf(ll_str, j+1)) != -1)
         {
                Idx.push(j);
         }

//         window.alert('Idx: '+Idx);
         //
         // Now find ALL elements at same index in ll_HeaderFooterJSONArray
         //

//for (x in person) {
//  text += person[x] + " ";
//         for (h in Inx)
         for (var h = 0; h < Idx.length; h++)
         {
             Innxx = Idx[h];

             hfjaType            = HeaderFooterJSONArray[Innxx].type;
             returnArgArray.push(hfjaType);
             hfjaNeed            = HeaderFooterJSONArray[Innxx].need;
             returnArgArray.push(hfjaNeed);
             hfjaDesc            = HeaderFooterJSONArray[Innxx].desc;
             returnArgArray.push(hfjaDesc);
             hfjaDivid           = HeaderFooterJSONArray[Innxx].divid;
             returnArgArray.push(hfjaDivid);
             hfjaDivclass        = HeaderFooterJSONArray[Innxx].divclass;
             returnArgArray.push(hfjaDivclass);
             hfjaJSfunction      = HeaderFooterJSONArray[Innxx].jsfunction;
             returnArgArray.push(hfjaJSfunction);
             hfjaJSfunctiondep   = HeaderFooterJSONArray[Innxx].jsfunctiondep;
             returnArgArray.push(hfjaJSfunctiondep);
             hfjaJSdatastructure = HeaderFooterJSONArray[Innxx].jsdatastructure;
             returnArgArray.push(hfjaJSdatastructure);
             hfjaJSfileprocedure = HeaderFooterJSONArray[Innxx].jsfileprocedure;
             returnArgArray.push(hfjaJSfileprocedure);
             hfjaJSfile          = HeaderFooterJSONArray[Innxx].jsfile;

             returnArgArray.push(hfjaJSfile);
         }

         return returnArgArray;
}


/*
function getAllPageDivsClassesCHG(ll_object, ll_AllPageDivsClassArray)
{
         for (var jdiv of ll_object)
         {
                  ll_AllPageDivsClassArray.push(jdiv.className);
         }
      
         return ll_AllPageDivsClassArray;
}
*/


function getAllPageClasses()
{
         // 
         // Function getAllPageDivsClasses() extracts ALL div elements "class", 
         // and returns them all into an array.
         // 
         const AllPageClassesObject = document.querySelectorAll("*[class]");
         var   AllPageClassesArray = [];

         for (var jdiv of AllPageClassesObject)
         {
                  AllPageClassesArray.push(jdiv.className);
         }

         return AllPageClassesArray;
}



function hapslabWrapper()
{

/*  #2do Move this class chk code into ReadJSONfile() 

         const AllPageClassesObject = document.querySelectorAll("*[class]");
         var   AllPageClassesCurrArray = [];
         // 
         // Function getAllPageDivsClasses() extracts ALL div elements "class", on the page from AllPageDivsObject object
         // 

         AllPageClassesCurrArray = getAllPageDivsClasses( AllPageClassesObject, AllPageClassesCurrArray );

         // window.alert('FYI: Classes: '+ AllPageClassesCurrArray.length +', '+ AllPageClassesCurrArray);



         if (AllPageDivsClassesCurrArray.includes('trends-blogspage-container') )
         {
         window.alert('FYI: FOUND');
         }
*/



// funcHapslabHeaderFooterPartner

        var AllPageClassesArray = getAllPageClasses();
        var HFJArray = HeaderFooterJSONArray;

         // window.alert('FYI: Classes: '+ AllPageClassesArray );

        for (var iDx = 0; iDx < HFJArray.length; iDx++)
        {
             var hfja_type             = HFJArray[iDx].type;
             var hfja_need             = HFJArray[iDx].need;
             var hfja_desc             = HFJArray[iDx].desc;
             var hfja_divid            = HFJArray[iDx].divid;
             var hfja_divclass         = HFJArray[iDx].divclass;
             var hfja_jsfunction       = HFJArray[iDx].jsfunction;
             var hfja_jsfunctiondep    = HFJArray[iDx].jsfunctiondep;
             var hfja_jsdatastructure  = HFJArray[iDx].jsdatastructure;



//             window.alert ('FYI HFJArray: '+iDx+': '+ hfja_type+','+ hfja_need+','+ hfja_desc+','+ hfja_divid+','+ hfja_divclass+','+ hfja_jsfunction+','+ hfja_jsfunctiondep);
//             window.alert('FYI: B4 Func HEADER:'+argsToFunction+':'+runFunction+':'+depFunction );


             var divid = '';
             var argsToFunction = [];
             var runFunction = '';
             var depFunction = '';

             if (hfja_type == 'all' && hfja_need == 'y')
             {

                 if ( !AllPageClassesArray.includes(hfja_divclass) )
                 {
                      window.alert('ERROR: hapslabWrapper(): HTML Page code is missing div class, '+hfja_divclass);
                 }

                 argsToFunction.push(hfja_desc);
                 argsToFunction.push(hfja_divid);
                 argsToFunction.push(hfja_divclass);
                 argsToFunction.push(hfja_jsdatastructure);

//                 dataStruct     = hfja_jsdatastructure;
                 runFunction    = hfja_jsfunction;
                 depFunction    = hfja_jsfunctiondep;


                 if ( checkJSFunction(hfja_divid, hfja_jsfunction) )
                 {
                      window[runFunction](argsToFunction); 
                 }
             }
             else if (hfja_type == 'header' && hfja_need == 'y')
             {

                 if ( !AllPageClassesArray.includes(hfja_divclass) )
                 {
                      window.alert('ERROR: hapslabWrapper(): HTML Page code is missing div class, '+hfja_divclass);
                 }

                 argsToFunction.push(hfja_desc);
                 argsToFunction.push(hfja_divid);
                 argsToFunction.push(hfja_divclass);
                 argsToFunction.push(hfja_jsdatastructure);

                 runFunction    = hfja_jsfunction;
                 depFunction    = hfja_jsfunctiondep;
                
                 if ( checkJSFunction(hfja_divid, hfja_jsfunction) )
                 {
                      window[runFunction](argsToFunction); 
                 }
             }
        }


         //
         // HeaderFooterJSONArray is assigned by ReadHeaderFooterJSONFile()
         //
//         populateEnvVariables(); 

//
// Array.from(new Set(arrayOfNonUniqueValues));
//


// returns true 
// fruits instanceof Array;
// how to check null values in JS
// if (typeof yourName === ‘undefined’){

}

