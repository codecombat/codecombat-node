/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CodeCombat } from "@fern-api/codecombat";
import * as core from "../../../../core";

export const HeroConfig: core.serialization.ObjectSchema<serializers.HeroConfig.Raw, CodeCombat.HeroConfig> =
    core.serialization.object({
        thangType: core.serialization.lazy(async () => (await import("../../..")).ObjectIdString).optional(),
    });

export declare namespace HeroConfig {
    interface Raw {
        thangType?: serializers.ObjectIdString.Raw | null;
    }
}
