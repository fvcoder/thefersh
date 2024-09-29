import { Gallery, Item } from 'react-photoswipe-gallery'

interface ProjectGalleryProps {
    screenshots: Array<{ img: string, alt: string }>;
}

export default function ProjectGallery(props: ProjectGalleryProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <Gallery>
                {props.screenshots.map((screenshot) => (
                    <Item key={screenshot.img} thumbnail={screenshot.img} original={screenshot.img} alt={screenshot.alt} width={1919} height={905}>
                        {({ ref, open }) => (
                            <img ref={ref} onClick={open} src={screenshot.img} className='rounded-lg cursor-pointer' alt={screenshot.alt} />
                        )}
                    </Item>
                ))}
            </Gallery>
        </div>
    )
}