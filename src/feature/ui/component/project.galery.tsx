import { Gallery, Item } from 'react-photoswipe-gallery'

interface ProjectGalleryProps {
    screenshots: Array<{
        img: string,
        alt: string
        w?: number,
        h?: number
    }>;
}

export default function ProjectGallery(props: ProjectGalleryProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <Gallery>
                {props.screenshots.map((screenshot) => (
                    <Item key={screenshot.img} thumbnail={screenshot.img} original={screenshot.img} alt={screenshot.alt} width={screenshot.w ?? 1919} height={screenshot.h ?? 905}>
                        {({ ref, open }) => (
                            <img ref={ref} onClick={open} src={screenshot.img} className='rounded-lg cursor-pointer border' alt={screenshot.alt} />
                        )}
                    </Item>
                ))}
            </Gallery>
        </div>
    )
}