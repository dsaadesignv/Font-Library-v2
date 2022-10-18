window.onload = function() {

    const container = document.getElementsByClassName("tiles-container")[0];
    const drawer = document.getElementsByClassName("drawer-container")[0];
    const top = document.getElementsByClassName("top-container")[0];
    const bottom = document.getElementsByClassName("bottom-container")[0];
    const onboarding = document.getElementsByClassName("onboarding-container")[0];

    const categories = document.getElementById("categories-wrapper");
    const languages = document.getElementById("languages-wrapper");
    const about = document.getElementById("about-wrapper");

    const style = document.getElementById("style-wrapper");
    const version = document.getElementById("version-wrapper");

    const toggleButton = document.getElementById("toggle-button");
    const sampleInput = document.getElementById("sample-input");
    const sizeSlider = document.getElementById("size-slider");

    const categoriesButton = document.getElementById("categories-button");
    const languagesButton = document.getElementById("languages-button");
    const aboutButton = document.getElementById("about-button");

    const styleButton = document.getElementById("style-button");
    const versionButton = document.getElementById("version-button");

    const categoriesFilterButtons = document.getElementById("categories-wrapper").childNodes;
    const languagesFilterButtons = document.getElementById("languages-wrapper").childNodes;

    const styleSettingsButtons = document.getElementById("style-wrapper").childNodes;
    const versionSettingsButtons = document.getElementById("version-wrapper").childNodes;

    const drawerCloseButton = document.getElementById("drawer-close-button");

    const closeOnboardingButton = document.getElementById("close-onboarding-button");

    // Grid tiles setings
    const defaultAmount = 600 // 2167
    const defaultSample = "F";

    function loadGridTiles(sample){
        if (sample.length == 0 || sample == ""){
            sample = defaultSample;
        }
        for (let i = 0; i < defaultAmount /*database.length*/; i++) {
            const item = database[Math.floor(Math.random()*database.length)];
            const tile = `<div class="tile" data-id="${i}" data-font="${item.font}" data-type="${item.type}" data-category="${item.category}" data-language="${item.language}"><div class="content" contenteditable="true" spellcheck="false">${sample}</div></div>`;
            container.insertAdjacentHTML('beforeend', tile);
        }
        toggleButton.innerText = "Order";
        initEvents();
    }

    // Writting and hovering events for tiles
    function initEvents(){

        let items = [].slice.call(document.getElementsByClassName("tile"));

        items.forEach(item => {

            // On focus on tile
            item.getElementsByClassName("content")[0].addEventListener("focus", function() {
                item.classList.add("edited");
                drawer.classList.add("open");
                container.classList.add("reduced");
                top.classList.add("hidden");
                bottom.classList.add("hidden")
            })
            
            // On focus out in tile
            item.getElementsByClassName("content")[0].addEventListener("blur", function() {
                item.classList.remove("edited");
                // drawer.classList.remove("open");
                // container.classList.remove("reduced");
                // top.classList.remove("hidden");
                // bottom.classList.remove("hidden")
            })
    
            // On input on tile
            item.addEventListener("input", function() {
    
                let value = item.innerText.trim();
    
                if (value.length == 0){
                    value = defaultSample;
                    item.innerText = defaultSample;
                }
    
                if (value.length > 1){
                    container.classList.remove("small");
                    container.classList.add("large");
                } else {
                    container.classList.remove("large");
                    container.classList.add("small");
                }
    
                items.forEach(element => {
                    let input = element.getElementsByClassName("content")[0];
                    
                    if (!element.classList.contains("edited")){
                        input.innerText = value;
                    }

                    if (value.length > 1){
                        sampleInput.value = value;
                    } else {
                        sampleInput.value = "";
                    }
                })
    
            }, false);
        });

        // sampleInput.addEventListener("focus", function() {
        //     sampleInput.classList.remove("shake");
        // })
        // sampleInput.addEventListener("blur", function() {
        //     sampleInput.classList.add("shake");
        // })

        // On input on textbox
        sampleInput.addEventListener("input", function() {
    
            let value = sampleInput.value;

            if (value.length == 0){
                value = "F";
            }

            if (value.length > 1){
                container.classList.remove("small");
                container.classList.add("large");
            } else {
                container.classList.remove("large");
                container.classList.add("small");
            }

            items.forEach(element => {
                let input = element.getElementsByClassName("content")[0];
                input.innerText = value;
            })

        }, false);
    }

    function shuffleTiles(){
        for (let i = container.children.length; i >= 0; i--) {
            container.appendChild(container.children[Math.random() * i | 0]);
        }
    }

    function sortTiles(){
        let tiles = [].slice.call(document.getElementsByClassName("tile"));
        let sorted = tiles.sort(sorter);

        function sorter(a, b) {
            return a.dataset.type.localeCompare(b.dataset.type);
        }

        sorted.forEach(item => container.appendChild(item));
    }

    function filterTiles(attribute, value) {
        let tiles = [].slice.call(document.getElementsByClassName("tile"));

        let filtered = [];
        tiles.forEach(item => {
            if (item.getAttribute(attribute) === value) {
                filtered.push(item)
            }
        });

        container.innerHTML = "";
        filtered.forEach(item => container.appendChild(item));
    }

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function updateRandomTile(){
        let items = [].slice.call(document.getElementsByClassName("tile"));
        const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "&", "$", "@", "#"]

        items.forEach(item => {
            let factor = randomIntFromInterval(1, 100);

            let input = item.getElementsByClassName("content")[0];
            if (factor == 5){
                if (!item.classList.contains("edited")){
                    input.innerText = letters[Math.floor(Math.random() * letters.length)];
                }
            }
        });
    }

    function updateAtInterval(){
        if (container.classList.contains("small") && !container.classList.contains("reduced") && sampleInput.value == "") {
            updateRandomTile();
        }
        
        let factor = randomIntFromInterval(100, 500);
        setTimeout(updateAtInterval, factor);
    }

    // Create tiles on load
    loadGridTiles(defaultSample);

    // Change randomly letters on tiles
    updateAtInterval();

    // Toggle between sorting and shuffling tiles
    toggleButton.addEventListener("click", function() {
        let value = toggleButton.innerText.trim();
        
        if (value == "Order"){
            toggleButton.innerText = "Shuffle";
            sortTiles();
        } else {
            toggleButton.innerText = "Order";
            shuffleTiles();
        }
    });

    sizeSlider.addEventListener("input", function() {
        let value = parseInt(sizeSlider.value);
        let width = 46 + value;
        let height = 72 + value;
        let size = 40 + value;

        document.querySelector(":root").style.setProperty('--tile-width', width+'px');
        document.querySelector(":root").style.setProperty('--tile-height', height+'px');
        document.querySelector(":root").style.setProperty('--tile-font-size', size+'px');
    });

    categoriesButton.addEventListener("click", function() {
        if (languages.classList.contains("open")) {
            languages.classList.remove("open");
            bottom.classList.remove("languages-open");
        }
        if (about.classList.contains("open")) {
            about.classList.remove("open");
            bottom.classList.remove("about-open");
        }
        if (categories.classList.contains("open")) {
            categories.classList.remove("open");
            bottom.classList.remove("categories-open");
        } else {
            categories.classList.add("open");
            bottom.classList.add("categories-open");
        }
    });

    languagesButton.addEventListener("click", function() {
        if (categories.classList.contains("open")) {
            categories.classList.remove("open");
            bottom.classList.remove("categories-open");
        }
        if (about.classList.contains("open")) {
            about.classList.remove("open");
            bottom.classList.remove("about-open");
        }
        if (languages.classList.contains("open")) {
            languages.classList.remove("open");
            bottom.classList.remove("languages-open");
        } else {
            languages.classList.add("open");
            bottom.classList.add("languages-open");
        }
    });

    aboutButton.addEventListener("click", function() {
        if (categories.classList.contains("open")) {
            categories.classList.remove("open");
            bottom.classList.remove("categories-open");
        }
        if (languages.classList.contains("open")) {
            languages.classList.remove("open");
            bottom.classList.remove("languages-open");
        }
        if (about.classList.contains("open")) {
            about.classList.remove("open");
            bottom.classList.remove("about-open");
        } else {
            about.classList.add("open");
            bottom.classList.add("about-open");
        }
    });

    categoriesFilterButtons.forEach(item => {
        item.addEventListener("click", function() {

            // if (item.classList.contains("on")){
            //     item.classList.remove("on");

            //     container.innerHTML = "";
            //     loadGridTiles();
            // } else {
            //     item.classList.add("on");

            //     let value = item.getAttribute("data-category");
            //     let attribute = "data-category";
            //     filterTiles(attribute, value);
            // }

            let filteredItems = categories.getElementsByClassName("on");

            if (item.classList.contains("on")){
                item.classList.remove("on");

                container.innerHTML = "";
                loadGridTiles(sampleInput.value);
                
            } else {
                if (filteredItems.length > 0){

                    for (let i = 0; i < filteredItems.length; i++) {
                        filteredItems[i].classList.remove("on");
                    }
                    container.innerHTML = "";
                    loadGridTiles(sampleInput.value);
                }

                item.classList.add("on");

                let value = item.getAttribute("data-category");
                let attribute = "data-category";
                filterTiles(attribute, value);
            }
        });
    });

    languagesFilterButtons.forEach(item => {
        item.addEventListener("click", function() {
            // if (item.classList.contains("on")){
            //     item.classList.remove("on");

            //     container.innerHTML = "";
            //     loadGridTiles();
            // } else {
            //     item.classList.add("on");

            //     let value = item.getAttribute("data-language");
            //     let attribute = "data-language";
            //     filterTiles(attribute, value);
            // }

            let filteredItems = languages.getElementsByClassName("on");

            if (item.classList.contains("on")){
                item.classList.remove("on");

                container.innerHTML = "";
                loadGridTiles(sampleInput.value);
                
            } else {
                if (filteredItems.length > 0){

                    for (let i = 0; i < filteredItems.length; i++) {
                        filteredItems[i].classList.remove("on");
                    }
                    container.innerHTML = "";
                    loadGridTiles(sampleInput.value);
                }

                item.classList.add("on");

                let value = item.getAttribute("data-language");
                let attribute = "data-language";
                filterTiles(attribute, value);
            }
        });
    });

    drawerCloseButton.addEventListener("click", function() {
        if (style.classList.contains("open")) {
            style.classList.remove("open");
            styleButton.classList.remove("open");
        }
        if (version.classList.contains("open")) {
            version.classList.remove("open");
            versionButton.classList.remove("open");
        }
        drawer.classList.remove("open");
        container.classList.remove("reduced");
        top.classList.remove("hidden");
        bottom.classList.remove("hidden")
    });

    styleButton.addEventListener("click", function() {
        if (version.classList.contains("open")) {
            version.classList.remove("open");
            versionButton.classList.remove("open");
        }
        if (style.classList.contains("open")) {
            style.classList.remove("open");
            styleButton.classList.remove("open");
        } else {
            style.classList.add("open");
            styleButton.classList.add("open");
        }
    });

    versionButton.addEventListener("click", function() {
        if (style.classList.contains("open")) {
            style.classList.remove("open");
            styleButton.classList.remove("open");
        }
        if (version.classList.contains("open")) {
            version.classList.remove("open");
            versionButton.classList.remove("open");
        } else {
            version.classList.add("open");
            versionButton.classList.add("open");
        }
    });

    styleSettingsButtons.forEach(item => {
        item.addEventListener("click", function() {

            let activeItems = style.getElementsByClassName("on");

            if (activeItems.length > 0){

                for (let i = 0; i < activeItems.length; i++) {
                    activeItems[i].classList.remove("on");
                }
            }

            item.classList.add("on");
            styleButton.innerText = item.innerHTML;
            styleButton.insertAdjacentHTML('beforeend', '<img src="img/chevron-up.svg" class="icon">')
        });
    });

    versionSettingsButtons.forEach(item => {
        item.addEventListener("click", function() {

            let activeItems = version.getElementsByClassName("on");

            if (activeItems.length > 0){

                for (let i = 0; i < activeItems.length; i++) {
                    activeItems[i].classList.remove("on");
                }
            }

            item.classList.add("on");
            versionButton.innerText = item.innerHTML;
            versionButton.insertAdjacentHTML('beforeend', '<img src="img/chevron-up.svg" class="icon">')
        });
    });

    closeOnboardingButton.addEventListener("click", function() {
        onboarding.classList.add("hidden");
        closeOnboardingButton.classList.add("hidden");
        bottom.classList.remove("hidden");
        top.classList.remove("hidden");
    });
}
