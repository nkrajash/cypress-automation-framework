describe("Test DatePicker via WebDriver University", () => {
    //it.only runs that single test case only.
    it("Select Date,FutureDate and PrevDate from DatePicker", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        //Use Jquery to remove  the target attribute to click on the child tab from parent tab.
        //It opens the child tab in the same browser instead of opening multiple tabs.
        //<a href="Datepicker/index.html" target="_blank" id="datepicker">
        cy.get("#datepicker").invoke('removeAttr', 'target').click({ force: true })
        //Click a DOM element without waiting for actionability.
        cy.get("#datepicker").click()
        let date = new Date()
        date.setDate(date.getDate())
        /** Gets the day-of-the-month, using local time.  i/e in  25/09/2021 --> 25 */
        cy.log(date.getDate()) //25
        cy.log(date.getMonth()) //8 - September (0-11) are the months
        cy.log(date.getFullYear()) //2021

        let date2 = new Date()
        date2.setDate(date.getDate() + 5)
        cy.log(date2.getDate()) //30


        var date3 = new Date()
        date3.setDate(date3.getDate() + 260)
        cy.log(date3.getDate()) //12

        var futureyr = date3.getFullYear()
        cy.log(futureyr) //2022
        var futuremon = date3.toLocaleString("default", { month: "long" })
        cy.log(futuremon) //June
        var futuredate = date3.getDate()
        cy.log(futuredate) //12

        function selectFutureMonthAndYear() {
            cy.get(".datepicker-dropdown").find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(futureyr)) {
                    cy.get(".next").first().click()
                    selectFutureMonthAndYear();
                }
            }).then(currentDate => {
                if (!currentDate.text().includes(futuremon)) {
                    cy.get(".next").first().click()
                    selectFutureMonthAndYear();
                }
            })
        }

        function selectFutureDay() {
            cy.get("[class='day']").contains(futuredate).first().click()
        }


        selectFutureMonthAndYear()
        selectFutureDay()
        cy.get("#datepicker").click()
        let date4 = new Date()
        date4.setDate(26) //26 - Day
        date4.setMonth(11) //11- December as (0-11) is the range
        date4.setFullYear(2022)
        var futureyr = date4.getFullYear()
        cy.log(futureyr) //2022
        var futuremon = date4.toLocaleString("default", { month: "long" })
        cy.log(futuremon) //December
        var futuredate = date4.getDate()
        cy.log(futuredate) //12

        selectFutureMonthAndYear()
        selectFutureDay()

        function selectPrevMonthAndYear() {
            cy.get(".datepicker-dropdown").find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(prevyr)) {
                    cy.get(".prev").first().click()
                    selectPrevMonthAndYear();
                }
            }).then(currentDate => {
                if (!currentDate.text().includes(prevmon)) {
                    cy.get(".prev").first().click()
                    selectPrevMonthAndYear();
                }
            })
        }

        function selectPrevDay() {
            cy.get("[class='day']").contains(prevdate).first().click()
        }

        cy.get("#datepicker").click()
        let date5 = new Date()
        date5.setDate(12) //12 - Day
        date5.setMonth(4) //4- May as (0-11) is the range
        date5.setFullYear(2021)
        var prevyr = date5.getFullYear()
        cy.log(prevyr) //2021
        var prevmon = date5.toLocaleString("default", { month: "long" })
        cy.log(prevmon) //May
        var prevdate = date5.getDate()
        cy.log(prevdate) //12

        selectPrevMonthAndYear()
        selectPrevDay()


    });

    it.only("Select BirthDate i.e. a special PrevDate from DatePicker", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        //Use Jquery to remove  the target attribute to click on the child tab from parent tab.
        //It opens the child tab in the same browser instead of opening multiple tabs.
        //<a href="Datepicker/index.html" target="_blank" id="datepicker">
        cy.get("#datepicker").invoke('removeAttr', 'target').click({ force: true })
        //Click a DOM element without waiting for actionability.

        function selectBirthDateMonthAndYear() {
            cy.get("#datepicker").click()
            cy.get(".datepicker-dropdown").find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(birthyr)) {
                    cy.get(".datepicker-dropdown").find('.datepicker-switch').first().click()
                    cy.get(".datepicker-months").find('.datepicker-switch').click()
                    cy.get(".datepicker-years").find(".year.active").prev().click()
                    cy.get(".datepicker-months").find(".month").contains(bmon).first().click()
                    cy.get("[class='day']").contains(birthdate).first().click()
                    selectBirthDateMonthAndYear()
                }
            })
        }

        let date6 = new Date()
        date6.setDate(3) //03 - Day
        date6.setMonth(1) //01- February as (0-11) is the range
        date6.setFullYear(2001)
        var birthyr = date6.getFullYear()
        cy.log(birthyr) //1992
        var birthmon = date6.toLocaleString("default", { month: "long" })
        cy.log(birthmon) //February
        var birthdate = date6.getDate()
        cy.log(birthdate) //03
        let bmon = birthmon.slice(0, 3)
        cy.log(bmon)
        selectBirthDateMonthAndYear()
    })

})