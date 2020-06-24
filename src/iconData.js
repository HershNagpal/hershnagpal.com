import txtImage from './assets/images/icons/txt.png'
import pdfImage from './assets/images/icons/doc.png'

export const iconData = [
    null,
    {
        id: 1,
        title: "text.txt",
        type: "text",
        link: "http://google.com",
    },
    {
        id: 2,
        title: "doc.pdf",
        type: "doc",
        link: "http://google.com",
    },
]

const iconImageMap = [
    null,
    txtImage,
    pdfImage,
]

export const findImageSource = (id) => iconImageMap[id]