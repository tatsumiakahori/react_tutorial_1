export async function getBreeds() {
    const response = await fetch(
        `https://dog.ceo/api/breeds/list/all
        `
    )
    const data = await response.json();
    return data.message;
}