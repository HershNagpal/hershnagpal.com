import txtImage from './assets/images/icons/txt.png'
import pdfImage from './assets/images/icons/doc.png'
import ieImage from './assets/images/icons/ie.png'
import folderImage from './assets/images/icons/folder.png'
import aboutImage from './assets/images/icons/about.png'
import resume from './assets/content/HNagpal-Resume.pdf'

export const iconData = [
    null,
    {
        id: 1,
        title: "about.txt",
        type: "text",
        content: "http://google.com",
    },
    {
        id: 2,
        title: "resume.pdf",
        type: "pdf",
        content: resume,
    },
    {
        id: 3,
        title: "linkedin.com",
        type: "ie",
        content: "https://www.linkedin.com/in/hershnagpal/",
    },
]

const iconImageMap = [
    null,
    aboutImage,
    pdfImage,
    ieImage,
]

export const findImageSource = (id) => iconImageMap[id]