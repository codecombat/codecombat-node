/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as CodeCombat from "../../api";
import * as core from "../../core";

export const LevelSessionResponseState: core.serialization.ObjectSchema<
    serializers.LevelSessionResponseState.Raw,
    CodeCombat.LevelSessionResponseState
> = core.serialization.object({
    complete: core.serialization.boolean().optional(),
});

export declare namespace LevelSessionResponseState {
    interface Raw {
        complete?: boolean | null;
    }
}
