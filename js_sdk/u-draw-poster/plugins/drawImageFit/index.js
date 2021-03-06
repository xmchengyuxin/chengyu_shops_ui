import { concreteRect } from './object-sizing';
import { promisify } from '../../utils';
const plugin = {
    name: '__ctx-drawImageFit__',
    mounted: ({ ctx }) => {
        ctx.drawImageFit = async (url, options) => {
            const imageInfo = await promisify(uni.getImageInfo)({ src: url });
            const style = {
                radius: 0,
                objectFit: 'cover',
                intrinsicSize: { width: imageInfo?.width ?? 100, height: imageInfo?.height ?? 100 },
                specifiedSize: { width: 100, height: 100 },
                intrinsicPosition: ['center', 'center'],
                specifiedPosition: [0, 0],
                ...options
            };
            // 计算图片尺寸
            const drawInfo = concreteRect(style, style.intrinsicSize, style.specifiedSize);
            // 如有圆角, 则进行裁剪
            if (style.radius > 0) {
                ctx.save();
                ctx.setFillStyle?.('transparent');
                ctx.fillStyle = 'transparent';
                ctx.fillRoundRect(style.specifiedPosition[0], style.specifiedPosition[1], style.specifiedSize.width, style.specifiedSize.height, style.radius);
                ctx.clip();
            }
            const result = await ctx.drawImage(url, ...Object.values(drawInfo));
            if (style.radius > 0)
                ctx.restore();
            return result;
        };
    }
};
export default () => plugin;
//# sourceMappingURL=index.js.map