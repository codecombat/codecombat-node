/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { CodeCombat } from "@fern-api/codecombat";
import * as core from "../../../../../core";

export const GrantLicenseRequest: core.serialization.Schema<
    serializers.GrantLicenseRequest.Raw,
    CodeCombat.GrantLicenseRequest
> = core.serialization.object({
    ends: core.serialization.date(),
});

export declare namespace GrantLicenseRequest {
    interface Raw {
        ends: string;
    }
}