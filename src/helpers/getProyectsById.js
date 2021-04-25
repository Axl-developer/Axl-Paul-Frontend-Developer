

export const GetProyectsById = (Proyects,id) => {

    return Proyects.find(Proyect => Proyect.id === id)
}
