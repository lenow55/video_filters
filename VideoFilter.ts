import { Filter } from "./Filter";

export class VideoFilter extends Filter {
    private tags: string[] = []
    public getTags(): string[]{
        return this.tags
    }

    setTag(tag: string, size?: number): void{
        if (size != 0){
            for (let i = 0; i < size; i++) {
                this.tags.push(tag)
            }
        }
        else{
            this.tags.push(tag)
        }
    }
}
