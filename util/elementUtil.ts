class ElememtUtil{

    public doClick(element) : void{
        element.waitForDisplayed()
        element.click()
    }

    public doSetValue(element, value): void{
        element.waitForDisplayed()
        element.setValue(value)
    }

    public doGetText(element): string{
        element.waitForDisplayed()
        return element.getText()
    }

    public doIsDisplayed(element):boolean{
        element.waitForDisplayed()
        return element.isDisplayed()
    }

    public doGetPageTitle(pageTitle):string{
        browser.waitUntil(function(){
            return (browser.getTitle() === pageTitle)
        }, 10000, 'title is not displayed after the given time'
    )
        return browser.getTitle()
    }



}


export {ElememtUtil}