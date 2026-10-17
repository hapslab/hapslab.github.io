
/* 
------------------------------------ HOME PAGE JavaScript / jQuery -----------------------------
------------------------------------ HOME PAGE JavaScript / jQuery -----------------------------
------------------------------------ HOME PAGE JavaScript / jQuery -----------------------------
------------------------------------ HOME PAGE JavaScript / jQuery -----------------------------
*/

/**
 * Get array of ALL the indexes of sub strings (subStr here) in a multi string (origStr here)
 * @param  {string} sub strings (subStr here)
 * @param  {string} multi string (origStr here)
 * @return [numbers], array of numbers
 */
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


// Global target container array matching your existing data delivery design patterns
var showDatabaseTechJSONArray = [];

/**
 * Rebuilt using the exact procedural DOM injection patterns of HapslabPixPartitionBlogsStart().
 * Automatically builds isolated 2-column detail tables for each target database instance.
 */
function HapslabPixDatabaseBlogsStart() 
{
    var targetLabels = [
        "Database", "Category", "Description", "OSS / Paid", "Deployment Type", "Database Type", "Workload", 
        "Architecture", "ANSI SQL", "UDF", "ETL/ELT/CDC", "Processing", 
        "4GL", "REST API", "Application", "Indexing Strategy", "Partitioning Strategy", 
        "Sharding Strategy", "Conflict Resolution", "Replication Strategy", "High Availability", 
        "Storage Engine", "Query Engine", "Security, Access & Encryption"
    ];

    var db_idx;
    var loopIdx = 0; 
    var databaseArrayLen = showDatabaseTechJSONArray.length;

//
// 1., 2., & 3. (below) CREATING THE DATABASES INDEX CARD
//

    var baseRootContainer = document.getElementsByClassName("trends-blogspage-container")[0];
    if (!baseRootContainer || databaseArrayLen === 0) return;

    // 1. CREATE THE INDEX WRAPPER CARD
    var indexWrapper = document.createElement('div');
    indexWrapper.style.cssText = "width: 65%; margin: 15vh auto 10vh auto; padding: 15px 20px; background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 6px; box-shadow: 0 2px 5px rgba(0,0,0,0.02); text-align: left;";
   // indexWrapper.style.setProperty('margin-top', '15vh', 'important');

    var indexTitle = document.createElement('h4');
    indexTitle.style.cssText = "text-align: center; margin: 6px 0 16px 0; font-size: 14px; color: #01014c; font-family: Verdana, sans-serif; font-weight: bold;";
    indexTitle.appendChild(document.createTextNode("Database Navigation Index"));
    indexWrapper.appendChild(indexTitle);

    // 2. CREATE MULTI-COLUMN AREA TO OPTIMIZE GRID SPACE FOR 25 ITEMS
    var indexList = document.createElement('ul');
    indexList.style.cssText = "margin: 0; padding: 0 0 0 20px; column-count: 3; column-gap: 20px; list-style-type: none;";

    // 3. LOOP 1: FIRST BUILD THE ENTIRE INDEX TOP GRAPH
    for (var idx = 0; idx < databaseArrayLen; idx++) {
        var itemDBName = showDatabaseTechJSONArray[idx]["Database"] ? String(showDatabaseTechJSONArray[idx]["Database"]).trim() : "Unknown";

        var AnchorID;
        const myAnchorID = itemDBName.split(" ");
        if (myAnchorID.length > 2) {
            AnchorID = myAnchorID[1]+myAnchorID[2];
        }
        else {
            AnchorID = myAnchorID[1];
        }
        var safeTableAnchorID = "db-profile-" + AnchorID.toLowerCase();

        // var safeAnchorID = "db-profile-" + "test";
        var listItem = document.createElement('li');
        listItem.style.cssText = "margin-bottom: 6px; font-size: 12px; font-family: Verdana, sans-serif;";

        var anchorLink = document.createElement('a');
        anchorLink.href = "#" + safeTableAnchorID;
        anchorLink.style.cssText = "color: #020273; text-decoration: none; font-weight: normal;";
        
        anchorLink.onmouseover = function() { this.style.textDecoration = "underline"; };
        anchorLink.onmouseout = function() { this.style.textDecoration = "none"; };

        anchorLink.appendChild(document.createTextNode(itemDBName));
        listItem.appendChild(anchorLink);
        indexList.appendChild(listItem);
    }
    indexWrapper.appendChild(indexList);
    baseRootContainer.appendChild(indexWrapper); // Appends the completed index container to the top!


///////////////////////////////////////////////

//
// 1., 2., & 3. (below) CREATING THE FIXED SIDEBAR DATABASE NAVIGATION INDEX
//

    var baseRootContainer = document.getElementsByClassName("trends-blogspage-container")[0];
    if (!baseRootContainer || databaseArrayLen === 0) return;

    // 1. CREATE THE SIDEBAR WRAPPER (Pinned to the left viewport boundary)
    var indexWrapper = document.createElement('div');
    indexWrapper.style.cssText = "position: fixed; top: 12vh; left: 2vw; width: 14vw; max-height: 80vh; overflow-y: auto; padding: 12px 14px; background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); text-align: left; z-index: 1000;";

    var indexTitle = document.createElement('h4');
    indexTitle.style.cssText = "text-align: left; margin: 0 0 10px 0; font-size: 11px; color: #01014c; font-family: Verdana, sans-serif; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #dee2e6; padding-bottom: 6px;";
    indexTitle.appendChild(document.createTextNode("Database Navigation"));
    indexWrapper.appendChild(indexTitle);

    // 2. CREATE A VERTICAL STRAIGHT LIST (Removed multi-column rules)
    var indexList = document.createElement('ul');
    indexList.style.cssText = "margin: 0; padding: 0; list-style-type: none;";

    // 3. LOOP 1: BUILD THE ENTIRE INDEX AS A PURE VERTICAL STACK
    for (var idx = 0; idx < databaseArrayLen; idx++) {
        var itemDBName = showDatabaseTechJSONArray[idx]["Database"] ? String(showDatabaseTechJSONArray[idx]["Database"]).trim() : "Unknown";

        var AnchorID;
        const myAnchorID = itemDBName.split(" ");
        if (myAnchorID.length > 2) {
            AnchorID = myAnchorID[1]+myAnchorID[2];
        }
        else {
            AnchorID = myAnchorID[1];
        }
        var safeTableAnchorID = "db-profile-" + AnchorID.toLowerCase();

        var listItem = document.createElement('li');
        // Tightened spacing and smaller font sizes for high screen efficiency
        listItem.style.cssText = "margin-bottom: 5px; font-size: 11px; font-family: Verdana, sans-serif; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;";

        var anchorLink = document.createElement('a');
        anchorLink.href = "#" + safeTableAnchorID;
        anchorLink.style.cssText = "color: #020273; text-decoration: none; font-weight: normal; display: block; padding: 2px 0;";
        
        anchorLink.onmouseover = function() { this.style.textDecoration = "underline"; this.style.color = "#007bff"; };
        anchorLink.onmouseout = function() { this.style.textDecoration = "none"; this.style.color = "#020273"; };

        anchorLink.appendChild(document.createTextNode(itemDBName));
        listItem.appendChild(anchorLink);
        indexList.appendChild(listItem);
    }
    indexWrapper.appendChild(indexList);
    
    // Instead of pushing inside the container layout, append it directly to the body or main shell 
    // so it handles independent page positioning safely
    document.body.appendChild(indexWrapper); 


    //
    // 4. LOOP 2: NOW RUN THE EXISTING LOGIC TO INJECT ALL 25 TABLES BENEATH IT
    // (Your table iteration code runs here, appending headers with matching IDs)
    //


    for (db_idx = 0; db_idx < databaseArrayLen; db_idx++) 
    {
        var currentDBObj = showDatabaseTechJSONArray[db_idx];
        
        var dbName         = (currentDBObj["Database"] != null) ? String(currentDBObj["Database"]).trim() : "Unknown Database";
        var dbCategory    = currentDBObj["Category"] || "";
        var dbDescription = currentDBObj["Description"] || "";
        var dbPaid           = currentDBObj["Paid"] || currentDBObj["OSS / Paid"] || "";
        var dbDeploy       = currentDBObj["Deploy"] || currentDBObj["Deployment Type"] || "";
        var dbType          = currentDBObj["Type"] || currentDBObj["Database Type"] || "";
        var dbWorkload    = currentDBObj["Workload"] || "";
        var dbArch        = currentDBObj["Arch"] || currentDBObj["Architecture"] || "";
        var dbAnsiSql     = currentDBObj["ANSI SQL"] || "";
        var dbUdf         = currentDBObj["UDF"] || "";
        var dbEtl         = currentDBObj["ETL / ELT / CDC"] || currentDBObj["ETL/ELT/CDC"] || "";
        var dbProcessing  = currentDBObj["Processing"] || "";
        var db4gl         = currentDBObj["4GL"] || "";
        var dbRest        = currentDBObj["REST API"] || "";
        var dbRole        = currentDBObj["Role"] || currentDBObj["Application"] || "";
        var dbIndexing    = currentDBObj["Indexing"] || currentDBObj["Indexing Strategy"] || "";
        var dbPartition   = currentDBObj["Partitioning"] || currentDBObj["Partitioning Strategy"] || "";
        var dbSharding    = currentDBObj["Sharding"] || currentDBObj["Sharding Strategy"] || "";
        var dbConflict    = currentDBObj["Conflict Resolution"] || "";
        var dbReplication = currentDBObj["Replication"] || currentDBObj["Replication Strategy"] || "";
        var dbHA          = currentDBObj["High Availability"] || "";
        var dbStorage     = currentDBObj["Storage Engine"] || "";
        var dbQuery       = currentDBObj["Query Engine"] || "";
        var dbSecurity    = currentDBObj["Security, Access & Encryption"] || "";
        var dbLogoSrc     = (currentDBObj["Logo"] != null) ? String(currentDBObj["Logo"]).trim() : "";

        var dbValuesArray = [
            dbName, dbCategory, dbDescription, dbPaid, dbDeploy, dbType, dbWorkload, 
            dbArch, dbAnsiSql, dbUdf, dbEtl, dbProcessing, 
            db4gl, dbRest, dbRole, dbIndexing, dbPartition, 
            dbSharding, dbConflict, dbReplication, dbHA, 
            dbStorage, dbQuery, dbSecurity
        ];

//
// 0. CREATING SEO META TAGS DYNAMICALLY
//

        // =========================================================================
        // AUTOMATED SEO ENGINE INJECTION (Inside Loop 2)
        // =========================================================================
        
        // 0.1. Dynamic Meta Description Injection
        // Generates a rich, search-engine-friendly summary using your JSON matrix fields
        var metaDescriptionText = "Explore the engineering core of " + dbName + ". Detailed architectural insights covering its " + dbType + " design, " + dbWorkload + " optimization, " + dbPartition + ", and specialized " + dbIndexing + ".";
        
        var metaDescElement = document.createElement('meta');
        metaDescElement.setAttribute('name', 'description');
        metaDescElement.setAttribute('content', metaDescriptionText);
        document.head.appendChild(metaDescElement);

        // 0.2. Open Graph (OG) Tags for Premium LinkedIn / Social Sharing Layouts
        var ogTitleElement = document.createElement('meta');
        ogTitleElement.setAttribute('property', 'og:title');
        ogTitleElement.setAttribute('content', dbName + " Deep-Dive Architecture Profile | Hapslab");
        document.head.appendChild(ogTitleElement);

        var ogDescElement = document.createElement('meta');
        ogDescElement.setAttribute('property', 'og:description');
        ogDescElement.setAttribute('content', dbDescription || metaDescriptionText);
        document.head.appendChild(ogDescElement);

        var ogTypeElement = document.createElement('meta');
        ogTypeElement.setAttribute('property', 'og:type');
        ogTypeElement.setAttribute('content', 'article');
        document.head.appendChild(ogTypeElement);

        // 0.3. Dynamic Technical Keywords Array Mapping
        var metaKeywordsElement = document.createElement('meta');
        metaKeywordsElement.setAttribute('name', 'keywords');
        metaKeywordsElement.setAttribute('content', dbName + ", " + dbCategory + ", " + dbType + ", Database Architecture, Data Engineering, " + dbWorkload + ", Hapslab");
        document.head.appendChild(metaKeywordsElement);


        // 1. TITLE INJECTION
        var headerElement = document.createElement('h2');
        headerElement.classList.add("trends-blogs-header"); 
        var headerNodeText = document.createTextNode(dbName);
        headerElement.appendChild(headerNodeText);
        document.getElementsByClassName("trends-blogspage-container")[0].appendChild(headerElement);

        // 2. CATEGORY INJECTION
        var categoryElement = document.createElement('h5');
        categoryElement.classList.add("trends-blogs-category"); 
        var categoryNodeText = document.createTextNode("Category: "+dbCategory);
        categoryElement.appendChild(categoryNodeText);
        document.getElementsByClassName("trends-blogspage-container")[0].appendChild(categoryElement);

        // 3. DESCRIPTION INJECTION
        var descriptionElement = document.createElement('h3');
        descriptionElement.classList.add("trends-blogs-description"); 
        var descriptionNodeText = document.createTextNode(dbDescription);
        descriptionElement.appendChild(descriptionNodeText);
        document.getElementsByClassName("trends-blogspage-container")[0].appendChild(descriptionElement);

        // 4. GEOMETRIC LOGO GENERATOR ENGINE
        var logoWrapperDiv = document.createElement('div');
        logoWrapperDiv.style.textAlign = "center";
        logoWrapperDiv.style.marginTop = "2vh";
        logoWrapperDiv.style.marginBottom = "0vh";

        var genericLogoCircle = document.createElement('div');
        genericLogoCircle.style.width = "48px";
        genericLogoCircle.style.height = "48px";
        genericLogoCircle.style.borderRadius = "50%";
        genericLogoCircle.style.display = "flex";
        genericLogoCircle.style.alignItems = "center";
        genericLogoCircle.style.justifyContent = "center";
        genericLogoCircle.style.marginLeft = "auto";
        genericLogoCircle.style.marginRight = "auto";
        genericLogoCircle.style.fontWeight = "bold";
        genericLogoCircle.style.fontSize = "16px";
        genericLogoCircle.style.fontFamily = "Arial, sans-serif";
        genericLogoCircle.style.color = "#ffffff";
        genericLogoCircle.style.boxShadow = "0 2px 5px rgba(0,0,0,0.15)";

        var textToken = dbName.replace(/[^a-zA-Z]/g, "").substring(0, 2).toUpperCase();
        genericLogoCircle.appendChild(document.createTextNode(textToken));

        var colorPalette = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#e67e22", "#e74c3c", "#2c3e50"];
        var charCodeSum = (dbName.charCodeAt(0) || 0) + (dbName.charCodeAt(1) || 0) + (dbName.charCodeAt(2) || 1);
        var chosenColor = colorPalette[charCodeSum % colorPalette.length];
        genericLogoCircle.style.backgroundColor = chosenColor;

        logoWrapperDiv.appendChild(genericLogoCircle);
        document.getElementsByClassName("trends-blogspage-container")[0].appendChild(logoWrapperDiv);

        // 5. STORAGE INNER CONTAINER LAYOUT HOOK
        var tableContainerDiv = document.createElement('div');
        tableContainerDiv.classList.add("trends-blogpage-container"); 
        document.getElementsByClassName("trends-blogspage-container")[0].appendChild(tableContainerDiv);

        var m1AnchorID;
        const m2AnchorID = dbName.split(" ");
        if (m2AnchorID.length > 2) {
            m1AnchorID = m2AnchorID[1]+m2AnchorID[2];
        }
        else {
            m1AnchorID = m2AnchorID[1];
        }
        var dbTableAnchorID = "db-profile-" + m1AnchorID.toLowerCase();


        // 6. MATRIX TABLE CONSTRUCT
        var nativeTable = document.createElement('table');
        nativeTable.classList.add("trends-blogpage-table-wrapper"); 
        // Assign the generated anchor identifier as the table ID (Without the '#' symbol)
        nativeTable.id = dbTableAnchorID;
        nativeTable.style.borderCollapse = "collapse"; 
        nativeTable.style.width = "100%";
        nativeTable.style.marginBottom = "25px";

        var tableHead = document.createElement('thead');
        var headerRow = document.createElement('tr');
        
        // JAVASCRIPT FIRST ROW VERDANA SELECTOR LOOKUP DESIGN
        headerRow.style.fontFamily = "Verdana, Geneva, sans-serif";
        headerRow.style.fontWeight = "bold";
        headerRow.style.color = "Navy"; /* FIXED: Capital C fixed to lower color */
      
        var th1 = document.createElement('th');
        th1.appendChild(document.createTextNode("Feature Parameter"));
        th1.style.width = "21%";
         
        var th2 = document.createElement('th');
        th2.appendChild(document.createTextNode("Database Architectural Details"));

// 🌟 THE CORRECTION: Force the 16px font sizing directly onto the <th> cells
        th1.style.setProperty('font-size', '14px', 'important');
        th2.style.setProperty('font-size', '14px', 'important');
        
        headerRow.appendChild(th1);
        headerRow.appendChild(th2);
        tableHead.appendChild(headerRow);
        nativeTable.appendChild(tableHead);

        var tableBody = document.createElement('tbody');

        var fieldIdx;
        for (fieldIdx = 0; fieldIdx < targetLabels.length; fieldIdx++) 
        {
            var dataRow = document.createElement('tr');

            var cellLabel = document.createElement('td');
            cellLabel.style.fontFamily = "Verdana, Geneva, sans-serif";
            cellLabel.style.fontSize = "10px";
            cellLabel.style.fontWeight = "bold";
            cellLabel.style.backgroundColor = "#f0f2f5"; 
            cellLabel.style.textAlign = "left";      
            cellLabel.style.verticalAlign = "middle";  
            
            cellLabel.appendChild(document.createTextNode(targetLabels[fieldIdx]));
            dataRow.appendChild(cellLabel);

            var cellValue = document.createElement('td');
            cellValue.style.fontFamily = "Verdana, Geneva, sans-serif";
            cellValue.style.fontSize = "12px";
            cellValue.style.lineHeight = "1.4";
            cellValue.innerHTML = dbValuesArray[fieldIdx]; 
            
            dataRow.appendChild(cellValue);
            tableBody.appendChild(dataRow);
        }

        nativeTable.appendChild(tableBody);
        document.getElementsByClassName("trends-blogpage-container")[loopIdx].appendChild(nativeTable);
        loopIdx = loopIdx + 1; 

// =========================================================================
// PREMIUM CLICK-TO-ENLARGE LIGHTBOX ENGINE
// =========================================================================
setTimeout(function() {
    var heroImage = document.getElementById('database-landscape-hero');
    if (!heroImage) return;

    heroImage.onclick = function() {
        // Create full screen overlay wrapper element bounds
        var overlay = document.createElement('div');
        overlay.className = 'db-lightbox-overlay';
        
        // Clone the source image directly to maximize resolution properties
        var enlargedImg = document.createElement('img');
        enlargedImg.src = heroImage.src;
        
        overlay.appendChild(enlargedImg);
        document.body.appendChild(overlay);
        
        // Trigger smooth fade-in transition profile animations
        setTimeout(function() { overlay.style.opacity = '1'; }, 10);
        
        // Click anywhere on the overlay screen space to instantly dismiss it
        overlay.onclick = function() {
            overlay.style.opacity = '0';
            setTimeout(function() { document.body.removeChild(overlay); }, 300);
        };
    };
}, 100);

    }
}

/**
 * File Loader Hook function matching your exact execution pattern framework profiles
 */
function ReadShowDatabaseBlogPageJSONFile(inputDatabaseArray) 
{
    if (typeof(inputDatabaseArray) === 'object') 
    {
        showDatabaseTechJSONArray = inputDatabaseArray;
    } 
    else 
    {
        window.alert("ERROR: Input configuration data is not a valid data object matrix array");
    }
}

            
function HapslabPixPartitionBlogsStart()
{
/*
             blogpageDiv.innerHTML = ptitle;
             window.alert(pname + "::  " + ptitle + "  ::" + pauthor);
*/


         var bp_header_prev = "";
         var bp_header_curr = "";
         var bp_picIDX;
         var loopIdx = 0;    // Used to add images with a continuous index array
         var  picBlogsArrayLen = showPictureBlogsJSONArray.length;

         // window.alert("Pix: " + picBlogsArrayLen );

         for (bp_picIDX = 0; bp_picIDX < picBlogsArrayLen; bp_picIDX++)
         {
             var ls_picIDX     = parseInt(bp_picIDX);
             var pname         = showPictureBlogsJSONArray[bp_picIDX].name;
             var pheader       = showPictureBlogsJSONArray[bp_picIDX].header;
             var ptitle            = showPictureBlogsJSONArray[bp_picIDX].title;
             var pdesc           = showPictureBlogsJSONArray[bp_picIDX].desc;
             var pcreatedate  = showPictureBlogsJSONArray[bp_picIDX].createdate;
             var pmodifydate  = showPictureBlogsJSONArray[bp_picIDX].modifydate;
             var pcategory    = showPictureBlogsJSONArray[bp_picIDX].category;
             var psubcategory = showPictureBlogsJSONArray[bp_picIDX].subcategory;
             var pblogyn      = showPictureBlogsJSONArray[bp_picIDX].blogyn;
             var pblogpage    = showPictureBlogsJSONArray[bp_picIDX].blogpage;
             var pauthor      = showPictureBlogsJSONArray[bp_picIDX].author;

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

//
// STOPPED 22:18 24-11-2020 for dynamic blog page   
//
//            if ( (pblogyn3 == 'y') && (pblogpage.length > 6) && (pfilextn == '.html') )
//            {

                //#######################################
                // Blogpage: HEADER / PARTITION
                // Create a new header only when the header
                // value changes from the previous blog record.
                //#######################################

                bp_header_curr = (pheader == null) ? "" : String(pheader).trim();

                if (bp_header_curr != "" && bp_header_curr != bp_header_prev)
                {
                    var blogHeaderDiv = document.createElement('h1');
                    blogHeaderDiv.classList.add("trends-blogs-header");

                    var blogHeaderNode = document.createTextNode(bp_header_curr);
                    blogHeaderDiv.appendChild(blogHeaderNode);

                    document.getElementsByClassName("trends-blogspage-container")[0].appendChild(blogHeaderDiv);

                    bp_header_prev = bp_header_curr;
                }

                var blogpageDiv = document.createElement('div');
                blogpageDiv.id = "trends-blogpage-containerid";
                var blogpageClass = document.createAttribute("class");
                blogpageClass.value = "trends-blogpage-container";
                blogpageDiv.classList.add("trends-blogpage-container");
                     document.getElementsByClassName("trends-blogspage-container")[0].appendChild(blogpageDiv); 

                var parent0 = this.parentNode;
   		var aTag0 = document.createElement('a');
   		aTag0.id  = "trends-blogpage-atagid";
   		var aTag0Class = document.createAttribute("class");
                aTag0Class.value = "trends-blogpage-atag";
                aTag0.href = pblogpage;
//                var aTag0node = document.createTextNode("");
//                aTag0.appendChild(aTag0node);
//                document.getElementsByClassName("trends-blogpage-container")[loopIdx].appendChild(aTag0);


// s -> 0; nos -> loopIdx
               //#######################################          
               // Blogpage: Image
               //#######################################

   		var imgTag0 = document.createElement('img');
                imgTag0.id = "trends-blogpage-imgid";
   		var imgTag0Class = document.createAttribute("class");
   		imgTag0Class.value = "trends-blogpage-img";
   		imgTag0.classList.add("trends-blogpage-img");
//   		imgTag0.setAttribute("src",    pname);
    		imgTag0.src =   pname;
//   		document.getElementsById("trends-blogpage-container")[loopIdx].appendChild(imgTag0);
//   		document.getElementsById("trends-blogpage-atagid")[loopIdx].appendChild(imgTag0);

                aTag0.appendChild(imgTag0);
                document.getElementsByClassName("trends-blogpage-container")[loopIdx].appendChild(aTag0);

//   var list = document.getElementById("myList");
//   list.insertBefore(newItem, list.childNodes[0]);
//   		parent0.parentNode.insertBefore(aTag0, parent0.nextSibling);



// WORKING with side URL
//   		document.getElementsByClassName("trends-blogpage-container")[loopIdx].appendChild(imgContainerDiv);



// WORKING with side url
//              document.getElementsByClassName("trends-blogpage-container")[loopIdx].appendChild(atag0);





   /*
   		var atag0 = document.createElement('a');
   		var atag0Class = document.createAttribute("class");
                atag0Class.value = "trends-blogpage-atag";
                atag0.href = pblogpage;
                document.getElementsByClassName("trends-blogpage-container")[loopIdx].appendChild(atag0);

   document.body.style.backgroundImage = "url('img_tree.png')"; 
            var picURL      = "url(" + showPictureJSONArray[picIDX].name + ")";
            document.getElementById("display-picture-id").style.backgroundImage = picURL;

   		imgContainerDiv.setAttribute("width",  "35vw");
   		imgContainerDiv.setAttribute("height", "30vh");
   */



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
                descDiv.innerHTML = pdesc;
   		     document.getElementsByClassName("trends-blogpage-text-container")[loopIdx].appendChild(descDiv); 

                loopIdx = loopIdx + 1;

//
// STOPPED 22:18 24-11-2020 for dynamic blog page   
//
//            } // if statement
         }
}


function capitalizeFirstLetter(string)
{
         return string.charAt(0).toUpperCase() + string.slice(1);
}

function ReadShowDynamicBlogPageJSONFile(picBlogsArray)
{
// ReadshowPictureBlogsJSONFile is the name of JSON object in file showPicture.js
// The typeof operator, when used on an array, returns object.

         if (isanArray(picBlogsArray))
         {
            showPictureBlogsJSONArray = picBlogsArray.sort();
         }
         else
         {
            window.alert("ERROR: Not an array");
         }
/*
         var arrLen = showPictureBlogsJSONArray.length;
         window.alert("arrLen: " + arrLen);
         window.alert(showPictureBlogsJSONArray[2].name + ",  " 
                       + showPictureBlogsJSONArray[2].title + ",  "
                       + showPictureBlogsJSONArray[2].author);
*/
}


function ReadShowPartitionBlogPageJSONFile(picBlogsArray)
{
// ReadshowPictureBlogsJSONFile is the name of JSON object in file showPicture.js
// The typeof operator, when used on an array, returns object.

         if (isanArray(picBlogsArray))
         {
            showPictureBlogsJSONArray = picBlogsArray.sort();
         }
         else
         {
            window.alert("ERROR: Not an array");
         }
/*
         var arrLen = showPictureBlogsJSONArray.length;
         window.alert("arrLen: " + arrLen);
         window.alert(showPictureBlogsJSONArray[2].name + ",  " 
                       + showPictureBlogsJSONArray[2].title + ",  "
                       + showPictureBlogsJSONArray[2].author);
*/
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
            window.alert("ERROR: Not an array");
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

