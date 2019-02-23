export class RecipeSearchResult {
    matches: Recipe[];
}

export class Recipe {
    id:string;
    recipeName:string;
    name: string;
    ingredients:string;
    ingredientLines: string;
    smallImageUrls:string;
    totalTimeInSeconds:number;
    rating:number;
    attributes: RecipeAttributes;
    images: RecipeImage[];

}

export class RecipeAttributes {
    course:string;
}

export class RecipeImage {
    hostedLargeUrl: string;
}

