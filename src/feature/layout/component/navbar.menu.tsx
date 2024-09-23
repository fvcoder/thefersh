import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { DropToDown } from '../../ui/component/droptodown';
import { Icon } from '@iconify-icon/react';

export function NavbarMenu() {
    const [open, setOpen] = useState(false);
    return (
        <Dialog.Root onOpenChange={setOpen} open={open}  aria-label='Menu'>
            <Dialog.Trigger asChild>
                <button className="md:hidden text-gray-500 active:text-gray-800 text-sm px-2">Menu</button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='bg-black/20' />
                <Dialog.Content className="fixed inset-0 bg-white px-6 py-4">
                    <div className='text-right'>
                        <button className='text-gray-500 active:text-gray-800 text-sm px-2' onClick={() => setOpen(false)}>Close</button>
                    </div>
                    <nav className='mt-6'>
                        <ul className="flex flex-col items-center gap-y-6">
                            <li className="ml-1">
                                <DropToDown label="Work" items={[{ label: "Portfolio", href: "/portfolio"}, { label: "Experiments", href: "/experiments"}]} disableSm />
                            </li>
                            <li>
                                <a href="/blog" className="transition-colors px-2 text-gray-500 hover:text-gray-900 active:text-purple-500">Blog</a>
                            </li>
                            <li>
                                <a href="/about" className="transition-colors px-2 text-gray-500 hover:text-gray-900 active:text-purple-500">About</a>
                            </li>
                        </ul>
                        <ul className='flex items-center justify-center gap-x-6 mt-6'>
                            <li>
                                <a href="https://x.com/fvcoder1" className="inline-block" target="_blank" rel="noopener noreferrer">
                                    <Icon icon="hugeicons:new-twitter" width={24} className="text-gray-500 hover:text-gray-600 active:text-gray-700 focus:text-gray-600" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/fvcoder" className="inline-block" target="_blank" rel="noopener noreferrer">
                                    <Icon icon="mdi:github" width={24} className="text-gray-500 hover:text-gray-600 active:text-gray-700 focus:text-gray-600" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/fvcoder" className="inline-block" target="_blank" rel="noopener noreferrer">
                                    <Icon icon="mdi:linkedin" width={24} className="text-gray-500 hover:text-gray-600 active:text-gray-700 focus:text-gray-600" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}