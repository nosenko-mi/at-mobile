import { expect, $ } from '@wdio/globals'

describe('API Demos', function () {

    this.beforeEach(async function () {
        await driver.startActivity('io.appium.android.apis', 'ApiDemos')
    })

    it('Navigating to Accessibility should should forward user to correct screen', async function () {
        const accessibilityItem = await $("~Accessibility");

        await accessibilityItem.click()
        const item1 = await $("~Accessibility Node Provider");
        const item2 = await $("~Accessibility Node Querying");
        const item3 = await $("~Accessibility Service");
        const item4 = await $("~Custom View");

        expect(item1).toBeDisplayed()
        expect(item2).toBeDisplayed()
        expect(item3).toBeDisplayed()
        expect(item4).toBeDisplayed()
    })

    it('When button is clicked, view should flip', async function () {
        await $("~Animation").click();
        await $("~View Flip").click();

        const flipBtn = await $("~Flip");

        await flipBtn.click();

        const frItem = await $('//android.widget.TextView[@resource-id="android:id/text1" and @text="Un"]');
        expect(frItem.getText()).toHaveText("Un")

    })


    it('When Ukr is entered auto complition should show suggestion', async function () {
        await $("~Views").click(); // find by accessibility id
        await $('//android.widget.TextView[@content-desc="Auto Complete"]').click(); // find by xpath
        await $("~1. Screen Top").click(); // find by accessibility id
        const textView = await $("android.widget.AutoCompleteTextView"); // find by class name 
        await textView.click()
        
        await textView.sendKeys(["Ukr"])
        await textView.click()

        const suggestion = $('//android.widget.TextView[@text="Ukraine"]')
        
        expect(suggestion).toBeDisplayed()

    })

    it.only('Clicking on List dialog should show alert dialog with list of items', async function () {

        // skip straight to AlertDialogSamples
        await driver.startActivity('io.appium.android.apis', '.app.AlertDialogSamples') 
        
        await $("~List dialog").click()

        const alertTitle = await $("id=android:id/alertTitle") // find by id
        const alertListView = await $("android.widget.ListView") 

        expect(alertTitle.getText()).toHaveText("Header title")
        expect(alertListView).toBeDisplayed()
    })
})

