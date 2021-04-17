export class Spot {

    name: string;
    type: string;
    location: string;
    description: string;
    img_path: string | undefined;

    constructor(name: string, type: string, location: string, description: string, img_path?: string) {
        this.name = name;
        this.type = type;
        this.location = location;
        this.description = description;
        this.img_path = img_path;
    }


  }