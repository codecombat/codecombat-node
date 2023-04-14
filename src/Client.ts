/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Auth } from "./api/resources/auth/client/Client";
import { Clans } from "./api/resources/clans/client/Client";
import { Classrooms } from "./api/resources/classrooms/client/Client";
import { Stats } from "./api/resources/stats/client/Client";
import { Users } from "./api/resources/users/client/Client";

export declare namespace CodeCombatClient {
    interface Options {
        environment?: environments.CodeCombatEnvironment | string;
        credentials: core.Supplier<core.BasicAuth>;
    }
}

export class CodeCombatClient {
    constructor(private readonly options: CodeCombatClient.Options) {}

    private _auth: Auth | undefined;

    public get auth(): Auth {
        return (this._auth ??= new Auth(this.options));
    }

    private _clans: Clans | undefined;

    public get clans(): Clans {
        return (this._clans ??= new Clans(this.options));
    }

    private _classrooms: Classrooms | undefined;

    public get classrooms(): Classrooms {
        return (this._classrooms ??= new Classrooms(this.options));
    }

    private _stats: Stats | undefined;

    public get stats(): Stats {
        return (this._stats ??= new Stats(this.options));
    }

    private _users: Users | undefined;

    public get users(): Users {
        return (this._users ??= new Users(this.options));
    }
}
