export function createHeader(libelle, align) {
    return { libelle, align }
}

export function addClsName(domElement, classToAdd) {
    const element = document.getElementById(domElement);
    element.classList.add(classToAdd);
}