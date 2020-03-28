# cocos-creator-NetImage

cocos creator 网络图片渲染组件, 用法贴近 DOM Image

用法:

```typescript
import NetImage from "../NetImage";

// ...
const image = new NetImage(`${coords}`);

image.onload = () => {
  this._imageOnLoad(done, image);
};

image.src = `your pic url`;
```
