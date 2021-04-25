
export const getSkills = async(url) => {

    const resp =  await fetch(url)
    const data = await resp.json()
    const skill = data

    return skill
}
