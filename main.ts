import { VideoFilterBuilder } from "./FilterBuilder/VideoFilterBuilder"
import { VideoFilter } from "./Filters/VideoFilter"

const builder: VideoFilterBuilder = new VideoFilterBuilder()

let filter: VideoFilter = builder.build("bla bla bla")