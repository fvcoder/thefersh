import * as Menu from "@radix-ui/react-dropdown-menu";
import { Icon } from '@iconify-icon/react';

interface DropToDownItem {
    label: string;
    href: string;
}

interface DropToDownProps {
    label: string
    items?: DropToDownItem[]
    disableSm?: boolean
}

export function DropToDown(props: DropToDownProps) {
    return (
        <Menu.Root>
            <Menu.Trigger className="flex items-center gap-x-2 select-none group transition-colors px-2 text-gray-500 hover:text-gray-900">
                <span className={`${!props.disableSm ? "text-sm font-light": ""} group-data-[state=open]:text-purple-500`}>{props.label}</span>
                <Icon icon="fluent:chevron-down-28-filled" width={12} className="transition-transform group-data-[state=open]:rotate-180 group-data-[state=closed]:rotate-0 group-data-[state=open]:text-purple-500" />
            </Menu.Trigger>
            <Menu.Portal>
                <Menu.Content className="bg-white min-w-48 mt-2 rounded-md py-1 border">
                    {(props.items ?? []).map((x, i) => (
                        <Menu.Item key={`${x.label}-${i}`} asChild>
                            <a href={x.href} className="block w-full px-4 py-2 text-sm hover:bg-gray-100 hover:text-purple-500">
                                {x.label}
                            </a>
                        </Menu.Item>
                    ))}
                </Menu.Content>
            </Menu.Portal>
        </Menu.Root>
    )
}