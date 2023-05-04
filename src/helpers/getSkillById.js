

export const GetSkillById = (Skills,id) => {


     const Skills_Filtred = []

    id.map( i => 
        Skills_Filtred.push(Skills.find(Skill => Skill.id === i))
    )

    return Skills_Filtred
}
