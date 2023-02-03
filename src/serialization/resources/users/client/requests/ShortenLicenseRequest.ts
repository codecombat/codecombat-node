/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { CodeCombat } from "@fern-api/codecombat";
import * as core from "../../../../../core";

export const ShortenLicenseRequest: core.serialization.Schema<
    serializers.ShortenLicenseRequest.Raw,
    CodeCombat.ShortenLicenseRequest
> = core.serialization.object({
    ends: core.serialization.date(),
});

export declare namespace ShortenLicenseRequest {
    interface Raw {
        ends: string;
    }
}
