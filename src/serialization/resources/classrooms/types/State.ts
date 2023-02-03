/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CodeCombat } from "@fern-api/codecombat";
import * as core from "../../../../core";

export const State: core.serialization.ObjectSchema<serializers.State.Raw, CodeCombat.State> =
    core.serialization.object({
        complete: core.serialization.boolean().optional(),
    });

export declare namespace State {
    interface Raw {
        complete?: boolean | null;
    }
}
