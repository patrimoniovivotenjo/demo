gdjs.noalcoholCode = {};
gdjs.noalcoholCode.localVariables = [];
gdjs.noalcoholCode.GDNewSpriteObjects1= [];
gdjs.noalcoholCode.GDNewSpriteObjects2= [];
gdjs.noalcoholCode.GDleftObjects1= [];
gdjs.noalcoholCode.GDleftObjects2= [];
gdjs.noalcoholCode.GDrightObjects1= [];
gdjs.noalcoholCode.GDrightObjects2= [];
gdjs.noalcoholCode.GDNewLightObjects1= [];
gdjs.noalcoholCode.GDNewLightObjects2= [];
gdjs.noalcoholCode.GDblanco2Objects1= [];
gdjs.noalcoholCode.GDblanco2Objects2= [];
gdjs.noalcoholCode.GDgamexObjects1= [];
gdjs.noalcoholCode.GDgamexObjects2= [];
gdjs.noalcoholCode.GDblanco3Objects1= [];
gdjs.noalcoholCode.GDblanco3Objects2= [];
gdjs.noalcoholCode.GDgamex2Objects1= [];
gdjs.noalcoholCode.GDgamex2Objects2= [];
gdjs.noalcoholCode.GDblanco4Objects1= [];
gdjs.noalcoholCode.GDblanco4Objects2= [];
gdjs.noalcoholCode.GDgamexpObjects1= [];
gdjs.noalcoholCode.GDgamexpObjects2= [];
gdjs.noalcoholCode.GDNewSprite2Objects1= [];
gdjs.noalcoholCode.GDNewSprite2Objects2= [];
gdjs.noalcoholCode.GDblanco5Objects1= [];
gdjs.noalcoholCode.GDblanco5Objects2= [];


gdjs.noalcoholCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.noalcoholCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("blanco2"), gdjs.noalcoholCode.GDblanco2Objects1);
gdjs.copyArray(runtimeScene.getObjects("blanco3"), gdjs.noalcoholCode.GDblanco3Objects1);
gdjs.copyArray(runtimeScene.getObjects("blanco4"), gdjs.noalcoholCode.GDblanco4Objects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.noalcoholCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.noalcoholCode.GDrightObjects1);
{for(var i = 0, len = gdjs.noalcoholCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.noalcoholCode.GDNewSpriteObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.noalcoholCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.noalcoholCode.GDleftObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}{for(var i = 0, len = gdjs.noalcoholCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.noalcoholCode.GDrightObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}{for(var i = 0, len = gdjs.noalcoholCode.GDblanco2Objects1.length ;i < len;++i) {
    gdjs.noalcoholCode.GDblanco2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.noalcoholCode.GDblanco3Objects1.length ;i < len;++i) {
    gdjs.noalcoholCode.GDblanco3Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.noalcoholCode.GDblanco4Objects1.length ;i < len;++i) {
    gdjs.noalcoholCode.GDblanco4Objects1[i].getBehavior("Opacity").setOpacity(150);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.noalcoholCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("blanco2"), gdjs.noalcoholCode.GDblanco2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.noalcoholCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.noalcoholCode.GDNewSpriteObjects1[i].getAnimationFrame() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.noalcoholCode.GDNewSpriteObjects1[k] = gdjs.noalcoholCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.noalcoholCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.noalcoholCode.GDblanco2Objects1.length;i<l;++i) {
    if ( gdjs.noalcoholCode.GDblanco2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.noalcoholCode.GDblanco2Objects1[k] = gdjs.noalcoholCode.GDblanco2Objects1[i];
        ++k;
    }
}
gdjs.noalcoholCode.GDblanco2Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.noalcoholCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.noalcoholCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.noalcoholCode.GDNewSpriteObjects1[i].setAnimationFrame(6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.noalcoholCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("blanco2"), gdjs.noalcoholCode.GDblanco2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.noalcoholCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.noalcoholCode.GDNewSpriteObjects1[i].getAnimationFrame() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.noalcoholCode.GDNewSpriteObjects1[k] = gdjs.noalcoholCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.noalcoholCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.noalcoholCode.GDblanco2Objects1.length;i<l;++i) {
    if ( gdjs.noalcoholCode.GDblanco2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.noalcoholCode.GDblanco2Objects1[k] = gdjs.noalcoholCode.GDblanco2Objects1[i];
        ++k;
    }
}
gdjs.noalcoholCode.GDblanco2Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.noalcoholCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.noalcoholCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.noalcoholCode.GDNewSpriteObjects1[i].setAnimationFrame(gdjs.noalcoholCode.GDNewSpriteObjects1[i].getAnimationFrame() - (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.noalcoholCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("blanco3"), gdjs.noalcoholCode.GDblanco3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.noalcoholCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.noalcoholCode.GDNewSpriteObjects1[i].getAnimationFrame() == 6 ) {
        isConditionTrue_0 = true;
        gdjs.noalcoholCode.GDNewSpriteObjects1[k] = gdjs.noalcoholCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.noalcoholCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.noalcoholCode.GDblanco3Objects1.length;i<l;++i) {
    if ( gdjs.noalcoholCode.GDblanco3Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.noalcoholCode.GDblanco3Objects1[k] = gdjs.noalcoholCode.GDblanco3Objects1[i];
        ++k;
    }
}
gdjs.noalcoholCode.GDblanco3Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.noalcoholCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.noalcoholCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.noalcoholCode.GDNewSpriteObjects1[i].setAnimationFrame(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.noalcoholCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("blanco3"), gdjs.noalcoholCode.GDblanco3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.noalcoholCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.noalcoholCode.GDNewSpriteObjects1[i].getAnimationFrame() < 6 ) {
        isConditionTrue_0 = true;
        gdjs.noalcoholCode.GDNewSpriteObjects1[k] = gdjs.noalcoholCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.noalcoholCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.noalcoholCode.GDblanco3Objects1.length;i<l;++i) {
    if ( gdjs.noalcoholCode.GDblanco3Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.noalcoholCode.GDblanco3Objects1[k] = gdjs.noalcoholCode.GDblanco3Objects1[i];
        ++k;
    }
}
gdjs.noalcoholCode.GDblanco3Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.noalcoholCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.noalcoholCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.noalcoholCode.GDNewSpriteObjects1[i].setAnimationFrame(gdjs.noalcoholCode.GDNewSpriteObjects1[i].getAnimationFrame() + (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("blanco4"), gdjs.noalcoholCode.GDblanco4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.noalcoholCode.GDblanco4Objects1.length;i<l;++i) {
    if ( gdjs.noalcoholCode.GDblanco4Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.noalcoholCode.GDblanco4Objects1[k] = gdjs.noalcoholCode.GDblanco4Objects1[i];
        ++k;
    }
}
gdjs.noalcoholCode.GDblanco4Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


};

gdjs.noalcoholCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.noalcoholCode.GDNewSpriteObjects1.length = 0;
gdjs.noalcoholCode.GDNewSpriteObjects2.length = 0;
gdjs.noalcoholCode.GDleftObjects1.length = 0;
gdjs.noalcoholCode.GDleftObjects2.length = 0;
gdjs.noalcoholCode.GDrightObjects1.length = 0;
gdjs.noalcoholCode.GDrightObjects2.length = 0;
gdjs.noalcoholCode.GDNewLightObjects1.length = 0;
gdjs.noalcoholCode.GDNewLightObjects2.length = 0;
gdjs.noalcoholCode.GDblanco2Objects1.length = 0;
gdjs.noalcoholCode.GDblanco2Objects2.length = 0;
gdjs.noalcoholCode.GDgamexObjects1.length = 0;
gdjs.noalcoholCode.GDgamexObjects2.length = 0;
gdjs.noalcoholCode.GDblanco3Objects1.length = 0;
gdjs.noalcoholCode.GDblanco3Objects2.length = 0;
gdjs.noalcoholCode.GDgamex2Objects1.length = 0;
gdjs.noalcoholCode.GDgamex2Objects2.length = 0;
gdjs.noalcoholCode.GDblanco4Objects1.length = 0;
gdjs.noalcoholCode.GDblanco4Objects2.length = 0;
gdjs.noalcoholCode.GDgamexpObjects1.length = 0;
gdjs.noalcoholCode.GDgamexpObjects2.length = 0;
gdjs.noalcoholCode.GDNewSprite2Objects1.length = 0;
gdjs.noalcoholCode.GDNewSprite2Objects2.length = 0;
gdjs.noalcoholCode.GDblanco5Objects1.length = 0;
gdjs.noalcoholCode.GDblanco5Objects2.length = 0;

gdjs.noalcoholCode.eventsList0(runtimeScene);

return;

}

gdjs['noalcoholCode'] = gdjs.noalcoholCode;
