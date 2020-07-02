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
        title: "welcome.txt",
        type: "text",
        content: "",
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
    txtImage,
    pdfImage,
    ieImage,
]

export const findImageSource = (id) => iconImageMap[id]