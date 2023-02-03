/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { CodeCombat } from "@fern-api/codecombat";
import * as core from "../../../../../core";

export const UpdateUserRequest: core.serialization.Schema<
    serializers.UpdateUserRequest.Raw,
    CodeCombat.UpdateUserRequest
> = core.serialization.object({
    name: core.serialization.string(),
    birthday: core.serialization.string().optional(),
});

export declare namespace UpdateUserRequest {
    interface Raw {
        name: string;
        birthday?: string | null;
    }
}