import * as React from 'react';
export interface BackTopProps {
    visibilityHeight?: number;
    onClick?: React.MouseEventHandler<HTMLElement>;
    target?: () => HTMLElement | Window | Document;
    prefixCls?: string;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    visible?: boolean;
}
declare const _default: React.NamedExoticComponent<BackTopProps>;
export default _default;
