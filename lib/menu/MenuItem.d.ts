import * as React from 'react';
import { ClickParam } from '.';
import { SiderContextProps } from '../layout/Sider';
export interface MenuItemProps extends Omit<React.HTMLAttributes<HTMLLIElement>, 'title' | 'onClick' | 'onMouseEnter' | 'onMouseLeave'> {
    rootPrefixCls?: string;
    disabled?: boolean;
    level?: number;
    icon?: React.ReactNode;
    danger?: boolean;
    title?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick?: (param: ClickParam) => void;
    onMouseEnter?: (e: {
        key: string;
        domEvent: MouseEvent;
    }) => void;
    onMouseLeave?: (e: {
        key: string;
        domEvent: MouseEvent;
    }) => void;
}
export default class MenuItem extends React.Component<MenuItemProps> {
    static isMenuItem: boolean;
    private menuItem;
    onKeyDown: (e: React.MouseEvent<HTMLElement>) => void;
    saveMenuItem: (menuItem: this) => void;
    renderItemChildren(inlineCollapsed: boolean): {} | null | undefined;
    renderItem: ({ siderCollapsed }: SiderContextProps) => JSX.Element;
    render(): JSX.Element;
}
