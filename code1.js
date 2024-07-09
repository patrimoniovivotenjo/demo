gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.GDNewSpriteObjects1= [];
gdjs.menuCode.GDNewSpriteObjects2= [];
gdjs.menuCode.GDblancoObjects1= [];
gdjs.menuCode.GDblancoObjects2= [];
gdjs.menuCode.GDgameObjects1= [];
gdjs.menuCode.GDgameObjects2= [];
gdjs.menuCode.GDcoctailObjects1= [];
gdjs.menuCode.GDcoctailObjects2= [];
gdjs.menuCode.GDcoctail2Objects1= [];
gdjs.menuCode.GDcoctail2Objects2= [];
gdjs.menuCode.GDNewSprite3Objects1= [];
gdjs.menuCode.GDNewSprite3Objects2= [];
gdjs.menuCode.GDgame2Objects1= [];
gdjs.menuCode.GDgame2Objects2= [];
gdjs.menuCode.GDgame3Objects1= [];
gdjs.menuCode.GDgame3Objects2= [];
gdjs.menuCode.GDgame4Objects1= [];
gdjs.menuCode.GDgame4Objects2= [];
gdjs.menuCode.GDNewLightObjects1= [];
gdjs.menuCode.GDNewLightObjects2= [];
gdjs.menuCode.GDblanco2Objects1= [];
gdjs.menuCode.GDblanco2Objects2= [];
gdjs.menuCode.GDgamexObjects1= [];
gdjs.menuCode.GDgamexObjects2= [];
gdjs.menuCode.GDblanco3Objects1= [];
gdjs.menuCode.GDblanco3Objects2= [];
gdjs.menuCode.GDgamex2Objects1= [];
gdjs.menuCode.GDgamex2Objects2= [];
gdjs.menuCode.GDblanco4Objects1= [];
gdjs.menuCode.GDblanco4Objects2= [];
gdjs.menuCode.GDgamexpObjects1= [];
gdjs.menuCode.GDgamexpObjects2= [];
gdjs.menuCode.GDNewSprite2Objects1= [];
gdjs.menuCode.GDNewSprite2Objects2= [];
gdjs.menuCode.GDblanco5Objects1= [];
gdjs.menuCode.GDblanco5Objects2= [];


gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDgameObjects1Objects = Hashtable.newFrom({"game": gdjs.menuCode.GDgameObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDcoctailObjects1Objects = Hashtable.newFrom({"coctail": gdjs.menuCode.GDcoctailObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDcoctail2Objects1Objects = Hashtable.newFrom({"coctail2": gdjs.menuCode.GDcoctail2Objects1});
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("blanco"), gdjs.menuCode.GDblancoObjects1);
{for(var i = 0, len = gdjs.menuCode.GDblancoObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDblancoObjects1[i].getBehavior("Opacity").setOpacity(80);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("game"), gdjs.menuCode.GDgameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDgameObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "juego", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("coctail"), gdjs.menuCode.GDcoctailObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDcoctailObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "alcohol", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("coctail2"), gdjs.menuCode.GDcoctail2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDcoctail2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "noalcohol", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.menuCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDNewSprite3Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDNewSprite3Objects1[k] = gdjs.menuCode.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs.menuCode.GDNewSprite3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.instagram.com/caribbeanmonkeycocktail/", runtimeScene);
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDNewSpriteObjects1.length = 0;
gdjs.menuCode.GDNewSpriteObjects2.length = 0;
gdjs.menuCode.GDblancoObjects1.length = 0;
gdjs.menuCode.GDblancoObjects2.length = 0;
gdjs.menuCode.GDgameObjects1.length = 0;
gdjs.menuCode.GDgameObjects2.length = 0;
gdjs.menuCode.GDcoctailObjects1.length = 0;
gdjs.menuCode.GDcoctailObjects2.length = 0;
gdjs.menuCode.GDcoctail2Objects1.length = 0;
gdjs.menuCode.GDcoctail2Objects2.length = 0;
gdjs.menuCode.GDNewSprite3Objects1.length = 0;
gdjs.menuCode.GDNewSprite3Objects2.length = 0;
gdjs.menuCode.GDgame2Objects1.length = 0;
gdjs.menuCode.GDgame2Objects2.length = 0;
gdjs.menuCode.GDgame3Objects1.length = 0;
gdjs.menuCode.GDgame3Objects2.length = 0;
gdjs.menuCode.GDgame4Objects1.length = 0;
gdjs.menuCode.GDgame4Objects2.length = 0;
gdjs.menuCode.GDNewLightObjects1.length = 0;
gdjs.menuCode.GDNewLightObjects2.length = 0;
gdjs.menuCode.GDblanco2Objects1.length = 0;
gdjs.menuCode.GDblanco2Objects2.length = 0;
gdjs.menuCode.GDgamexObjects1.length = 0;
gdjs.menuCode.GDgamexObjects2.length = 0;
gdjs.menuCode.GDblanco3Objects1.length = 0;
gdjs.menuCode.GDblanco3Objects2.length = 0;
gdjs.menuCode.GDgamex2Objects1.length = 0;
gdjs.menuCode.GDgamex2Objects2.length = 0;
gdjs.menuCode.GDblanco4Objects1.length = 0;
gdjs.menuCode.GDblanco4Objects2.length = 0;
gdjs.menuCode.GDgamexpObjects1.length = 0;
gdjs.menuCode.GDgamexpObjects2.length = 0;
gdjs.menuCode.GDNewSprite2Objects1.length = 0;
gdjs.menuCode.GDNewSprite2Objects2.length = 0;
gdjs.menuCode.GDblanco5Objects1.length = 0;
gdjs.menuCode.GDblanco5Objects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);

return;

}

gdjs['menuCode'] = gdjs.menuCode;
