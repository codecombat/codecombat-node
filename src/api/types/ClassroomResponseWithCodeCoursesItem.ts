/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CodeCombat from "..";

export interface ClassroomResponseWithCodeCoursesItem {
    id?: CodeCombat.ObjectIdString;
    levels?: Record<string, unknown>[];
    enrolled?: CodeCombat.ObjectIdString[];
    instanceId?: CodeCombat.ObjectIdString;
}
