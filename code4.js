gdjs.alcoholCode = {};
gdjs.alcoholCode.localVariables = [];
gdjs.alcoholCode.GDNewSpriteObjects1= [];
gdjs.alcoholCode.GDNewSpriteObjects2= [];
gdjs.alcoholCode.GDleftObjects1= [];
gdjs.alcoholCode.GDleftObjects2= [];
gdjs.alcoholCode.GDrightObjects1= [];
gdjs.alcoholCode.GDrightObjects2= [];
gdjs.alcoholCode.GDNewLightObjects1= [];
gdjs.alcoholCode.GDNewLightObjects2= [];
gdjs.alcoholCode.GDblanco2Objects1= [];
gdjs.alcoholCode.GDblanco2Objects2= [];
gdjs.alcoholCode.GDgamexObjects1= [];
gdjs.alcoholCode.GDgamexObjects2= [];
gdjs.alcoholCode.GDblanco3Objects1= [];
gdjs.alcoholCode.GDblanco3Objects2= [];
gdjs.alcoholCode.GDgamex2Objects1= [];
gdjs.alcoholCode.GDgamex2Objects2= [];
gdjs.alcoholCode.GDblanco4Objects1= [];
gdjs.alcoholCode.GDblanco4Objects2= [];
gdjs.alcoholCode.GDgamexpObjects1= [];
gdjs.alcoholCode.GDgamexpObjects2= [];
gdjs.alcoholCode.GDNewSprite2Objects1= [];
gdjs.alcoholCode.GDNewSprite2Objects2= [];
gdjs.alcoholCode.GDblanco5Objects1= [];
gdjs.alcoholCode.GDblanco5Objects2= [];


gdjs.alcoholCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.alcoholCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("blanco2"), gdjs.alcoholCode.GDblanco2Objects1);
gdjs.copyArray(runtimeScene.getObjects("blanco3"), gdjs.alcoholCode.GDblanco3Objects1);
gdjs.copyArray(runtimeScene.getObjects("blanco4"), gdjs.alcoholCode.GDblanco4Objects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.alcoholCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.alcoholCode.GDrightObjects1);
{for(var i = 0, len = gdjs.alcoholCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.alcoholCode.GDNewSpriteObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.alcoholCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.alcoholCode.GDleftObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}{for(var i = 0, len = gdjs.alcoholCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.alcoholCode.GDrightObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}{for(var i = 0, len = gdjs.alcoholCode.GDblanco2Objects1.length ;i < len;++i) {
    gdjs.alcoholCode.GDblanco2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.alcoholCode.GDblanco3Objects1.length ;i < len;++i) {
    gdjs.alcoholCode.GDblanco3Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.alcoholCode.GDblanco4Objects1.length ;i < len;++i) {
    gdjs.alcoholCode.GDblanco4Objects1[i].getBehavior("Opacity").setOpacity(150);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.alcoholCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("blanco2"), gdjs.alcoholCode.GDblanco2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.alcoholCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.alcoholCode.GDNewSpriteObjects1[i].getAnimationFrame() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.alcoholCode.GDNewSpriteObjects1[k] = gdjs.alcoholCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.alcoholCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.alcoholCode.GDblanco2Objects1.length;i<l;++i) {
    if ( gdjs.alcoholCode.GDblanco2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.alcoholCode.GDblanco2Objects1[k] = gdjs.alcoholCode.GDblanco2Objects1[i];
        ++k;
    }
}
gdjs.alcoholCode.GDblanco2Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.alcoholCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.alcoholCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.alcoholCode.GDNewSpriteObjects1[i].setAnimationFrame(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.alcoholCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("blanco2"), gdjs.alcoholCode.GDblanco2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.alcoholCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.alcoholCode.GDNewSpriteObjects1[i].getAnimationFrame() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.alcoholCode.GDNewSpriteObjects1[k] = gdjs.alcoholCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.alcoholCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.alcoholCode.GDblanco2Objects1.length;i<l;++i) {
    if ( gdjs.alcoholCode.GDblanco2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.alcoholCode.GDblanco2Objects1[k] = gdjs.alcoholCode.GDblanco2Objects1[i];
        ++k;
    }
}
gdjs.alcoholCode.GDblanco2Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.alcoholCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.alcoholCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.alcoholCode.GDNewSpriteObjects1[i].setAnimationFrame(gdjs.alcoholCode.GDNewSpriteObjects1[i].getAnimationFrame() - (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.alcoholCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("blanco3"), gdjs.alcoholCode.GDblanco3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.alcoholCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.alcoholCode.GDNewSpriteObjects1[i].getAnimationFrame() == 6 ) {
        isConditionTrue_0 = true;
        gdjs.alcoholCode.GDNewSpriteObjects1[k] = gdjs.alcoholCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.alcoholCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.alcoholCode.GDblanco3Objects1.length;i<l;++i) {
    if ( gdjs.alcoholCode.GDblanco3Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.alcoholCode.GDblanco3Objects1[k] = gdjs.alcoholCode.GDblanco3Objects1[i];
        ++k;
    }
}
gdjs.alcoholCode.GDblanco3Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.alcoholCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.alcoholCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.alcoholCode.GDNewSpriteObjects1[i].setAnimationFrame(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.alcoholCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("blanco3"), gdjs.alcoholCode.GDblanco3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.alcoholCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.alcoholCode.GDNewSpriteObjects1[i].getAnimationFrame() < 6 ) {
        isConditionTrue_0 = true;
        gdjs.alcoholCode.GDNewSpriteObjects1[k] = gdjs.alcoholCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.alcoholCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.alcoholCode.GDblanco3Objects1.length;i<l;++i) {
    if ( gdjs.alcoholCode.GDblanco3Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.alcoholCode.GDblanco3Objects1[k] = gdjs.alcoholCode.GDblanco3Objects1[i];
        ++k;
    }
}
gdjs.alcoholCode.GDblanco3Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.alcoholCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.alcoholCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.alcoholCode.GDNewSpriteObjects1[i].setAnimationFrame(gdjs.alcoholCode.GDNewSpriteObjects1[i].getAnimationFrame() + (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("blanco4"), gdjs.alcoholCode.GDblanco4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.alcoholCode.GDblanco4Objects1.length;i<l;++i) {
    if ( gdjs.alcoholCode.GDblanco4Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.alcoholCode.GDblanco4Objects1[k] = gdjs.alcoholCode.GDblanco4Objects1[i];
        ++k;
    }
}
gdjs.alcoholCode.GDblanco4Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


{



}


{



}


};

gdjs.alcoholCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.alcoholCode.GDNewSpriteObjects1.length = 0;
gdjs.alcoholCode.GDNewSpriteObjects2.length = 0;
gdjs.alcoholCode.GDleftObjects1.length = 0;
gdjs.alcoholCode.GDleftObjects2.length = 0;
gdjs.alcoholCode.GDrightObjects1.length = 0;
gdjs.alcoholCode.GDrightObjects2.length = 0;
gdjs.alcoholCode.GDNewLightObjects1.length = 0;
gdjs.alcoholCode.GDNewLightObjects2.length = 0;
gdjs.alcoholCode.GDblanco2Objects1.length = 0;
gdjs.alcoholCode.GDblanco2Objects2.length = 0;
gdjs.alcoholCode.GDgamexObjects1.length = 0;
gdjs.alcoholCode.GDgamexObjects2.length = 0;
gdjs.alcoholCode.GDblanco3Objects1.length = 0;
gdjs.alcoholCode.GDblanco3Objects2.length = 0;
gdjs.alcoholCode.GDgamex2Objects1.length = 0;
gdjs.alcoholCode.GDgamex2Objects2.length = 0;
gdjs.alcoholCode.GDblanco4Objects1.length = 0;
gdjs.alcoholCode.GDblanco4Objects2.length = 0;
gdjs.alcoholCode.GDgamexpObjects1.length = 0;
gdjs.alcoholCode.GDgamexpObjects2.length = 0;
gdjs.alcoholCode.GDNewSprite2Objects1.length = 0;
gdjs.alcoholCode.GDNewSprite2Objects2.length = 0;
gdjs.alcoholCode.GDblanco5Objects1.length = 0;
gdjs.alcoholCode.GDblanco5Objects2.length = 0;

gdjs.alcoholCode.eventsList0(runtimeScene);

return;

}

gdjs['alcoholCode'] = gdjs.alcoholCode;
