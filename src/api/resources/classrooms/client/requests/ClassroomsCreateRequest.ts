/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CodeCombat from "../../../..";

export interface ClassroomsCreateRequest {
    /** Name of the classroom */
    name: string;
    ownerId: CodeCombat.ObjectIdString;
    aceConfig: CodeCombat.ClassroomsCreateRequestAceConfig;
}
