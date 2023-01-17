/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CodecombatApi } from "@fern-api/codecombat";
import * as core from "../../../../core";

export const LevelSessionState: core.serialization.ObjectSchema<
    serializers.LevelSessionState.Raw,
    CodecombatApi.LevelSessionState
> = core.serialization.object({
    complete: core.serialization.boolean(),
});

export declare namespace LevelSessionState {
    interface Raw {
        complete: boolean;
    }
}