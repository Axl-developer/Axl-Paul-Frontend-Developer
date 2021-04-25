

export const GetSkillById = (Skills,id) => {


     const SKills_Filtred = []

    id.map( i => 
        SKills_Filtred.push(Skills.find(Skill => Skill.id === i))
    )

    return SKills_Filtred
}
