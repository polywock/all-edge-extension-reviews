javascript:(() => {

    const MAX_PER_REGION = 3;


    const markets = {
        AF: "Afghanistan",
        AL: "Albania",
        DZ: "Algeria",
        AS: "American Samoa",
        AD: "Andorra",
        AO: "Angola",
        AI: "Anguilla",
        AQ: "Antarctica",
        AG: "Antigua & Barbuda",
        AR: "Argentina",
        AM: "Armenia",
        AW: "Aruba",
        AU: "Australia",
        AT: "Austria",
        AZ: "Azerbaijan",
        BS: "Bahamas",
        BH: "Bahrain",
        BD: "Bangladesh",
        BB: "Barbados",
        BY: "Belarus",
        BE: "Belgium",
        BZ: "Belize",
        BJ: "Benin",
        BM: "Bermuda",
        BT: "Bhutan",
        BO: "Bolivia",
        BQ: "Bonaire, Sint Eustatius and Saba",
        BA: "Bosnia & Herzegovina",
        BW: "Botswana",
        BV: "Bouvet Island",
        BR: "Brazil",
        IO: "British Indian Ocean Territory",
        VG: "British Virgin Islands",
        BN: "Brunei",
        BG: "Bulgaria",
        BF: "Burkina Faso",
        BI: "Burundi",
        CV: "Cabo Verde",
        KH: "Cambodia",
        CM: "Cameroon",
        CA: "Canada",
        KY: "Cayman Islands",
        CF: "Central African Republic",
        TD: "Chad",
        CL: "Chile",
        CN: "China",
        CX: "Christmas Island",
        CC: "Cocos (Keeling) Islands",
        CO: "Colombia",
        KM: "Comoros",
        CG: "Congo",
        CD: "Congo (DRC)",
        CK: "Cook Islands",
        CR: "Costa Rica",
        HR: "Croatia",
        CW: "Curaçao",
        CY: "Cyprus",
        CZ: "Czechia",
        CI: "Côte d’Ivoire",
        DK: "Denmark",
        DJ: "Djibouti",
        DM: "Dominica",
        DO: "Dominican Republic",
        EC: "Ecuador",
        EG: "Egypt",
        SV: "El Salvador",
        GQ: "Equatorial Guinea",
        ER: "Eritrea",
        EE: "Estonia",
        SZ: "Eswatini",
        ET: "Ethiopia",
        FK: "Falkland Islands",
        FO: "Faroe Islands",
        FJ: "Fiji",
        FI: "Finland",
        FR: "France",
        GF: "French Guiana",
        PF: "French Polynesia",
        TF: "French Southern Territories",
        GA: "Gabon",
        GM: "Gambia",
        GE: "Georgia",
        DE: "Germany",
        GH: "Ghana",
        GI: "Gibraltar",
        GR: "Greece",
        GL: "Greenland",
        GD: "Grenada",
        GP: "Guadeloupe",
        GU: "Guam",
        GT: "Guatemala",
        GG: "Guernsey",
        GN: "Guinea",
        GW: "Guinea-Bissau",
        GY: "Guyana",
        HT: "Haiti",
        HM: "Heard & McDonald Islands",
        HN: "Honduras",
        HK: "Hong Kong SAR",
        HU: "Hungary",
        IS: "Iceland",
        IN: "India",
        ID: "Indonesia",
        IQ: "Iraq",
        IE: "Ireland",
        IM: "Isle of Man",
        IL: "Israel",
        IT: "Italy",
        JM: "Jamaica",
        JP: "Japan",
        JE: "Jersey",
        JO: "Jordan",
        KZ: "Kazakhstan",
        KE: "Kenya",
        KI: "Kiribati",
        KR: "Korea",
        KW: "Kuwait",
        KG: "Kyrgyzstan",
        LA: "Laos",
        LV: "Latvia",
        LB: "Lebanon",
        LS: "Lesotho",
        LR: "Liberia",
        LY: "Libya",
        LI: "Liechtenstein",
        LT: "Lithuania",
        LU: "Luxembourg",
        MO: "Macao SAR",
        MG: "Madagascar",
        MW: "Malawi",
        MY: "Malaysia",
        MV: "Maldives",
        ML: "Mali",
        MT: "Malta",
        MH: "Marshall Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MU: "Mauritius",
        YT: "Mayotte",
        MX: "Mexico",
        FM: "Micronesia",
        MD: "Moldova",
        MC: "Monaco",
        MN: "Mongolia",
        ME: "Montenegro",
        MS: "Montserrat",
        MA: "Morocco",
        MZ: "Mozambique",
        MM: "Myanmar",
        NA: "Namibia",
        NR: "Nauru",
        NP: "Nepal",
        NL: "Netherlands",
        NC: "New Caledonia",
        NZ: "New Zealand",
        NI: "Nicaragua",
        NE: "Niger",
        NG: "Nigeria",
        NU: "Niue",
        NF: "Norfolk Island",
        MK: "North Macedonia",
        MP: "Northern Mariana Islands",
        NO: "Norway",
        OM: "Oman",
        PK: "Pakistan",
        PW: "Palau",
        PS: "Palestinian Authority",
        PA: "Panama",
        PG: "Papua New Guinea",
        PY: "Paraguay",
        PE: "Peru",
        PH: "Philippines",
        PN: "Pitcairn Islands",
        PL: "Poland",
        PT: "Portugal",
        QA: "Qatar",
        RO: "Romania",
        RU: "Russia",
        RW: "Rwanda",
        RE: "Réunion",
        WS: "Samoa",
        SM: "San Marino",
        SA: "Saudi Arabia",
        SN: "Senegal",
        RS: "Serbia",
        SC: "Seychelles",
        SL: "Sierra Leone",
        SG: "Singapore",
        SX: "Sint Maarten",
        SK: "Slovakia",
        SI: "Slovenia",
        SB: "Solomon Islands",
        SO: "Somalia",
        ZA: "South Africa",
        GS: "South Georgia & South Sandwich Islands",
        ES: "Spain",
        LK: "Sri Lanka",
        SH: "St Helena, Ascension, Tristan da Cunha",
        BL: "St. Barthélemy",
        KN: "St. Kitts & Nevis",
        LC: "St. Lucia",
        MF: "St. Martin",
        PM: "St. Pierre & Miquelon",
        VC: "St. Vincent & Grenadines",
        SR: "Suriname",
        SJ: "Svalbard & Jan Mayen",
        SE: "Sweden",
        CH: "Switzerland",
        ST: "São Tomé & Príncipe",
        TW: "Taiwan",
        TJ: "Tajikistan",
        TZ: "Tanzania",
        TH: "Thailand",
        TL: "Timor-Leste",
        TG: "Togo",
        TK: "Tokelau",
        TO: "Tonga",
        TT: "Trinidad & Tobago",
        TN: "Tunisia",
        TR: "Turkey",
        TM: "Turkmenistan",
        TC: "Turks & Caicos Islands",
        TV: "Tuvalu",
        UM: "U.S. Outlying Islands",
        VI: "U.S. Virgin Islands",
        UG: "Uganda",
        UA: "Ukraine",
        AE: "United Arab Emirates",
        GB: "United Kingdom",
        US: "United States",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VU: "Vanuatu",
        VA: "Vatican City",
        VE: "Venezuela",
        VN: "Vietnam",
        WF: "Wallis & Futuna",
        YE: "Yemen",
        ZM: "Zambia",
        ZW: "Zimbabwe",
        AX: "Åland Islands"
    };
	
	
	let regionKeys = Object.keys(markets);
    let productId; 
    let crxId; 
    let reviews = [];
    let wrapper; 
    let lang; 
    let indicator;
    let title;

    const ensureCrxId = () => {
        let url = document.querySelector("#ReportAbuseButton")?.href;
        if (!url) throw Error("no CRX id found.");
        const arr = url.split("?")[0].split("/");
        const id = arr[arr.length - 1];
        if (id?.length === 32) {
            crxId = id; 
        } else {
            throw Error("no CRX id found");
        };
    }; 
    const ensureLang = () => {
        let url = new URL(document.URL);
        lang = url.searchParams.get("hl") || null;
    };

    const ensureProductId = async () => {
        ensureCrxId();
        const resp = await fetch(`https://microsoftedge.microsoft.com/addons/getproductdetailsbycrxid/${crxId}`);
        if (resp.status !== 200) throw new Error("non 200 response");
        productId = (await resp.json()).storeProductId;
        if (!productId) throw Error("No product id.");
    };

    const getReviews = async (region, size = 25, skip = 0) => {
        const url = encodeURI(`https://ratingsedge.rnr.microsoft.com/v1.0/ratingsedge/product/${productId}?catalogId=1&market=${region}&callSiteId=3&pageSize=${size}&orderBy=1&skipItems=${skip}`);
        return fetch(url).then(v => v.json()).then(v => {
            const token = v.PagingInfo?.ContinuationToken;
            let skipCount;
            if (token) {
                try {
                    skipCount = JSON.parse(atob(token.slice(0, -6)))?.t?.si;
                } catch (err) {}
            }
            return {
                skipCount,
                reviews: v.Items.map(v => ({
                    user: v.UserName,
                    market: v.Market,
                    rating: v.Rating,
                    date: new Date(v.SubmittedDateTime),
                    text: v.ReviewText,
                    id: v.ReviewId
                }))
            };
        });
    };

    const timeout = (ms) => {
        return new Promise((res, rej) => {
            setTimeout(() => res(), ms);
        });
    };

    const createReview = (v) => {
        let wrapper = document.createElement("div");
        wrapper.style.padding = "5px";
        wrapper.style.marginBottom = "15px";

        let header = document.createElement("p");
        header.style.fontWeight = "bold";
        header.textContent = `${v.user} - ${v.rating} stars`;

        let meta = document.createElement("a");
        meta.style.fontSize = "0.85em";
        meta.style.marginLeft = "10px";
        meta.textContent = `${markets[v.market.toUpperCase()]} - ${v.date?.toDateString()}`;
        meta.href = `https://microsoftedge.microsoft.com/addons/detail/global-speed/${crxId}?gl=${v.market}&ksft=${Math.round(Math.random() * 1E9).toString()}&${!lang ? "" : `&hl=${lang}`}`;

        let text = document.createElement("span");
        text.textContent = v.text;
        meta.style.textDecoration = "none";
        header.appendChild(meta);
        wrapper.appendChild(header);
        wrapper.appendChild(text);
        return wrapper;
    };

    const createWrapper = () => {
        wrapper = document.createElement("div");
        wrapper.style.width = "500px";
        wrapper.style.padding = "150px";
    };

    const attachWrapper = () => {
        if (!wrapper) throw Error("No wrapper.");
        document.body.innerHTML = "";
        document.body.appendChild(wrapper);
    };

    const appendWrapper = review => {
        const d = createReview(review);
        wrapper.appendChild(d);
    };

    const showAverageReviews = reviews => {
        const d = document.createElement("div");
        d.style.marginTop = "50px";
        d.style.fontSize = "1.1em";
        

        let reviewsMap = reviews.reduce((agg, v) => {
            const arr = agg[v.market] || [];
            agg[v.market] = arr; 
            arr.push(v);
            return agg; 
        }, {});

        let avgs = Object.values(reviewsMap).map(arr => {
            let sum = arr.reduce((agg, v) => agg + v.rating, 0);
            let avg = sum / arr.length;

            return {avg, sum, count: arr.length, name: markets[arr[0].market]};
        });

        avgs.sort((a, b) => b.count - a.count);

        const h4 = document.createElement("h4");
        h4.textContent = `Average market rating - ${(avgs.reduce((agg, v) => agg + v.sum, 0) / reviews.length).toFixed(2)} - ${reviews.length} reviews`;
        d.appendChild(h4);

        avgs.forEach(market => {
            let sub = document.createElement("div");
            sub.style.marginTop = "10px";
            sub.textContent = `${market.name}: ${market.avg.toFixed(2)} (${market.count} reviews)`;
            d.appendChild(sub);
        });
        wrapper.appendChild(d);
    };

    const createIndicator = () => {
        indicator = document.createElement("div");
        indicator.setAttribute("style", `position: fixed; left: 10px; top: 10px; padding: 10px 30px; background-color: black; opacity: 0.8; font-size: 25px; z-index: 999999; color: white;`);
        document.documentElement.appendChild(indicator);
    };

    const showIndicator = (text) => {
        indicator || createIndicator(); 
        if (!text) {
            indicator.style.display = "none";
        } else {
            if (indicator.style.display !== "block") {
                indicator.style.display = "block";
            }
        }
        indicator.textContent = text;
    };

    const showTitle = text => {
        title = title || document.querySelector("title") || document.createElement("title");
        title.textContent = text; 
        if (title.parentElement !== document.head) {
            document.head.appendChild(title);
        }
    };


    ensureProductId().then(async () => {
        ensureLang();
        createWrapper();
        attachWrapper();

        for (let locale of regionKeys) {
            /*if (locale === "AT") break;*/
            let requestCount = 0;
            let skipCount = 0; 
            while (true) {
                await timeout(100);
                const results = await getReviews(locale, 25, skipCount);
                requestCount++;
                results.reviews.forEach(v => {
                    if (!reviews.some(k => k.id === v.id)) {
                        reviews.push(v);

                        appendWrapper(v);
                    };
                });
                console.log(results.skipCount);
                if (results.skipCount && requestCount < MAX_PER_REGION) {
                    skipCount = results.skipCount;
                } else {
                    break;
                };
            };
            
            const progress = `${regionKeys.indexOf(locale) + 1} / ${regionKeys.length}  (${reviews.length})`;
            showIndicator(progress);
            showTitle(progress);
        };

        showTitle(`${reviews.length} reviews`);
        showIndicator(null);

        if (confirm("Sorted by date? ")) {
            window.scrollTo(0, -10000);
            createWrapper();
            reviews.sort((a, b) => b.date - a.date);

            reviews.forEach(v => {
                appendWrapper(v);
            });

            attachWrapper(); 
            window.reviews = reviews;
            console.log(reviews);
        }
        showAverageReviews(reviews);
    }).catch(err => {
        alert(err);
    });
})();

