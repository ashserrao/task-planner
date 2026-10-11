(() => {
  "use strict";
  var e,
    t,
    a,
    r = {
      2074: (e, t, a) => {
        var r = a(6540),
          n = a(5338),
          l = a(8664),
          o = a(6221),
          s = a(5042),
          c = a(8697),
          i = a(9230),
          m = a(937),
          d = a(4794);
        const u = (e, t, a) => {
            const r = [];
            for (let n = 0; n < 6; n++) {
              const l = (Math.PI / 180) * (60 * n);
              r.push(`${e + a * Math.cos(l)},${t + a * Math.sin(l)}`);
            }
            return r.join(" ");
          },
          f = (e) => {
            let {
              animated: t = !1,
              hexRadius: a = 34,
              viewWidth: n = 800,
              viewHeight: l = 500,
            } = e;
            const o = ((e, t, a) =>
                (0, r.useMemo)(() => {
                  const r = 1.5 * e,
                    n = e * Math.sqrt(3),
                    l = Math.ceil(t / r) + 2,
                    o = Math.ceil(a / n) + 2,
                    s = t / 2,
                    c = a / 2,
                    i = Math.hypot(s, c),
                    m = [];
                  for (let t = -1; t < l; t++)
                    for (let a = -1; a < o; a++) {
                      const l = t * r,
                        o = a * n + (t % 2 != 0 ? n / 2 : 0),
                        d = Math.hypot(l - s, o - c);
                      m.push({
                        key: `${t}-${a}`,
                        points: u(l, o, e - 2),
                        delay: (d / i) * 1.6,
                      });
                    }
                  return m;
                }, [e, t, a]))(a, n, l),
              s = (0.6 * Math.min(n, l)) / Math.max(1e3, 714),
              c = (n - 1e3 * s) / 2,
              i = (l - 714 * s) / 2;
            return r.createElement(
              "div",
              { className: "absolute inset-0 z-0 pointer-events-none" },
              r.createElement(
                "svg",
                {
                  className: "w-full h-full",
                  viewBox: `0 0 ${n} ${l}`,
                  preserveAspectRatio: "xMidYMid slice",
                },
                o.map((e) => {
                  let { key: a, points: n, delay: l } = e;
                  return t
                    ? r.createElement("polygon", {
                        key: a,
                        points: n,
                        fill: "#8cfcfb",
                        fillOpacity: 0.12,
                        stroke: "#67C7EB",
                        strokeWidth: 1,
                        className: "hive-cell",
                        style: { animationDelay: `${l}s` },
                      })
                    : r.createElement("polygon", {
                        key: a,
                        points: n,
                        fill: "none",
                        stroke: "#67C7EB",
                        strokeOpacity: 0.08,
                        strokeWidth: 1,
                      });
                }),
                r.createElement(
                  "g",
                  { transform: `translate(${c}, ${i}) scale(${s})` },
                  r.createElement("path", {
                    d: "M 502.728 95 L 501.955 95 494.688 110.250 L 487.422 125.500 469.961 162.730 L 452.500 199.959 451.250 199.511 L 450 199.063 450 200.531 L 450 202 336.500 202 L 223 202 223.016 203.250 L 223.033 204.500 225.266 208.160 L 227.500 211.821 230.446 216.660 L 233.391 221.500 241.488 234 L 249.584 246.500 255.017 255.500 L 260.449 264.500 264.043 269.500 L 267.637 274.500 268.250 276 L 268.864 277.500 274.682 286.734 L 280.500 295.969 287.500 307.077 L 294.500 318.185 298.741 324.343 L 302.981 330.500 304.336 333.500 L 305.690 336.500 307.345 337.872 L 309 339.245 309 340.170 L 309 341.096 312.500 346.567 L 316 352.039 316 352.677 L 316 353.315 319.900 358.408 L 323.800 363.500 325.870 367.227 L 327.940 370.954 332.138 377.727 L 336.336 384.500 338.074 386.500 L 339.812 388.500 342.656 393.217 L 345.500 397.933 350.872 406.539 L 356.244 415.145 355.726 418.822 L 355.209 422.500 351.604 430.135 L 348 437.769 348 438.378 L 348 438.988 343.500 448.554 L 339 458.120 339 458.490 L 339 458.860 335.912 465.680 L 332.825 472.500 328.856 481 L 324.888 489.500 323.444 492.154 L 322 494.809 322 496.266 L 322 497.723 317.926 506.612 L 313.852 515.500 312.471 518.500 L 311.090 521.500 304.105 538 L 297.119 554.500 285.500 581 L 273.881 607.500 273.239 608.997 L 272.596 610.495 275.048 608.923 L 277.500 607.351 317.155 581.570 L 356.810 555.790 376.550 513.895 L 396.290 472 397.569 472 L 398.848 472 401.010 474.750 L 403.171 477.500 410.836 489.858 L 418.500 502.215 423.500 510.247 L 428.500 518.279 430.222 520.890 L 431.944 523.500 433.982 527 L 436.021 530.500 437.260 532.448 L 438.500 534.395 442.750 540.640 L 447 546.885 447 547.777 L 447 548.668 450.769 554.084 L 454.538 559.500 461.769 571.295 L 469 583.089 469 583.650 L 469 584.211 471.456 587.130 L 473.912 590.049 479.706 599.668 L 485.500 609.287 487.032 611.805 L 488.564 614.323 490.311 615.411 L 492.057 616.500 492.778 615.427 L 493.500 614.354 532.590 560.427 L 571.679 506.500 630.664 425 L 689.650 343.500 738.483 276 L 787.316 208.500 789.859 205.142 L 792.403 201.783 667.644 202.313 L 542.886 202.843 542.015 200.672 L 541.145 198.500 536.029 184 L 530.913 169.500 517.207 132.250 L 503.500 95.001 502.728 95 M 499.250 240.673 L 498.500 240.227 461.192 324.864 L 423.885 409.500 423.272 410.914 L 422.660 412.328 423.737 411.663 L 424.813 410.997 424.343 412.797 L 423.872 414.596 456.532 466.548 L 489.192 518.500 489.913 519.267 L 490.634 520.034 505.554 500.767 L 520.473 481.500 550.124 443.304 L 579.774 405.108 579.205 404.538 L 578.635 403.969 512.084 404.650 L 445.532 405.332 451.016 399.303 L 456.500 393.274 474.998 373.743 L 493.496 354.212 512.498 353.554 L 531.500 352.896 534.259 352.367 L 537.017 351.837 536.509 351.014 L 536 350.192 518 297.945 L 500 245.699 500 243.408 L 500 241.118 499.250 240.673 M 615.598 265 L 565 265 565 265.935 L 565 266.870 566.105 269.685 L 567.210 272.500 582.658 317.500 L 598.105 362.500 598.950 363.347 L 599.794 364.194 630.938 317.847 L 662.082 271.500 664.139 268.250 L 666.196 265 615.598 265 M 377.917 266.500 L 332.833 266.500 332.531 266.802 L 332.229 267.104 351.227 297.802 L 370.225 328.500 377.255 339.871 L 384.285 351.241 385.142 349.711 L 385.998 348.180 399.386 318.840 L 412.773 289.500 417.886 278.611 L 423 267.721 423 267.111 L 423 266.500 377.917 266.500 Z",
                    fill: "none",
                    stroke: "#67C7EB",
                    strokeOpacity: t ? 0.55 : 0.35,
                    strokeWidth: 6,
                    strokeLinejoin: "round",
                  }),
                ),
              ),
            );
          };
        var b = a(4571),
          g = a(828),
          p = a(2340),
          h = a(5551),
          x = a(4929),
          y = a(7870),
          E = a(697),
          v = a(9095),
          N = a(4164),
          w = a(856);
        function k() {
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          return (0, w.QP)((0, N.$)(t));
        }
        function C() {
          return (
            (C = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            C.apply(null, arguments)
          );
        }
        const S = {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            secondary:
              "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            outline: "border border-border bg-transparent hover:bg-secondary",
            ghost: "bg-transparent hover:bg-secondary/60",
            destructive: "bg-destructive text-white hover:bg-destructive/90",
          },
          M = {
            default: "h-10 px-4 py-2",
            sm: "h-8 px-3 text-xs",
            lg: "h-11 px-6",
            icon: "h-8 w-8 p-0",
          },
          A = (0, r.forwardRef)(function (e, t) {
            let {
              className: a,
              type: n = "button",
              variant: l = "default",
              size: o = "default",
              ...s
            } = e;
            return r.createElement(
              "button",
              C(
                {
                  ref: t,
                  type: n,
                  className: k(
                    "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold",
                    "transition-transform duration-200",
                    "disabled:cursor-not-allowed disabled:opacity-60",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                    S[l] || S.default,
                    M[o] || M.default,
                    a,
                  ),
                },
                s,
              ),
            );
          }),
          L = Array.from({ length: 24 }, (e, t) => t),
          T = Array.from({ length: 96 }, (e, t) => t / 4),
          D = T.map((e, t) => ({ time: e, index: t }));
        function j(e) {
          const t = Math.max(0, Math.round(4 * Number(e.startHour || 0))),
            a = Math.max(0.25, Number(e.duration) || 1);
          return [t, Math.min(D.length, t + Math.max(1, Math.ceil(4 * a)))];
        }
        function P(e) {
          const [t, a] = j(e);
          return [t / 4, Math.min(a / 4, L.length)];
        }
        function _(e, t) {
          if (e.date && t.date && e.date !== t.date) return !1;
          const [a, r] = P(e),
            [n, l] = P(t);
          return a < l && n < r;
        }
        function H(e) {
          const t = ((Math.round(60 * Number(e)) % 1440) + 1440) % 1440,
            a = Math.floor(t / 60),
            r = a >= 12 ? "PM" : "AM";
          return `${a % 12 == 0 ? 12 : a % 12}:${String(t % 60).padStart(2, "0")} ${r}`;
        }
        const B = [
            {
              id: "work",
              name: "Work",
              label: "Work",
              color: "text-sky-300",
              bgColor: "bg-sky-500/20",
              solidBgColor: "bg-sky-500",
            },
            {
              id: "personal",
              name: "Personal",
              label: "Personal",
              color: "text-emerald-300",
              bgColor: "bg-emerald-500/20",
              solidBgColor: "bg-emerald-500",
            },
            {
              id: "learning",
              name: "Learning",
              label: "Learning",
              color: "text-lime-300",
              bgColor: "bg-lime-500/20",
              solidBgColor: "bg-lime-500",
            },
            {
              id: "entertainment",
              name: "Entertainment",
              label: "Entertainment",
              color: "text-fuchsia-300",
              bgColor: "bg-fuchsia-500/20",
              solidBgColor: "bg-fuchsia-500",
            },
            {
              id: "ashtro",
              name: "Ashtro",
              label: "Ashtro",
              color: "text-rose-300",
              bgColor: "bg-rose-500/20",
              solidBgColor: "bg-rose-500",
            },
            {
              id: "health",
              name: "health",
              label: "health",
              color: "text-orange-300",
              bgColor: "bg-orange-500/20",
              solidBgColor: "bg-orange-500",
            },
            {
              id: "other",
              name: "Other",
              label: "Other",
              color: "text-slate-300",
              bgColor: "bg-slate-500/20",
              solidBgColor: "bg-slate-500",
            },
          ],
          O = B,
          z = B[B.length - 1];
        function $(e) {
          if (!e) return z;
          const t = String(e).trim().toLowerCase(),
            a = B.find((e) => e.id === t);
          if (a) return a;
          const r = t.charAt(0).toUpperCase() + t.slice(1);
          return {
            ...z,
            id: t,
            name: r,
            label: r,
            solidBgColor: "bg-slate-500",
          };
        }
        const F = {
          low: {
            label: "Low",
            color: "text-slate-300",
            bgColor: "bg-slate-500/20",
          },
          medium: {
            label: "Medium",
            color: "text-amber-300",
            bgColor: "bg-amber-500/20",
          },
          high: {
            label: "High",
            color: "text-rose-300",
            bgColor: "bg-rose-500/20",
          },
        };
        function R(e) {
          if (!e) return "";
          const t = String(e).trim();
          return t ? t.charAt(0).toUpperCase() + t.slice(1).toLowerCase() : "";
        }
        function I(e) {
          return "boolean" == typeof e
            ? e
            : "true" ===
                String(e ?? "")
                  .trim()
                  .toLowerCase();
        }
        function G(e) {
          return "" !== e && null != e && !isNaN(Number(e));
        }
        function U(e) {
          if (!e || "object" != typeof e) return null;
          const t =
            !G(e["ticket id"]) &&
            !e["Task title"] &&
            (a = e["Task description"]) &&
            !isNaN(new Date(a).getTime()) &&
            G(e["task date time"]);
          var a;
          const r = t
              ? {
                  "ticket id": void 0,
                  "Task title": e["ticket id"],
                  "Task description": e["Task title"],
                  "task date time": e["Task description"],
                  "task duration": e["task date time"],
                  "task priority": e["task duration"],
                  "task category": e["task priority"],
                  "task status": e["task category"],
                  "log time": e["ticket type"],
                  "user name": e["task status"],
                  "user type": e["user name"],
                  "ticket type": "task",
                }
              : e,
            n = r["task date time"] || r.taskDateTime || r.dateTime,
            l = n ? new Date(n) : new Date(),
            o = !isNaN(l.getTime()),
            s = r["ticket id"] ?? r.ticket_id ?? r.ticketId,
            c = G(s) ? Number(s) : void 0,
            i = e.rowNumber ?? e.rowNumber;
          return {
            id:
              null != c && "" !== c
                ? c
                : t
                  ? `legacy-${i}`
                  : (i ?? crypto.randomUUID()),
            ticketId: null != c && "" !== c ? c : void 0,
            rowNumber: i,
            ticketType: (r["ticket type"] || r.ticketType || "task")
              .toString()
              .trim()
              .toLowerCase(),
            userName: (r["user name"] || r.userName || "").toString().trim(),
            userType: (r["user type"] || r.userType || "").toString().trim(),
            logTime: (r["log time"] || r.logTime || "").toString().trim(),
            date: o
              ? (0, b.GP)(l, "yyyy-MM-dd")
              : (0, b.GP)(new Date(), "yyyy-MM-dd"),
            startHour: o ? l.getHours() + l.getMinutes() / 60 : 0,
            name: (
              r["Task title"] ||
              r["task title"] ||
              r.name ||
              r.title ||
              "Untitled task"
            )
              .toString()
              .trim(),
            description: (
              r["Task description"] ||
              r["task description"] ||
              r.description ||
              ""
            )
              .toString()
              .trim(),
            duration: Math.max(
              0.25,
              Number(r["task duration"] ?? r.duration) || 1,
            ),
            priority: (r["task priority"] || r.priority || "medium")
              .toString()
              .trim()
              .toLowerCase(),
            category: (r["task category"] || r.category || "other")
              .toString()
              .trim()
              .toLowerCase(),
            status: (r["task status"] || r.status || "pending")
              .toString()
              .trim()
              .toLowerCase(),
            notes: (r.notes || r["Task description"] || r.description || "")
              .toString()
              .trim(),
            calendarSync: I(e["sync calendar"]),
            reminderMinutes: G(e["reminder minutes"])
              ? Number(e["reminder minutes"])
              : 30,
            calendarEventId: (e["calendar event id"] || "").toString().trim(),
          };
        }
        function W(e) {
          if (!e || "object" != typeof e) return {};
          let t;
          if (e.date) {
            const [a, r, n] = String(e.date).split("-").map(Number);
            t = new Date(
              a,
              (r || 1) - 1,
              n || 1,
              Math.floor((Number(e.startHour) || 0) % 24),
              Math.round(((((Number(e.startHour) || 0) % 1) + 1) % 1) * 60),
              0,
              0,
            );
          } else t = new Date();
          const a = {
            "Task title": (e.name || e.title || "Untitled task")
              .toString()
              .trim(),
            "Task description": (e.description || e.notes || "")
              .toString()
              .trim(),
            "task date time": isNaN(t.getTime())
              ? new Date().toISOString()
              : t.toISOString(),
            "task duration": Math.max(0.25, Number(e.duration) || 1),
            "task priority": R(e.priority || "medium"),
            "task category": R(e.category || "other"),
            "ticket type": (e.ticketType || "task")
              .toString()
              .trim()
              .toLowerCase(),
            "task status": R(e.status || "pending"),
            "user name": (e.userName || "ashserrao@ashtro.dev")
              .toString()
              .trim(),
            "user type": (e.userType || "admin").toString().trim(),
            "log time": e.logTime || new Date().toISOString(),
            "sync calendar": Boolean(e.calendarSync),
            "reminder minutes": G(e.reminderMinutes)
              ? Number(e.reminderMinutes)
              : 30,
          };
          return (
            void 0 !== e.ticketId && null !== e.ticketId
              ? (a["ticket id"] = e.ticketId)
              : void 0 !== e["ticket id"] &&
                null !== e["ticket id"] &&
                (a["ticket id"] = e["ticket id"]),
            void 0 !== e.rowNumber &&
              null !== e.rowNumber &&
              (a.rowNumber = e.rowNumber),
            a
          );
        }
        const q =
          "https://script.google.com/macros/s/AKfycbzxrRvX7S2Jh6QOHeeTWaCzTiitdn9Y49CUcI4FZh9MJdnEC_VtF9k04jshmkRavUw/exec";
        async function Z(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const a = await fetch(q, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify({ action: e, ...t }),
          });
          if (!a.ok) throw new Error(`API POST "${e}" failed: ${a.status}`);
          const r = await a.json();
          if ("error" === r?.result)
            throw new Error(r.message || `API POST "${e}" failed`);
          return r;
        }
        var J = a(9804),
          V = a(180),
          K = a(418),
          Y = a(7213);
        const Q = (0, r.createContext)(null),
          X = {
            success: {
              icon: J.A,
              title: "Success",
              className: "notification-success",
            },
            failure: {
              icon: V.A,
              title: "Something went wrong",
              className: "notification-failure",
            },
            warning: {
              icon: K.A,
              title: "Warning",
              className: "notification-warning",
            },
            info: {
              icon: Y.A,
              title: "Information",
              className: "notification-info",
            },
          };
        function ee(e) {
          let { children: t } = e;
          const [a, n] = (0, r.useState)([]),
            l = (0, r.useCallback)((e) => {
              n((t) => t.filter((t) => t.id !== e));
            }, []),
            o = (0, r.useCallback)(function (e, t) {
              let a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              const r = {
                id: `${Date.now()}-${Math.random()}`,
                type: X[e] ? e : "info",
                message: t,
                duration: a.duration ?? 5e3,
              };
              return (n((e) => [...e, r]), r.id);
            }, []);
          (0, r.useEffect)(() => {
            const e = a
              .filter((e) => e.duration > 0)
              .map((e) => window.setTimeout(() => l(e.id), e.duration));
            return () => e.forEach(window.clearTimeout);
          }, [a, l]);
          const s = {
            notify: o,
            dismiss: l,
            success: (e, t) => o("success", e, t),
            failure: (e, t) => o("failure", e, t),
            warning: (e, t) => o("warning", e, t),
            info: (e, t) => o("info", e, t),
          };
          return r.createElement(
            Q.Provider,
            { value: s },
            t,
            r.createElement(
              "div",
              {
                className: "notification-region",
                role: "region",
                "aria-label": "Notifications",
              },
              a.map((e) => {
                const t = X[e.type],
                  a = t.icon;
                return r.createElement(
                  "div",
                  {
                    className: k("notification", t.className),
                    key: e.id,
                    role: "failure" === e.type ? "alert" : "status",
                  },
                  r.createElement(a, {
                    className: "notification-icon",
                    "aria-hidden": "true",
                  }),
                  r.createElement(
                    "div",
                    { className: "notification-content" },
                    r.createElement("strong", null, t.title),
                    r.createElement("span", null, e.message),
                  ),
                  r.createElement(
                    "button",
                    {
                      className: "notification-dismiss",
                      type: "button",
                      onClick: () => l(e.id),
                      "aria-label": "Dismiss notification",
                    },
                    r.createElement(c.A, { size: 16, "aria-hidden": "true" }),
                  ),
                );
              }),
            ),
          );
        }
        const te = "taskplanner:tasks",
          ae = (0, r.createContext)(null);
        function re() {
          try {
            const e = window.localStorage.getItem(te);
            return e ? JSON.parse(e) : [];
          } catch {
            return [];
          }
        }
        function ne(e) {
          let { children: t } = e;
          const [a, n] = (0, r.useState)(re),
            [l, o] = (0, r.useState)(() => new Date()),
            { notify: s } = (function () {
              const e = (0, r.useContext)(Q);
              if (!e)
                throw new Error(
                  "useNotifications must be used within a NotificationProvider",
                );
              return e;
            })(),
            c = (0, r.useCallback)(
              (e) => {
                e?.calendarError &&
                  s(
                    "failure",
                    `Google Calendar sync failed: ${e.calendarError}`,
                  );
              },
              [s],
            ),
            i = (0, r.useCallback)(async () => {
              try {
                const e = await (async function () {
                  const e = await (async function (e) {
                    const t = new URLSearchParams({
                        action: e,
                        ...(arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {}),
                      }),
                      a = await fetch(`${q}?${t.toString()}`);
                    if (!a.ok)
                      throw new Error(`API GET "${e}" failed: ${a.status}`);
                    return a.json();
                  })("list");
                  if (!Array.isArray(e))
                    throw new Error(
                      "Unexpected response shape from timeline sheet",
                    );
                  return e.map(U);
                })();
                if (Array.isArray(e)) {
                  const t = e.filter(Boolean);
                  return (
                    n(t),
                    s(
                      "success",
                      `Loaded ${t.length} task${1 === t.length ? "" : "s"} from the timeline.`,
                    ),
                    t
                  );
                }
              } catch (e) {
                (console.warn(
                  "Timeline sheet unavailable, using cached tasks:",
                  e,
                ),
                  s(
                    "failure",
                    e.message || "The timeline API could not be reached.",
                  ));
              }
            }, [s]);
          ((0, r.useEffect)(() => {
            i();
          }, [i]),
            (0, r.useEffect)(() => {
              try {
                window.localStorage.setItem(te, JSON.stringify(a));
              } catch {}
            }, [a]));
          const m = (0, r.useCallback)(
              (e) =>
                a
                  .filter((t) => t.date === e)
                  .sort((e, t) => (e.startHour || 0) - (t.startHour || 0)),
              [a],
            ),
            d = (0, r.useCallback)(
              (e, t) => {
                const a = crypto.randomUUID(),
                  r = {
                    id: a,
                    date: e,
                    status: "pending",
                    duration: 1,
                    ticketType: "task",
                    userName: "ashserrao@ashtro.dev",
                    userType: "admin",
                    logTime: new Date().toISOString(),
                    ...t,
                  };
                return (
                  n((e) => [...e, r]),
                  (function (e) {
                    return Z("create", W(e));
                  })(r)
                    .then((e) => {
                      const t =
                          e?.["ticket id"] ??
                          e?.ticketId ??
                          e?.rowNumber ??
                          e?.id,
                        r = e?.rowNumber,
                        l = e?.["ticket id"] ?? e?.ticketId ?? t;
                      (null != t &&
                        n((e) =>
                          e.map((e) =>
                            e.id === a
                              ? {
                                  ...e,
                                  id: t,
                                  ticketId: l ?? e.ticketId,
                                  rowNumber: r ?? e.rowNumber,
                                }
                              : e,
                          ),
                        ),
                        s("success", "Task created successfully."),
                        c(e));
                    })
                    .catch((e) => {
                      (console.warn("Failed to sync new task to sheet:", e),
                        s(
                          "failure",
                          e.message ||
                            "The task could not be created in the timeline.",
                        ));
                    }),
                  r
                );
              },
              [s, c],
            ),
            u = (0, r.useCallback)(
              (e, t) => {
                n((a) => {
                  const r = a.map((a) => (a.id === e ? { ...a, ...t } : a)),
                    n = r.find((t) => t.id === e);
                  return (
                    n &&
                      (function (e) {
                        let t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                        const a = W(t),
                          r = t.rowNumber,
                          n = t.ticketId ?? t["ticket id"];
                        if (null == r)
                          return Promise.reject(
                            new Error(
                              "Cannot update a task without its sheet rowNumber",
                            ),
                          );
                        const l = { ...a };
                        return (
                          void 0 !== r && (l.rowNumber = r),
                          void 0 !== n && (l["ticket id"] = n),
                          Z("update", l)
                        );
                      })(e, n)
                        .then((e) => {
                          (s("success", "Task updated successfully."), c(e));
                        })
                        .catch((e) => {
                          (console.warn(
                            "Failed to sync task update to sheet:",
                            e,
                          ),
                            s(
                              "failure",
                              e.message ||
                                "The task could not be updated in the timeline.",
                            ));
                        }),
                    r
                  );
                });
              },
              [s, c],
            ),
            f = (0, r.useCallback)(
              (e) => {
                const t = a.find((t) => t.id === e);
                (n((t) => t.filter((t) => t.id !== e)),
                  (function (e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    const a = t.rowNumber,
                      r = t.ticketId ?? t["ticket id"];
                    if (null == a)
                      return Promise.reject(
                        new Error(
                          "Cannot delete a task without its sheet rowNumber",
                        ),
                      );
                    const n = { rowNumber: a };
                    return (
                      void 0 !== r && (n["ticket id"] = r),
                      Z("delete", n)
                    );
                  })(e, t || {})
                    .then(() => s("success", "Task deleted successfully."))
                    .catch((e) => {
                      (console.warn("Failed to sync task delete to sheet:", e),
                        s(
                          "failure",
                          e.message ||
                            "The task could not be deleted from the timeline.",
                        ));
                    }));
              },
              [a, s],
            ),
            b = (0, r.useCallback)((e, t) => u(e, { startHour: t }), [u]),
            g = (0, r.useCallback)(() => a, [a]),
            p = (0, r.useMemo)(
              () => ({
                selectedDate: l,
                setSelectedDate: o,
                getTasksForDate: m,
                getAllTasks: g,
                addTask: d,
                updateTask: u,
                deleteTask: f,
                moveTask: b,
                refreshTasks: i,
              }),
              [l, m, g, d, u, f, b, i],
            );
          return r.createElement(ae.Provider, { value: p }, t);
        }
        function le() {
          const e = (0, r.useContext)(ae);
          if (!e)
            throw new Error(
              "useTimeTracking must be used within a TimeTrackingProvider",
            );
          return e;
        }
        var oe = a(4852);
        const se = [
            { value: 0, label: "At start time" },
            { value: 5, label: "5 minutes before" },
            { value: 10, label: "10 minutes before" },
            { value: 30, label: "30 minutes before" },
            { value: 60, label: "1 hour before" },
            { value: 120, label: "2 hours before" },
            { value: 1440, label: "1 day before" },
          ],
          ce = {
            date: (0, b.GP)(new Date(), "yyyy-MM-dd"),
            name: "",
            description: "",
            category: B[0].id,
            priority: "medium",
            startHour: 9,
            duration: 1,
            notes: "",
            calendarSync: !1,
            reminderMinutes: 30,
          },
          ie =
            "w-full rounded-lg border border-border bg-secondary/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40";
        function me(e) {
          let {
            open: t,
            task: a,
            defaultHour: n,
            defaultDate: l,
            existingTasks: o = [],
            onClose: s,
            onSubmit: i,
            onDelete: m,
          } = e;
          const [d, u] = (0, r.useState)(ce),
            [f, g] = (0, r.useState)("");
          let p;
          try {
            const e = le();
            p = e.getAllTasks;
          } catch (e) {}
          if (
            ((0, r.useEffect)(() => {
              t &&
                (g(""),
                u(
                  a
                    ? {
                        name: a.name || "",
                        description: a.description || "",
                        category: a.category || B[0].id,
                        priority: a.priority || "medium",
                        date:
                          a.date || l || (0, b.GP)(new Date(), "yyyy-MM-dd"),
                        startHour: a.startHour ?? n ?? 9,
                        duration: a.duration || 1,
                        notes: a.notes || "",
                        calendarSync: Boolean(a.calendarSync),
                        reminderMinutes: a.reminderMinutes ?? 30,
                      }
                    : {
                        ...ce,
                        date: l || (0, b.GP)(new Date(), "yyyy-MM-dd"),
                        startHour: n ?? 9,
                      },
                ));
            }, [t, a, n, l]),
            !t)
          )
            return null;
          const h = (e) => (t) => {
            const { value: a } = t.target;
            (g(""),
              u((t) => ({
                ...t,
                [e]:
                  "startHour" === e ||
                  "duration" === e ||
                  "reminderMinutes" === e
                    ? Number(a)
                    : a,
              })));
          };
          return r.createElement(
            "div",
            {
              className:
                "fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 p-4 sm:items-center",
            },
            r.createElement(
              "div",
              {
                className:
                  "my-8 max-h-[calc(100vh-4rem)] w-full max-w-md overflow-y-auto rounded-xl border border-border bg-card p-5 shadow-2xl sm:my-0",
              },
              r.createElement(
                "div",
                { className: "mb-4 flex items-center justify-between" },
                r.createElement(
                  "h3",
                  { className: "font-semibold text-card-foreground" },
                  a ? "Edit Task" : "Add Task",
                ),
                r.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: s,
                    className:
                      "rounded-md p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                  },
                  r.createElement(c.A, { className: "h-4 w-4" }),
                ),
              ),
              r.createElement(
                "form",
                {
                  onSubmit: (e) => {
                    if ((e.preventDefault(), !d.name.trim())) return;
                    const t = ("function" == typeof p ? p() : o).find(
                      (e) => e.id !== a?.id && _(d, e),
                    );
                    t
                      ? g(`This overlaps with "${t.name}" (${H(t.startHour)}).`)
                      : i(d);
                  },
                  className: "space-y-3",
                },
                r.createElement(
                  "div",
                  null,
                  r.createElement(
                    "label",
                    { className: "mb-1 block text-xs text-muted-foreground" },
                    "Name",
                  ),
                  r.createElement("input", {
                    className: ie,
                    value: d.name,
                    onChange: h("name"),
                    placeholder: "Task name",
                    autoFocus: !0,
                    required: !0,
                  }),
                ),
                r.createElement(
                  "div",
                  null,
                  r.createElement(
                    "label",
                    { className: "mb-1 block text-xs text-muted-foreground" },
                    "Description",
                  ),
                  r.createElement("input", {
                    className: ie,
                    value: d.description,
                    onChange: h("description"),
                    placeholder: "Optional description",
                  }),
                ),
                r.createElement(
                  "div",
                  { className: "grid grid-cols-2 gap-3" },
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "label",
                      { className: "mb-1 block text-xs text-muted-foreground" },
                      "Date",
                    ),
                    r.createElement("input", {
                      type: "date",
                      className: ie,
                      value: d.date,
                      onChange: h("date"),
                      required: !0,
                    }),
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "label",
                      { className: "mb-1 block text-xs text-muted-foreground" },
                      "Category",
                    ),
                    r.createElement(
                      "select",
                      {
                        className: k(ie, "appearance-none"),
                        value: d.category,
                        onChange: h("category"),
                      },
                      B.map((e) =>
                        r.createElement(
                          "option",
                          { key: e.id, value: e.id },
                          e.name,
                        ),
                      ),
                    ),
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "label",
                      { className: "mb-1 block text-xs text-muted-foreground" },
                      "Priority",
                    ),
                    r.createElement(
                      "select",
                      {
                        className: k(ie, "appearance-none"),
                        value: d.priority,
                        onChange: h("priority"),
                      },
                      Object.entries(F).map((e) => {
                        let [t, a] = e;
                        return r.createElement(
                          "option",
                          { key: t, value: t },
                          a.label,
                        );
                      }),
                    ),
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "label",
                      { className: "mb-1 block text-xs text-muted-foreground" },
                      "Start time",
                    ),
                    r.createElement(
                      "select",
                      {
                        className: k(ie, "appearance-none"),
                        value: d.startHour,
                        onChange: h("startHour"),
                      },
                      T.map((e) =>
                        r.createElement("option", { key: e, value: e }, H(e)),
                      ),
                    ),
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "label",
                      { className: "mb-1 block text-xs text-muted-foreground" },
                      "Duration (hrs)",
                    ),
                    r.createElement("input", {
                      type: "number",
                      min: 0.25,
                      max: 12,
                      step: 0.25,
                      className: ie,
                      value: d.duration,
                      onChange: h("duration"),
                    }),
                  ),
                ),
                f &&
                  r.createElement(
                    "p",
                    { className: "text-sm text-destructive", role: "alert" },
                    f,
                  ),
                r.createElement(
                  "div",
                  null,
                  r.createElement(
                    "label",
                    { className: "mb-1 block text-xs text-muted-foreground" },
                    "Notes",
                  ),
                  r.createElement("textarea", {
                    className: k(ie, "min-h-[70px] resize-none"),
                    value: d.notes,
                    onChange: h("notes"),
                    placeholder: "Optional notes",
                  }),
                ),
                r.createElement(
                  "div",
                  {
                    className:
                      "rounded-lg border border-border bg-secondary/20 p-3",
                  },
                  r.createElement(
                    "label",
                    {
                      className:
                        "flex cursor-pointer items-center gap-2 text-sm text-foreground",
                    },
                    r.createElement("input", {
                      type: "checkbox",
                      className: "h-4 w-4 accent-current",
                      checked: d.calendarSync,
                      onChange: (e) =>
                        u((t) => ({ ...t, calendarSync: e.target.checked })),
                    }),
                    r.createElement(oe.A, {
                      className: "h-4 w-4 text-muted-foreground",
                    }),
                    "Add to Google Calendar",
                  ),
                  d.calendarSync &&
                    r.createElement(
                      "div",
                      { className: "mt-3" },
                      r.createElement(
                        "label",
                        {
                          className: "mb-1 block text-xs text-muted-foreground",
                        },
                        "Reminder",
                      ),
                      r.createElement(
                        "select",
                        {
                          className: k(ie, "appearance-none"),
                          value: d.reminderMinutes,
                          onChange: h("reminderMinutes"),
                        },
                        se.map((e) =>
                          r.createElement(
                            "option",
                            { key: e.value, value: e.value },
                            e.label,
                          ),
                        ),
                      ),
                    ),
                ),
                r.createElement(
                  "div",
                  { className: "flex items-center justify-between pt-2" },
                  a && m
                    ? r.createElement(
                        A,
                        {
                          type: "button",
                          variant: "destructive",
                          size: "sm",
                          onClick: () => m(a.id),
                        },
                        "Delete",
                      )
                    : r.createElement("span", null),
                  r.createElement(
                    "div",
                    { className: "flex gap-2" },
                    r.createElement(
                      A,
                      {
                        type: "button",
                        variant: "ghost",
                        size: "sm",
                        onClick: s,
                      },
                      "Cancel",
                    ),
                    r.createElement(
                      A,
                      { type: "submit", size: "sm" },
                      a ? "Save" : "Add task",
                    ),
                  ),
                ),
              ),
            ),
          );
        }
        const de = new Set(["completed", "done"]),
          ue = (e) => de.has(String(e.status || "").toLowerCase());
        function fe(e) {
          let t = 0,
            a = new Date();
          for (
            e.has((0, b.GP)(a, "yyyy-MM-dd")) || (a = (0, g.e)(a, 1));
            e.has((0, b.GP)(a, "yyyy-MM-dd"));
          )
            ((t += 1), (a = (0, g.e)(a, 1)));
          return t;
        }
        const be = function (e) {
            let { onEditTask: t } = e;
            const {
                getAllTasks: a,
                addTask: n,
                updateTask: l,
                deleteTask: o,
              } = le(),
              s = (0, r.useMemo)(() => a?.() || [], [a]),
              c = (0, r.useMemo)(
                () =>
                  O.map((e) => {
                    const t = s.filter((t) => t.category === e.id),
                      a = new Set(
                        t
                          .filter(ue)
                          .map((e) => e.date)
                          .filter(Boolean),
                      );
                    return {
                      category: e,
                      tasks: t,
                      doneDateSet: a,
                      streak: fe(a),
                    };
                  }),
                [s],
              ),
              [i, m] = (0, r.useState)(() => c[0]?.category.id ?? null),
              d = c.find((e) => e.category.id === i) ?? c[0],
              [u, N] = (0, r.useState)(null),
              w = new Date(),
              C = (0, r.useMemo)(
                () => (0, p.k)({ start: (0, g.e)(w, 29), end: w }),
                [],
              ),
              S = C.slice(-7),
              M = () => N(null);
            return r.createElement(
              "section",
              { id: "habits", className: "min-h-full bg-[#000000]" },
              r.createElement(f, {
                hexRadius: 60,
                viewWidth: 900,
                viewHeight: 600,
              }),
              r.createElement(
                "div",
                {
                  className:
                    "container mx-auto px-3 pb-6 sm:px-4 sm:pb-8 md:px-6",
                },
                r.createElement(
                  "div",
                  {
                    className:
                      "overflow-hidden rounded-xl border border-border bg-card",
                  },
                  r.createElement(
                    "div",
                    {
                      className:
                        "flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/30 px-4 py-3",
                    },
                    r.createElement(
                      "div",
                      { className: "flex items-center gap-2" },
                      r.createElement(y.A, {
                        className: "h-5 w-5 text-muted-foreground",
                      }),
                      r.createElement(
                        "div",
                        null,
                        r.createElement(
                          "h3",
                          { className: "font-semibold text-card-foreground" },
                          "Habit Tracker",
                        ),
                        r.createElement(
                          "p",
                          { className: "text-sm text-muted-foreground" },
                          c.length,
                          " habits • last ",
                          30,
                          " days shown",
                        ),
                      ),
                    ),
                  ),
                  r.createElement(
                    "div",
                    {
                      className:
                        "grid grid-cols-1 gap-3 border-b border-border/50 p-3 sm:grid-cols-2 lg:grid-cols-3",
                    },
                    c.map((e) => {
                      const t = e.category.id === d?.category.id;
                      return r.createElement(
                        "button",
                        {
                          type: "button",
                          key: e.category.id,
                          onClick: () => m(e.category.id),
                          className: k(
                            "rounded-lg border border-border/60 p-3 text-left transition-colors hover:bg-secondary/40",
                            t && "border-primary/50 bg-primary/10",
                          ),
                        },
                        r.createElement(
                          "div",
                          {
                            className:
                              "flex items-center justify-between gap-2",
                          },
                          r.createElement(
                            "div",
                            { className: "flex min-w-0 items-center gap-2" },
                            r.createElement("span", {
                              className: k(
                                "h-2.5 w-2.5 flex-shrink-0 rounded-full",
                                e.category?.solidBgColor || "",
                              ),
                            }),
                            r.createElement(
                              "span",
                              {
                                className:
                                  "truncate text-sm font-medium text-card-foreground",
                              },
                              e.category.label,
                            ),
                          ),
                          r.createElement(
                            "span",
                            {
                              className:
                                "flex flex-shrink-0 items-center gap-1 text-xs font-medium text-amber-500",
                            },
                            r.createElement(y.A, { className: "h-3 w-3" }),
                            e.streak,
                          ),
                        ),
                        r.createElement(
                          "div",
                          { className: "mt-2 flex items-center gap-1" },
                          S.map((t) => {
                            const a = (0, b.GP)(t, "yyyy-MM-dd"),
                              n = e.doneDateSet.has(a);
                            return r.createElement("span", {
                              key: a,
                              title: (0, b.GP)(t, "MMM d"),
                              className: k(
                                "h-3.5 w-3.5 flex-1 rounded-sm",
                                n
                                  ? e.category?.solidBgColor || ""
                                  : "bg-muted/30",
                              ),
                            });
                          }),
                        ),
                      );
                    }),
                  ),
                  d &&
                    r.createElement(
                      "div",
                      { className: "p-4" },
                      r.createElement(
                        "div",
                        {
                          className:
                            "mb-3 flex flex-wrap items-center justify-between gap-3",
                        },
                        r.createElement(
                          "div",
                          null,
                          r.createElement(
                            "h4",
                            { className: "font-medium text-card-foreground" },
                            d.category.label,
                          ),
                          r.createElement(
                            "p",
                            { className: "text-sm text-muted-foreground" },
                            d.streak,
                            "-day streak •",
                            " ",
                            d.doneDateSet.size,
                            " check-ins in last",
                            " ",
                            30,
                            " days",
                          ),
                        ),
                        r.createElement(
                          A,
                          {
                            size: "sm",
                            onClick: () =>
                              ((e) => {
                                const t = (0, b.GP)(new Date(), "yyyy-MM-dd"),
                                  a = e.tasks.find((e) => e.date === t);
                                a
                                  ? l(a.id, { status: "completed" })
                                  : N({
                                      task: null,
                                      category: e.category.id,
                                      date: t,
                                    });
                              })(d),
                          },
                          r.createElement(E.A, { className: "mr-2 h-4 w-4" }),
                          "Log today",
                        ),
                      ),
                      r.createElement(
                        "div",
                        {
                          className:
                            "grid grid-cols-10 gap-1.5 sm:grid-cols-[repeat(15,minmax(0,1fr))] lg:grid-cols-[repeat(30,minmax(0,1fr))]",
                        },
                        C.map((e) => {
                          const t = (0, b.GP)(e, "yyyy-MM-dd"),
                            a = d.doneDateSet.has(t),
                            n = (0, h.r)(e, w);
                          return r.createElement("div", {
                            key: t,
                            title: `${(0, b.GP)(e, "EEE, MMM d")}${a ? " • done" : ""}`,
                            className: k(
                              "aspect-square rounded-sm",
                              a
                                ? d.category?.solidBgColor || ""
                                : "bg-muted/30",
                              n && "ring-1 ring-primary",
                            ),
                          });
                        }),
                      ),
                      r.createElement(
                        "div",
                        {
                          className:
                            "mt-4 flex items-center gap-1.5 text-sm font-medium text-card-foreground",
                        },
                        r.createElement(v.A, {
                          className: "h-4 w-4 text-muted-foreground",
                        }),
                        "Recent entries",
                      ),
                      r.createElement(
                        "div",
                        {
                          className:
                            "mt-2 max-h-64 overflow-y-auto rounded-lg border border-border/50",
                        },
                        0 === d.tasks.length &&
                          r.createElement(
                            "div",
                            {
                              className:
                                "p-4 text-center text-sm text-muted-foreground",
                            },
                            "No entries logged for this habit yet.",
                          ),
                        [...d.tasks]
                          .sort((e, t) => (e.date < t.date ? 1 : -1))
                          .slice(0, 20)
                          .map((e) =>
                            r.createElement(
                              "div",
                              {
                                key: e.id,
                                className:
                                  "flex items-center justify-between gap-2 border-b border-border/50 px-3 py-2 text-sm last:border-0",
                              },
                              r.createElement(
                                "span",
                                { className: "text-muted-foreground" },
                                e.date &&
                                  (0, b.GP)((0, x.H)(e.date), "EEE, MMM d"),
                              ),
                              r.createElement(
                                "span",
                                { className: "truncate text-card-foreground" },
                                e.name,
                              ),
                              r.createElement(
                                "span",
                                {
                                  className: k(
                                    "flex-shrink-0 rounded-full border px-2 py-0.5 text-xs capitalize",
                                    ue(e)
                                      ? "border-emerald-500/30 bg-emerald-500/15 text-emerald-500"
                                      : "border-border bg-secondary/40 text-muted-foreground",
                                  ),
                                },
                                e.status || "logged",
                              ),
                            ),
                          ),
                      ),
                    ),
                ),
              ),
              r.createElement(me, {
                open: Boolean(u),
                task: u?.task ?? null,
                defaultCategory: u?.category,
                defaultDate: u?.date,
                existingTasks: d?.tasks ?? [],
                onClose: M,
                onSubmit: (e) => {
                  if (u?.task) l(u.task.id, e);
                  else {
                    const t = e.date || u?.date;
                    n(t, {
                      ...e,
                      category: u?.category,
                      status: e.status || "completed",
                    });
                  }
                  M();
                },
                onDelete: (e) => {
                  (o(e), M());
                },
              }),
            );
          },
          ge = () => {
            const [e, t] = (0, r.useState)([]);
            return r.createElement(
              "section",
              { id: "home", className: "relative min-h-full overflow-hidden" },
              r.createElement(f, {
                hexRadius: 60,
                viewWidth: 900,
                viewHeight: 600,
              }),
              r.createElement(be, null),
            );
          };
        var pe = a(6110);
        const he = function () {
            return r.createElement(
              "aside",
              {
                className:
                  "relative hidden overflow-hidden border-r border-border bg-card lg:flex lg:flex-col lg:justify-between lg:p-8",
              },
              r.createElement(
                "div",
                { className: "pointer-events-none absolute inset-0 -z-10" },
                r.createElement("div", {
                  className:
                    "animate-aurora absolute -left-24 -top-24 size-72 rounded-full bg-glow/25 blur-3xl",
                }),
                r.createElement("div", {
                  className:
                    "animate-aurora absolute -bottom-28 -right-16 size-80 rounded-full bg-accent/15 blur-3xl",
                  style: { animationDelay: "-6s" },
                }),
                r.createElement("div", {
                  className:
                    "animate-aurora absolute left-1/3 top-1/2 size-64 rounded-full bg-primary/25 blur-3xl",
                  style: { animationDelay: "-3s" },
                }),
              ),
              r.createElement(
                "div",
                { className: "animate-fade-up flex items-center gap-3" },
                r.createElement(
                  "span",
                  {
                    className:
                      "animate-glow-pulse flex size-11 items-center justify-center rounded-xl border border-glow/40 bg-badge",
                  },
                  r.createElement(pe.A, {
                    className: "size-5 text-badge-foreground",
                  }),
                ),
                r.createElement(
                  "div",
                  { className: "flex flex-col leading-tight" },
                  r.createElement(
                    "span",
                    {
                      className:
                        "font-display text-lg font-semibold tracking-tight text-foreground",
                    },
                    "Ashtro Dev",
                  ),
                  r.createElement(
                    "span",
                    { className: "text-xs text-accent" },
                    "Aim Driven Tech",
                  ),
                ),
              ),
              r.createElement(
                "div",
                {
                  className: "animate-fade-up max-w-md",
                  style: { animationDelay: "0.1s" },
                },
                r.createElement(
                  "span",
                  {
                    className:
                      "inline-flex items-center rounded-full border border-glow/30 bg-badge px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-badge-foreground",
                  },
                  "Build your idea",
                ),
                r.createElement(
                  "h2",
                  {
                    className:
                      "mt-5 text-balance font-display text-3xl font-bold leading-tight text-foreground",
                  },
                  "Turning your vision into reality.",
                ),
                r.createElement(
                  "p",
                  {
                    className:
                      "mt-4 text-pretty leading-relaxed text-muted-foreground",
                  },
                  "One secure sign-in for every Ashtro Dev tool.",
                ),
              ),
              r.createElement(
                "div",
                {
                  className:
                    "animate-fade-up flex items-center gap-4 text-sm text-muted-foreground",
                  style: { animationDelay: "0.2s" },
                },
                r.createElement(
                  "div",
                  { className: "flex -space-x-2" },
                  ["#4fd1c5", "#6b8fa3", "#7a2938"].map((e) =>
                    r.createElement("span", {
                      key: e,
                      className: "size-8 rounded-full border-2 border-card",
                      style: { backgroundColor: e },
                      "aria-hidden": "true",
                    }),
                  ),
                ),
                r.createElement(
                  "span",
                  null,
                  "Trusted by developers worldwide",
                ),
              ),
            );
          },
          xe = function (e) {
            let { children: t } = e;
            return r.createElement(
              "main",
              {
                className:
                  "relative flex min-h-svh items-center justify-center overflow-hidden bg-background p-4 sm:p-6",
              },
              r.createElement(f, {
                hexRadius: 40,
                viewWidth: 1200,
                viewHeight: 800,
              }),
              r.createElement(
                "div",
                { className: "pointer-events-none absolute inset-0 -z-10" },
                r.createElement("div", {
                  className:
                    "animate-aurora absolute -right-24 top-1/4 size-96 rounded-full bg-primary/10 blur-3xl",
                }),
                r.createElement("div", {
                  className:
                    "animate-aurora absolute -left-24 bottom-0 size-80 rounded-full bg-glow/10 blur-3xl",
                  style: { animationDelay: "-5s" },
                }),
              ),
              r.createElement(
                "div",
                {
                  className:
                    "animate-fade-up grid w-full max-w-4xl overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/40 lg:grid-cols-2",
                },
                r.createElement(he, null),
                r.createElement(
                  "section",
                  {
                    className:
                      "flex items-center justify-center px-5 py-8 sm:px-8",
                  },
                  t,
                ),
              ),
            );
          };
        var ye = a(3540),
          Ee = a(3160);
        function ve() {
          return (
            (ve = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            ve.apply(null, arguments)
          );
        }
        const Ne = (0, r.forwardRef)(function (e, t) {
          let {
            label: a,
            icon: n,
            type: l = "text",
            className: o,
            id: s,
            ...c
          } = e;
          const i = (0, r.useId)(),
            m = s ?? i,
            d = "password" === l,
            [u, f] = (0, r.useState)(!1),
            b = d ? (u ? "text" : "password") : l;
          return r.createElement(
            "div",
            { className: "group flex flex-col gap-1.5" },
            r.createElement(
              "label",
              {
                htmlFor: m,
                className:
                  "text-xs font-medium uppercase tracking-wider text-muted-foreground/80",
              },
              a,
            ),
            r.createElement(
              "div",
              { className: "relative" },
              n &&
                r.createElement(
                  "span",
                  {
                    className:
                      "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60 transition-colors group-focus-within:text-accent",
                  },
                  n,
                ),
              r.createElement(
                "input",
                ve(
                  {
                    ref: t,
                    id: m,
                    type: b,
                    className: k(
                      "w-full rounded-lg border border-input bg-secondary/40 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40",
                      "transition-all duration-200 outline-none",
                      "focus:border-accent/60 focus:bg-secondary/70 focus:ring-2 focus:ring-accent/25",
                      n ? "pl-10" : "pl-3.5",
                      d ? "pr-10" : "pr-3.5",
                      o,
                    ),
                  },
                  c,
                ),
              ),
              d &&
                r.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: () => f((e) => !e),
                    "aria-label": u ? "Hide password" : "Show password",
                    className:
                      "absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground/60 transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                  },
                  u
                    ? r.createElement(ye.A, { className: "size-4" })
                    : r.createElement(Ee.A, { className: "size-4" }),
                ),
            ),
          );
        });
        function we() {
          return r.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              className: "size-4",
              "aria-hidden": "true",
            },
            r.createElement("path", {
              fill: "#4285F4",
              d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z",
            }),
            r.createElement("path", {
              fill: "#34A853",
              d: "M12 23c2.97 0 5.46-.98 7.28-2.65l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z",
            }),
            r.createElement("path", {
              fill: "#FBBC05",
              d: "M5.84 14.11a6.6 6.6 0 0 1 0-4.22V7.05H2.18a11 11 0 0 0 0 9.9l3.66-2.84Z",
            }),
            r.createElement("path", {
              fill: "#EA4335",
              d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.05l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z",
            }),
          );
        }
        function ke() {
          return r.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              className: "size-4",
              "aria-hidden": "true",
            },
            r.createElement("path", {
              fill: "#E24329",
              d: "m12 21.42 3.68-11.33H8.32L12 21.42Z",
            }),
            r.createElement("path", {
              fill: "#FC6D26",
              d: "M12 21.42 8.32 10.09H3.16L12 21.42Z",
            }),
            r.createElement("path", {
              fill: "#FCA326",
              d: "M3.16 10.09 2.04 13.5a.76.76 0 0 0 .28.85L12 21.42 3.16 10.09Z",
            }),
            r.createElement("path", {
              fill: "#E24329",
              d: "M3.16 10.09h5.16L6.1 3.26a.38.38 0 0 0-.72 0L3.16 10.09Z",
            }),
            r.createElement("path", {
              fill: "#FC6D26",
              d: "M12 21.42 15.68 10.09h5.16L12 21.42Z",
            }),
            r.createElement("path", {
              fill: "#FCA326",
              d: "M20.84 10.09 21.96 13.5a.76.76 0 0 1-.28.85L12 21.42l8.84-11.33Z",
            }),
            r.createElement("path", {
              fill: "#E24329",
              d: "M20.84 10.09h-5.16l2.22-6.83a.38.38 0 0 1 .72 0l2.22 6.83Z",
            }),
          );
        }
        function Ce() {
          return r.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              className: "size-4",
              "aria-hidden": "true",
            },
            r.createElement("path", {
              fill: "#F25022",
              d: "M3 3h8.5v8.5H3V3Z",
            }),
            r.createElement("path", {
              fill: "#7FBA00",
              d: "M12.5 3H21v8.5h-8.5V3Z",
            }),
            r.createElement("path", {
              fill: "#00A4EF",
              d: "M3 12.5h8.5V21H3v-8.5Z",
            }),
            r.createElement("path", {
              fill: "#FFB900",
              d: "M12.5 12.5H21V21h-8.5v-8.5Z",
            }),
          );
        }
        const Se = [
          { name: "Google", icon: r.createElement(we, null) },
          { name: "GitLab", icon: r.createElement(ke, null) },
          { name: "Windows", icon: r.createElement(Ce, null) },
        ];
        function Me(e) {
          let { action: t } = e;
          return r.createElement(
            "div",
            { className: "grid grid-cols-3 gap-2 sm:gap-3" },
            Se.map((e) =>
              r.createElement(
                "button",
                {
                  key: e.name,
                  type: "button",
                  "aria-label": `${t} with ${e.name}`,
                  className:
                    "group flex min-w-0 items-center justify-center gap-1 rounded-lg border border-input bg-secondary/40 px-2 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-glow/50 hover:bg-secondary/70 hover:shadow-[0_8px_24px_-12px_rgba(107,143,163,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 sm:gap-2 sm:px-3",
                },
                e.icon,
                r.createElement(
                  "span",
                  { className: "hidden sm:inline" },
                  e.name,
                ),
              ),
            ),
          );
        }
        const Ae = function (e) {
            let { children: t } = e;
            return r.createElement(
              "div",
              { className: "my-6 flex items-center gap-4" },
              r.createElement("span", { className: "h-px flex-1 bg-border" }),
              r.createElement(
                "span",
                {
                  className:
                    "text-xs uppercase tracking-widest text-muted-foreground/60",
                },
                t,
              ),
              r.createElement("span", { className: "h-px flex-1 bg-border" }),
            );
          },
          Le = (0, r.createContext)(null),
          Te = "taskplanner.auth.session",
          De = "taskplanner.auth.users",
          je = {
            username: "demo",
            email: "demo@ashtro.dev",
            password: "Demo@123",
            firstName: "Demo",
            lastName: "User",
          };
        function Pe() {
          try {
            const e = JSON.parse(localStorage.getItem(De) || "[]");
            return [je, ...e];
          } catch {
            return [je];
          }
        }
        function _e() {
          try {
            return JSON.parse(localStorage.getItem(Te) || "null");
          } catch {
            return null;
          }
        }
        function He(e) {
          let { children: t } = e;
          const [a, n] = (0, r.useState)(_e);
          (0, r.useEffect)(() => {
            a
              ? localStorage.setItem(Te, JSON.stringify(a))
              : localStorage.removeItem(Te);
          }, [a]);
          const l = (0, r.useCallback)((e, t) => {
              const a = e?.trim().toLowerCase(),
                r = Pe().find(
                  (e) =>
                    (e.username?.toLowerCase() === a ||
                      e.email?.toLowerCase() === a) &&
                    e.password === t,
                );
              if (!r)
                return {
                  success: !1,
                  error: "Invalid username/email or password.",
                };
              const { password: l, ...o } = r;
              return (n(o), { success: !0 });
            }, []),
            o = (0, r.useCallback)((e) => {
              const t = e.email?.trim().toLowerCase();
              if (Pe().some((e) => e.email?.toLowerCase() === t))
                return {
                  success: !1,
                  error: "An account with that email already exists.",
                };
              const a = { ...e, username: t, email: t },
                r = JSON.parse(localStorage.getItem(De) || "[]");
              (r.push(a), localStorage.setItem(De, JSON.stringify(r)));
              const { password: l, ...o } = a;
              return (n(o), { success: !0 });
            }, []),
            s = (0, r.useCallback)(() => {
              n(null);
            }, []),
            c = (0, r.useMemo)(
              () => ({
                user: a,
                isAuthenticated: Boolean(a),
                login: l,
                signup: o,
                logout: s,
              }),
              [a, l, o, s],
            );
          return r.createElement(Le.Provider, { value: c }, t);
        }
        function Be() {
          const e = (0, r.useContext)(Le);
          if (!e)
            throw new Error("useAuth must be used within an AuthProvider");
          return e;
        }
        var Oe = a(8686),
          ze = a(7078),
          $e = a(8723),
          Fe = a(8656);
        const Re = function () {
            const [e, t] = (0, r.useState)(!1),
              [a, n] = (0, r.useState)(""),
              { login: l } = Be(),
              o = (0, d.Zp)();
            return r.createElement(
              "div",
              { className: "w-full max-w-md" },
              r.createElement(
                "div",
                { className: "animate-fade-up" },
                r.createElement(
                  "span",
                  {
                    className:
                      "inline-flex items-center rounded-full border border-glow/30 bg-badge px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-badge-foreground",
                  },
                  "Welcome back",
                ),
                r.createElement(
                  "h1",
                  {
                    className:
                      "mt-4 text-balance font-display text-3xl font-bold tracking-tight text-foreground",
                  },
                  "Sign in to your account",
                ),
                r.createElement(
                  "p",
                  { className: "mt-2 leading-relaxed text-muted-foreground" },
                  "Don't have an account?",
                  " ",
                  r.createElement(
                    d.N_,
                    {
                      to: "/signup",
                      className:
                        "font-medium text-accent underline-offset-4 hover:underline",
                    },
                    "Create one",
                  ),
                ),
                r.createElement(
                  "p",
                  {
                    className:
                      "mt-3 rounded-lg border border-glow/20 bg-secondary/40 px-3 py-2 text-xs text-muted-foreground/80",
                  },
                  "Demo credentials — ",
                  "demo@ashtro.dev",
                  " /",
                  " ",
                  "Demo@123",
                ),
              ),
              r.createElement(
                "div",
                {
                  className: "animate-fade-up mt-8",
                  style: { animationDelay: "0.08s" },
                },
                r.createElement(Me, { action: "Sign in" }),
              ),
              r.createElement(
                "div",
                {
                  className: "animate-fade-up",
                  style: { animationDelay: "0.14s" },
                },
                r.createElement(Ae, null, "or continue with"),
              ),
              r.createElement(
                "form",
                {
                  onSubmit: function (e) {
                    (e.preventDefault(), n(""));
                    const a = new FormData(e.currentTarget),
                      r = a.get("identifier")?.toString() ?? "",
                      s = a.get("password")?.toString() ?? "";
                    (t(!0),
                      setTimeout(() => {
                        const e = l(r, s);
                        (t(!1),
                          e.success ? o("/", { replace: !0 }) : n(e.error));
                      }, 800));
                  },
                  className: "animate-fade-up flex flex-col gap-4",
                  style: { animationDelay: "0.2s" },
                },
                r.createElement(Ne, {
                  label: "Username or email",
                  name: "identifier",
                  placeholder: "jane.doe or jane@company.com",
                  autoComplete: "username",
                  icon: r.createElement(Oe.A, { className: "size-4" }),
                  required: !0,
                }),
                r.createElement(
                  "div",
                  { className: "flex flex-col gap-1.5" },
                  r.createElement(Ne, {
                    label: "Password",
                    name: "password",
                    type: "password",
                    placeholder: "••••••••",
                    autoComplete: "current-password",
                    icon: r.createElement(ze.A, { className: "size-4" }),
                    required: !0,
                  }),
                  r.createElement(
                    "div",
                    { className: "flex items-center justify-between pt-1" },
                    r.createElement(
                      "label",
                      {
                        className:
                          "flex cursor-pointer items-center gap-2 text-sm text-muted-foreground",
                      },
                      r.createElement("input", {
                        type: "checkbox",
                        className:
                          "size-4 rounded border-input bg-secondary/40 accent-accent",
                      }),
                      "Remember me",
                    ),
                    r.createElement(
                      d.N_,
                      {
                        to: "#",
                        className:
                          "text-sm text-accent underline-offset-4 hover:underline",
                      },
                      "Forgot password?",
                    ),
                  ),
                ),
                a &&
                  r.createElement(
                    "p",
                    { className: "text-sm text-destructive", role: "alert" },
                    a,
                  ),
                r.createElement(
                  A,
                  {
                    type: "submit",
                    disabled: e,
                    className:
                      "mt-2 h-11 w-full bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_rgba(122,41,56,0.9)] transition-transform hover:-translate-y-0.5 hover:bg-primary/90",
                  },
                  e
                    ? r.createElement(
                        r.Fragment,
                        null,
                        r.createElement($e.A, {
                          className: "size-4 animate-spin",
                        }),
                        " Signing in…",
                      )
                    : "Sign in",
                ),
              ),
              r.createElement(
                "p",
                {
                  className:
                    "animate-fade-up mt-6 flex items-center justify-center gap-1.5 text-xs text-muted-foreground/70",
                  style: { animationDelay: "0.26s" },
                },
                r.createElement(Fe.A, { className: "size-3.5" }),
                "Protected by Ashtro Dev single sign-on",
              ),
            );
          },
          Ie = function () {
            return r.createElement(xe, null, r.createElement(Re, null));
          };
        var Ge = a(9869),
          Ue = a(6017);
        function We() {
          const [e, t] = (0, r.useState)(!1),
            [a, n] = (0, r.useState)(""),
            [l, o] = (0, r.useState)(""),
            [s, c] = (0, r.useState)(""),
            i = s.length > 0 && l !== s,
            { signup: m } = Be(),
            u = (0, d.Zp)();
          return r.createElement(
            "div",
            { className: "w-full max-w-md" },
            r.createElement(
              "div",
              { className: "animate-fade-up" },
              r.createElement(
                "span",
                {
                  className:
                    "inline-flex items-center rounded-full border border-glow/30 bg-badge px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-badge-foreground",
                },
                "Get started",
              ),
              r.createElement(
                "h1",
                {
                  className:
                    "mt-4 text-balance font-display text-3xl font-bold tracking-tight text-foreground",
                },
                "Create your account",
              ),
              r.createElement(
                "p",
                { className: "mt-2 leading-relaxed text-muted-foreground" },
                "Already have an account?",
                " ",
                r.createElement(
                  d.N_,
                  {
                    to: "/login",
                    className:
                      "font-medium text-accent underline-offset-4 hover:underline",
                  },
                  "Sign in",
                ),
              ),
            ),
            r.createElement(
              "div",
              {
                className: "animate-fade-up mt-8",
                style: { animationDelay: "0.08s" },
              },
              r.createElement(Me, { action: "Sign up" }),
            ),
            r.createElement(
              "div",
              {
                className: "animate-fade-up",
                style: { animationDelay: "0.14s" },
              },
              r.createElement(Ae, null, "or sign up with email"),
            ),
            r.createElement(
              "form",
              {
                onSubmit: function (e) {
                  if ((e.preventDefault(), n(""), i)) return;
                  const a = new FormData(e.currentTarget),
                    r = {
                      firstName: a.get("firstName")?.toString() ?? "",
                      lastName: a.get("lastName")?.toString() ?? "",
                      email: a.get("email")?.toString() ?? "",
                      phone: a.get("phone")?.toString() ?? "",
                      password: l,
                    };
                  (t(!0),
                    setTimeout(() => {
                      const e = m(r);
                      (t(!1), e.success ? u("/", { replace: !0 }) : n(e.error));
                    }, 800));
                },
                className: "animate-fade-up flex flex-col gap-4",
                style: { animationDelay: "0.2s" },
              },
              r.createElement(
                "div",
                { className: "grid grid-cols-1 gap-4 sm:grid-cols-2" },
                r.createElement(Ne, {
                  label: "First name",
                  name: "firstName",
                  placeholder: "Jane",
                  autoComplete: "given-name",
                  icon: r.createElement(Oe.A, { className: "size-4" }),
                  required: !0,
                }),
                r.createElement(Ne, {
                  label: "Last name",
                  name: "lastName",
                  placeholder: "Doe",
                  autoComplete: "family-name",
                  required: !0,
                }),
              ),
              r.createElement(Ne, {
                label: "Email",
                name: "email",
                type: "email",
                placeholder: "jane@company.com",
                autoComplete: "email",
                icon: r.createElement(Fe.A, { className: "size-4" }),
                required: !0,
              }),
              r.createElement(Ne, {
                label: "Phone",
                name: "phone",
                type: "tel",
                placeholder: "+1 (555) 000-0000",
                autoComplete: "tel",
                icon: r.createElement(Ge.A, { className: "size-4" }),
                required: !0,
              }),
              r.createElement(Ne, {
                label: "Password",
                name: "password",
                type: "password",
                placeholder: "••••••••",
                autoComplete: "new-password",
                icon: r.createElement(ze.A, { className: "size-4" }),
                value: l,
                onChange: (e) => o(e.target.value),
                required: !0,
              }),
              r.createElement(
                "div",
                { className: "flex flex-col gap-1" },
                r.createElement(Ne, {
                  label: "Confirm password",
                  name: "confirmPassword",
                  type: "password",
                  placeholder: "••••••••",
                  autoComplete: "new-password",
                  icon: r.createElement(Ue.A, { className: "size-4" }),
                  value: s,
                  onChange: (e) => c(e.target.value),
                  "aria-invalid": i,
                  required: !0,
                }),
                i &&
                  r.createElement(
                    "span",
                    { className: "text-xs text-destructive" },
                    "Passwords don't match.",
                  ),
              ),
              a &&
                r.createElement(
                  "p",
                  { className: "text-sm text-destructive", role: "alert" },
                  a,
                ),
              r.createElement(
                A,
                {
                  type: "submit",
                  disabled: e || i,
                  className:
                    "mt-2 h-11 w-full bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_rgba(122,41,56,0.9)] transition-transform hover:-translate-y-0.5 hover:bg-primary/90",
                },
                e
                  ? r.createElement(
                      r.Fragment,
                      null,
                      r.createElement($e.A, {
                        className: "size-4 animate-spin",
                      }),
                      " Creating account…",
                    )
                  : "Create account",
              ),
              r.createElement(
                "p",
                {
                  className:
                    "text-center text-xs leading-relaxed text-muted-foreground/70",
                },
                "By creating an account you agree to our",
                " ",
                r.createElement(
                  d.N_,
                  {
                    to: "#",
                    className: "text-accent underline-offset-4 hover:underline",
                  },
                  "Terms",
                ),
                " ",
                "and",
                " ",
                r.createElement(
                  d.N_,
                  {
                    to: "#",
                    className: "text-accent underline-offset-4 hover:underline",
                  },
                  "Privacy Policy",
                ),
                ".",
              ),
            ),
          );
        }
        function qe() {
          return r.createElement(xe, null, r.createElement(We, null));
        }
        var Ze = a(7849),
          Je = a(5892),
          Ve = a(2708);
        const Ke = new Set(["completed", "done"]),
          Ye = (e) => Ke.has(String(e.status || "").toLowerCase()),
          Qe = function (e) {
            let { onEditTask: t } = e;
            const {
                getAllTasks: a,
                addTask: n,
                updateTask: l,
                deleteTask: o,
              } = le(),
              s = (0, r.useMemo)(() => a?.() || [], [a]),
              c = (0, r.useMemo)(
                () =>
                  O.map((e) => {
                    const t = s.filter((t) => t.category === e.id),
                      a = t.filter(Ye).length,
                      r = t.length ? Math.round((a / t.length) * 100) : 0;
                    return { category: e, tasks: t, completed: a, progress: r };
                  }),
                [s],
              ),
              [i, m] = (0, r.useState)(() => c[0]?.category.id ?? null),
              d = c.find((e) => e.category.id === i) ?? c[0],
              [u, g] = (0, r.useState)(null),
              [p, h] = (0, r.useState)(null),
              y = (0, r.useMemo)(
                () =>
                  d
                    ? [...d.tasks].sort(
                        (e, t) =>
                          (e.date ? (0, x.H)(e.date).getTime() : 0) +
                          36e5 * (e.startHour || 0) -
                          ((t.date ? (0, x.H)(t.date).getTime() : 0) +
                            36e5 * (t.startHour || 0)),
                      )
                    : [],
                [d],
              ),
              v = () => g(null);
            return r.createElement(
              "section",
              { id: "projects", className: "min-h-full bg-[#000000]" },
              r.createElement(f, {
                hexRadius: 60,
                viewWidth: 900,
                viewHeight: 600,
              }),
              r.createElement(
                "div",
                {
                  className:
                    "container mx-auto px-3 pb-6 sm:px-4 sm:pb-8 md:px-6",
                },
                r.createElement(
                  "div",
                  {
                    className:
                      "overflow-hidden rounded-xl border border-border bg-card",
                  },
                  r.createElement(
                    "div",
                    {
                      className:
                        "flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/30 px-4 py-3",
                    },
                    r.createElement(
                      "div",
                      { className: "flex items-center gap-2" },
                      r.createElement(Ze.A, {
                        className: "h-5 w-5 text-muted-foreground",
                      }),
                      r.createElement(
                        "div",
                        null,
                        r.createElement(
                          "h3",
                          { className: "font-semibold text-card-foreground" },
                          "Project Planner",
                        ),
                        r.createElement(
                          "p",
                          { className: "text-sm text-muted-foreground" },
                          c.length,
                          " projects",
                        ),
                      ),
                    ),
                  ),
                  r.createElement(
                    "div",
                    {
                      className:
                        "grid min-w-0 grid-cols-1 lg:grid-cols-[minmax(220px,280px)_minmax(0,1fr)]",
                    },
                    r.createElement(
                      "div",
                      {
                        className:
                          "max-h-[35vh] overflow-y-auto border-r border-border/50 p-3 lg:max-h-[calc(100dvh-12rem)]",
                      },
                      r.createElement(
                        "div",
                        { className: "space-y-2" },
                        c.map((e) => {
                          let {
                            category: t,
                            tasks: a,
                            completed: n,
                            progress: l,
                          } = e;
                          const o = t.id === d?.category.id;
                          return r.createElement(
                            "button",
                            {
                              type: "button",
                              key: t.id,
                              onClick: () => m(t.id),
                              className: k(
                                "w-full rounded-lg border border-border/60 p-3 text-left transition-colors hover:bg-secondary/40",
                                o && "border-primary/50 bg-primary/10",
                              ),
                            },
                            r.createElement(
                              "div",
                              { className: "flex items-center gap-2" },
                              r.createElement("span", {
                                className: k(
                                  "h-2.5 w-2.5 flex-shrink-0 rounded-full",
                                  t?.solidBgColor || "",
                                ),
                              }),
                              r.createElement(
                                "span",
                                {
                                  className:
                                    "truncate text-sm font-medium text-card-foreground",
                                },
                                t.label,
                              ),
                            ),
                            r.createElement(
                              "div",
                              {
                                className:
                                  "mt-2 flex items-center justify-between text-xs text-muted-foreground",
                              },
                              r.createElement(
                                "span",
                                null,
                                n,
                                "/",
                                a.length,
                                " done",
                              ),
                              r.createElement("span", null, l, "%"),
                            ),
                            r.createElement(
                              "div",
                              {
                                className:
                                  "mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted/40",
                              },
                              r.createElement("div", {
                                className: k(
                                  "h-full rounded-full",
                                  t?.solidBgColor || "",
                                ),
                                style: { width: `${l}%` },
                              }),
                            ),
                          );
                        }),
                      ),
                    ),
                    r.createElement(
                      "div",
                      { className: "flex flex-col" },
                      d
                        ? r.createElement(
                            r.Fragment,
                            null,
                            r.createElement(
                              "div",
                              {
                                className:
                                  "flex flex-wrap items-center justify-between gap-3 border-b border-border/50 px-4 py-3",
                              },
                              r.createElement(
                                "div",
                                { className: "flex items-center gap-2" },
                                r.createElement("span", {
                                  className: k(
                                    "h-3 w-3 flex-shrink-0 rounded-full",
                                    d.category?.solidBgColor || "",
                                  ),
                                }),
                                r.createElement(
                                  "div",
                                  null,
                                  r.createElement(
                                    "h4",
                                    {
                                      className:
                                        "font-medium text-card-foreground",
                                    },
                                    d.category.label,
                                  ),
                                  r.createElement(
                                    "p",
                                    {
                                      className:
                                        "text-sm text-muted-foreground",
                                    },
                                    d.completed,
                                    "/",
                                    d.tasks.length,
                                    " tasks complete •",
                                    " ",
                                    d.progress,
                                    "%",
                                  ),
                                ),
                              ),
                              r.createElement(
                                A,
                                {
                                  size: "sm",
                                  onClick: () => {
                                    g({
                                      task: null,
                                      category: d?.category.id,
                                      date: (0, b.GP)(new Date(), "yyyy-MM-dd"),
                                    });
                                  },
                                },
                                r.createElement(E.A, {
                                  className: "mr-2 h-4 w-4",
                                }),
                                "Add task",
                              ),
                            ),
                            r.createElement(
                              "div",
                              {
                                className:
                                  "max-h-[calc(100dvh-17rem)] overflow-y-auto",
                              },
                              0 === y.length &&
                                r.createElement(
                                  "div",
                                  {
                                    className:
                                      "p-6 text-center text-sm text-muted-foreground",
                                  },
                                  "No tasks under this project yet.",
                                ),
                              y.map((e) => {
                                const [a, n] = P(e),
                                  l = p === e.id,
                                  s = Ye(e);
                                return r.createElement(
                                  "div",
                                  {
                                    key: e.id,
                                    className:
                                      "group flex items-center gap-3 border-b border-border/50 px-4 py-2.5 last:border-0 hover:bg-secondary/30",
                                  },
                                  r.createElement(
                                    "div",
                                    { className: "min-w-0 flex-1" },
                                    r.createElement(
                                      "p",
                                      {
                                        className: k(
                                          "truncate text-sm font-medium text-card-foreground",
                                          s &&
                                            "text-muted-foreground line-through",
                                        ),
                                      },
                                      e.name,
                                    ),
                                    r.createElement(
                                      "p",
                                      {
                                        className:
                                          "truncate text-xs text-muted-foreground",
                                      },
                                      e.date &&
                                        `${(0, b.GP)((0, x.H)(e.date), "MMM d, yyyy")} • `,
                                      H(a),
                                      " – ",
                                      H(n),
                                      e.priority && ` • ${e.priority} priority`,
                                    ),
                                  ),
                                  e.status &&
                                    r.createElement(
                                      "span",
                                      {
                                        className:
                                          "hidden flex-shrink-0 rounded-full border border-border bg-secondary/40 px-2 py-0.5 text-xs capitalize text-muted-foreground sm:inline-block",
                                      },
                                      e.status,
                                    ),
                                  r.createElement(
                                    "div",
                                    {
                                      className:
                                        "flex flex-shrink-0 items-center gap-1 opacity-100 transition-opacity xl:opacity-0 xl:group-hover:opacity-100",
                                    },
                                    r.createElement(
                                      "button",
                                      {
                                        type: "button",
                                        onClick: () =>
                                          ((e) => {
                                            if (t) return t(e);
                                            g({ task: e, hour: e.startHour });
                                          })(e),
                                        "aria-label": `Edit ${e.name}`,
                                        className:
                                          "flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                                      },
                                      r.createElement(Je.A, {
                                        className: "h-3.5 w-3.5",
                                      }),
                                    ),
                                    r.createElement(
                                      "button",
                                      {
                                        type: "button",
                                        onClick: () => {
                                          return (
                                            (t = e.id),
                                            void (p === t
                                              ? (o(t), h(null))
                                              : h(t))
                                          );
                                          var t;
                                        },
                                        onBlur: () => h(null),
                                        "aria-label": l
                                          ? `Confirm delete ${e.name}`
                                          : `Delete ${e.name}`,
                                        className: k(
                                          "flex h-7 w-7 items-center justify-center rounded-md transition-colors",
                                          l
                                            ? "bg-destructive/20 text-destructive"
                                            : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                                        ),
                                      },
                                      r.createElement(Ve.A, {
                                        className: "h-3.5 w-3.5",
                                      }),
                                    ),
                                  ),
                                );
                              }),
                            ),
                          )
                        : r.createElement(
                            "div",
                            {
                              className:
                                "p-6 text-center text-sm text-muted-foreground",
                            },
                            "No projects available.",
                          ),
                    ),
                  ),
                ),
              ),
              r.createElement(me, {
                open: Boolean(u),
                task: u?.task ?? null,
                defaultHour: u?.hour,
                defaultCategory: u?.category,
                defaultDate: u?.date,
                existingTasks: d?.tasks ?? [],
                onClose: v,
                onSubmit: (e) => {
                  if (u?.task) l(u.task.id, e);
                  else {
                    const t = e.date || u?.date;
                    n(t, { ...e, category: u?.category });
                  }
                  v();
                },
                onDelete: (e) => {
                  (o(e), v());
                },
              }),
            );
          };
        var Xe = a(3999),
          et = a(250),
          tt = a(7677),
          at = a(1436),
          rt = a(5773),
          nt = a(5731),
          lt = a(4718),
          ot = a(8309),
          st = a(7235),
          ct = a(2102),
          it = a(5107);
        function mt() {
          return (
            (mt = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            mt.apply(null, arguments)
          );
        }
        const dt = {
          default: "bg-primary text-primary-foreground",
          secondary: "bg-secondary text-secondary-foreground",
          outline: "border border-border text-foreground",
          destructive: "bg-destructive text-white",
        };
        function ut(e) {
          let { variant: t = "default", className: a, ...n } = e;
          return r.createElement(
            "span",
            mt(
              {
                className: k(
                  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
                  dt[t] || dt.default,
                  a,
                ),
              },
              n,
            ),
          );
        }
        function ft() {
          return (
            (ft = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            ft.apply(null, arguments)
          );
        }
        const bt = (0, r.createContext)(null);
        function gt(e) {
          let { children: t } = e;
          const [a, n] = (0, r.useState)(!1),
            l = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(() => {
              if (a)
                return (
                  document.addEventListener("mousedown", e),
                  document.addEventListener("touchstart", e),
                  () => {
                    (document.removeEventListener("mousedown", e),
                      document.removeEventListener("touchstart", e));
                  }
                );
              function e(e) {
                l.current && !l.current.contains(e.target) && n(!1);
              }
            }, [a]),
            r.createElement(
              bt.Provider,
              { value: { open: a, setOpen: n } },
              r.createElement(
                "div",
                { ref: l, className: "relative inline-block" },
                t,
              ),
            )
          );
        }
        function pt(e) {
          let { asChild: t, children: a, ...n } = e;
          const { open: l, setOpen: o } = (0, r.useContext)(bt),
            s = (e) => {
              (a.props.onClick?.(e), n.onClick?.(e), o(!l));
            };
          return t
            ? (0, r.cloneElement)(a, { ...n, onClick: s })
            : r.createElement(
                "button",
                ft({ type: "button" }, n, { onClick: s }),
                a,
              );
        }
        function ht(e) {
          let { align: t = "start", className: a, children: n } = e;
          const { open: l } = (0, r.useContext)(bt);
          return l
            ? r.createElement(
                "div",
                {
                  className: k(
                    "absolute z-50 mt-2 min-w-[10rem] rounded-lg border border-border bg-card p-1 shadow-xl",
                    "end" === t ? "right-0" : "left-0",
                    a,
                  ),
                },
                n,
              )
            : null;
        }
        function xt(e) {
          let { className: t, onClick: a, children: n, ...l } = e;
          const { setOpen: o } = (0, r.useContext)(bt);
          return r.createElement(
            "button",
            ft(
              {
                type: "button",
                className: k(
                  "flex w-full items-center rounded-md px-2 py-1.5 text-left text-sm text-foreground transition-colors hover:bg-secondary",
                  t,
                ),
                onClick: (e) => {
                  (a?.(e), o(!1));
                },
              },
              l,
            ),
            n,
          );
        }
        function yt(e) {
          let { className: t } = e;
          return r.createElement("div", {
            className: k("my-1 h-px bg-border", t),
          });
        }
        function Et() {
          return (
            (Et = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Et.apply(null, arguments)
          );
        }
        const vt = (0, r.createContext)(null);
        function Nt(e) {
          let { open: t, onOpenChange: a, children: n } = e;
          return r.createElement(
            vt.Provider,
            { value: { open: t, onOpenChange: a } },
            n,
          );
        }
        function wt(e) {
          let { asChild: t, children: a, ...n } = e;
          const { open: l, onOpenChange: o } = (0, r.useContext)(vt),
            s = (e) => {
              (a.props?.onClick?.(e), n.onClick?.(e), o?.(!l));
            };
          return t
            ? (0, r.cloneElement)(a, { ...n, onClick: s })
            : r.createElement(
                "button",
                Et({ type: "button" }, n, { onClick: s }),
                a,
              );
        }
        function kt(e) {
          let { children: t } = e;
          const { open: a } = (0, r.useContext)(vt);
          return a ? r.createElement(r.Fragment, null, t) : null;
        }
        var Ct = a(3627),
          St = a(4979);
        function Mt() {
          return (
            (Mt = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Mt.apply(null, arguments)
          );
        }
        function At(e) {
          let { task: t, onEdit: a, isDraggable: n = !0 } = e;
          const [l, o] = (0, r.useState)(!1),
            { updateTask: s, deleteTask: c } = le(),
            i = $(t.category),
            m = (function (e) {
              if (!e) return F.medium;
              const t = String(e).trim().toLowerCase();
              return (
                F[t] || {
                  label: t.charAt(0).toUpperCase() + t.slice(1),
                  color: "text-slate-300",
                  bgColor: "bg-slate-500/20",
                }
              );
            })(t.priority),
            {
              attributes: d,
              listeners: u,
              setNodeRef: f,
              transform: b,
              transition: g,
              isDragging: p,
            } = (0, Ct.gl)({ id: t.id, disabled: !n }),
            h = { transform: St.Ks.Transform.toString(b), transition: g },
            x = (e) => {
              s(t.id, { status: e });
            };
          return r.createElement(
            "div",
            {
              ref: f,
              style: h,
              className: k(
                "task-card group relative rounded-xl border border-border bg-card p-4 transition-all",
                p && "opacity-50 shadow-2xl",
                "completed" === t.status && "opacity-60",
              ),
            },
            r.createElement(
              "div",
              { className: "flex items-start gap-3" },
              n &&
                r.createElement(
                  "button",
                  Mt({}, d, u, {
                    className:
                      "mt-1 cursor-grab opacity-100 transition-opacity touch-none xl:opacity-0 xl:group-hover:opacity-100",
                  }),
                  r.createElement(at.A, {
                    className: "h-5 w-5 text-muted-foreground",
                  }),
                ),
              r.createElement(
                "button",
                {
                  onClick: () => {
                    const e =
                      "pending" === t.status
                        ? "ongoing"
                        : "ongoing" === t.status
                          ? "completed"
                          : "pending";
                    x(e);
                  },
                  className: k(
                    "mt-1 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors",
                    "completed" === t.status
                      ? "border-emerald-500 bg-emerald-500 text-white"
                      : "ongoing" === t.status
                        ? "border-amber-500 bg-amber-500/20"
                        : "border-muted-foreground/50 hover:border-primary",
                  ),
                },
                "completed" === t.status &&
                  r.createElement(rt.A, { className: "h-3 w-3" }),
                "ongoing" === t.status &&
                  r.createElement(nt.A, {
                    className: "h-2.5 w-2.5 fill-amber-500 text-amber-500",
                  }),
              ),
              r.createElement(
                "div",
                { className: "flex-1 min-w-0" },
                r.createElement(
                  "div",
                  { className: "flex items-start justify-between gap-2" },
                  r.createElement(
                    "div",
                    { className: "flex-1 min-w-0" },
                    r.createElement(
                      "h4",
                      {
                        className: k(
                          "font-medium text-card-foreground truncate",
                          "completed" === t.status && "line-through",
                        ),
                      },
                      t.name,
                    ),
                    t.description &&
                      r.createElement(
                        "p",
                        {
                          className:
                            "mt-1 text-sm text-muted-foreground line-clamp-1",
                        },
                        t.description,
                      ),
                  ),
                  r.createElement(
                    gt,
                    null,
                    r.createElement(
                      pt,
                      { asChild: !0 },
                      r.createElement(
                        A,
                        {
                          variant: "ghost",
                          size: "icon",
                          className:
                            "h-8 w-8 opacity-100 transition-opacity xl:opacity-0 xl:group-hover:opacity-100",
                        },
                        r.createElement(lt.A, { className: "h-4 w-4" }),
                      ),
                    ),
                    r.createElement(
                      ht,
                      { align: "end" },
                      r.createElement(
                        xt,
                        { onClick: () => a(t) },
                        r.createElement(Je.A, { className: "mr-2 h-4 w-4" }),
                        "Edit",
                      ),
                      r.createElement(yt, null),
                      r.createElement(
                        xt,
                        { onClick: () => x("pending") },
                        r.createElement(ot.A, { className: "mr-2 h-4 w-4" }),
                        "Mark as Pending",
                      ),
                      r.createElement(
                        xt,
                        { onClick: () => x("ongoing") },
                        r.createElement(nt.A, { className: "mr-2 h-4 w-4" }),
                        "Mark as Ongoing",
                      ),
                      r.createElement(
                        xt,
                        { onClick: () => x("completed") },
                        r.createElement(rt.A, { className: "mr-2 h-4 w-4" }),
                        "Mark as Completed",
                      ),
                      r.createElement(yt, null),
                      r.createElement(
                        xt,
                        {
                          onClick: () => c(t.id),
                          className: "text-destructive",
                        },
                        r.createElement(Ve.A, { className: "mr-2 h-4 w-4" }),
                        "Delete",
                      ),
                    ),
                  ),
                ),
                r.createElement(
                  "div",
                  { className: "mt-3 flex flex-wrap items-center gap-2" },
                  void 0 !== t.ticketId &&
                    null !== t.ticketId &&
                    r.createElement(
                      ut,
                      {
                        variant: "outline",
                        className:
                          "text-xs font-mono text-muted-foreground border-border/60",
                      },
                      "#",
                      t.ticketId,
                    ),
                  r.createElement(
                    ut,
                    {
                      variant: "secondary",
                      className: k("text-xs", i?.bgColor, i?.color),
                    },
                    i?.name || "Other",
                  ),
                  r.createElement(
                    ut,
                    {
                      variant: "secondary",
                      className: k("text-xs", m?.bgColor, m?.color),
                    },
                    m?.label || "Medium",
                  ),
                  r.createElement(
                    "div",
                    {
                      className:
                        "flex items-center gap-1 text-xs text-muted-foreground",
                    },
                    r.createElement(st.A, { className: "h-3 w-3" }),
                    r.createElement(
                      "span",
                      null,
                      H(t.startHour),
                      " -",
                      " ",
                      H(t.startHour + t.duration),
                    ),
                  ),
                ),
                t.notes &&
                  r.createElement(
                    Nt,
                    { open: l, onOpenChange: o },
                    r.createElement(
                      wt,
                      { asChild: !0 },
                      r.createElement(
                        A,
                        {
                          variant: "ghost",
                          size: "sm",
                          className:
                            "mt-2 h-auto p-0 text-xs text-muted-foreground hover:text-foreground",
                        },
                        l
                          ? r.createElement(
                              r.Fragment,
                              null,
                              r.createElement(ct.A, {
                                className: "mr-1 h-3 w-3",
                              }),
                              "Hide notes",
                            )
                          : r.createElement(
                              r.Fragment,
                              null,
                              r.createElement(it.A, {
                                className: "mr-1 h-3 w-3",
                              }),
                              "Show notes",
                            ),
                      ),
                    ),
                    r.createElement(
                      kt,
                      null,
                      r.createElement(
                        "div",
                        {
                          className:
                            "mt-2 rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground",
                        },
                        t.notes,
                      ),
                    ),
                  ),
              ),
            ),
            r.createElement("div", {
              className: k(
                "absolute left-0 top-4 bottom-4 w-1 rounded-full",
                i?.solidBgColor || "",
              ),
            }),
          );
        }
        const Lt = new Set(["completed", "done"]),
          Tt = (e) => Lt.has(String(e.status || "").toLowerCase()),
          Dt = function (e) {
            let { onEditTask: t, onAddTask: a } = e;
            const {
                selectedDate: n,
                setSelectedDate: l,
                getTasksForDate: o,
                addTask: s,
                updateTask: c,
                deleteTask: i,
              } = le(),
              m = (0, b.GP)(n, "yyyy-MM-dd"),
              d = (0, h.r)(n, new Date()),
              [u, p] = (0, r.useState)(null),
              y = (0, r.useMemo)(() => o(m), [o, m]),
              v = (0, r.useMemo)(
                () =>
                  [...y].sort((e, t) => {
                    const a = Tt(e) ? 1 : 0,
                      r = Tt(t) ? 1 : 0;
                    return a !== r ? a - r : e.startHour - t.startHour;
                  }),
                [y],
              ),
              N = y.filter(Tt).length,
              w = (e) => {
                if (t) return t(e);
                p({ task: e, hour: e.startHour });
              },
              k = () => p(null);
            return r.createElement(
              "section",
              { id: "todo", className: "min-h-full bg-[#000000]" },
              r.createElement(f, {
                hexRadius: 60,
                viewWidth: 900,
                viewHeight: 600,
              }),
              r.createElement(
                "div",
                {
                  className:
                    "container mx-auto px-3 pb-6 sm:px-4 sm:pb-8 md:px-6",
                },
                r.createElement(
                  "div",
                  {
                    className:
                      "overflow-hidden rounded-xl border border-border bg-card",
                  },
                  r.createElement(
                    "div",
                    {
                      className:
                        "flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/30 px-4 py-3",
                    },
                    r.createElement(
                      "div",
                      null,
                      r.createElement(
                        "h3",
                        { className: "font-semibold text-card-foreground" },
                        "To-Do List",
                      ),
                      r.createElement(
                        "p",
                        { className: "text-sm text-muted-foreground" },
                        (0, b.GP)(n, "EEEE, MMMM d"),
                        " • ",
                        N,
                        "/",
                        y.length,
                        " done",
                      ),
                    ),
                    r.createElement(
                      "div",
                      { className: "flex items-center gap-2" },
                      r.createElement(
                        "button",
                        {
                          type: "button",
                          onClick: () => l((e) => (0, g.e)(e, 1)),
                          "aria-label": "Previous day",
                          className:
                            "flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                        },
                        r.createElement(et.A, { className: "h-4 w-4" }),
                      ),
                      r.createElement("input", {
                        type: "date",
                        value: m,
                        onChange: (e) => {
                          e.target.value && l((0, x.H)(e.target.value));
                        },
                        className:
                          "h-8 rounded-lg border border-border bg-secondary/40 px-2 text-sm text-foreground [color-scheme:dark] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                      }),
                      r.createElement(
                        "button",
                        {
                          type: "button",
                          onClick: () => l((e) => (0, Xe.f)(e, 1)),
                          "aria-label": "Next day",
                          className:
                            "flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                        },
                        r.createElement(tt.A, { className: "h-4 w-4" }),
                      ),
                      !d &&
                        r.createElement(
                          A,
                          {
                            variant: "ghost",
                            size: "sm",
                            onClick: () => l(new Date()),
                          },
                          "Today",
                        ),
                    ),
                    r.createElement(
                      A,
                      {
                        size: "sm",
                        onClick: () => {
                          if (a) return a(new Date().getHours());
                          p({ task: null, hour: new Date().getHours() });
                        },
                      },
                      r.createElement(E.A, { className: "mr-2 h-4 w-4" }),
                      "Add task",
                    ),
                  ),
                  y.length > 0 &&
                    r.createElement(
                      "div",
                      { className: "h-1 w-full bg-muted/30" },
                      r.createElement("div", {
                        className: "h-full bg-primary transition-all",
                        style: {
                          width: `${Math.round((N / y.length) * 100)}%`,
                        },
                      }),
                    ),
                  r.createElement(
                    "div",
                    {
                      className:
                        "max-h-[calc(100dvh-13rem)] overflow-y-auto sm:max-h-[calc(100dvh-15rem)]",
                    },
                    0 === v.length &&
                      r.createElement(
                        "div",
                        {
                          className:
                            "p-6 text-center text-sm text-muted-foreground",
                        },
                        "Nothing on the list for this day. Add a task to get started.",
                      ),
                    r.createElement(
                      "div",
                      { className: "space-y-2 p-3 sm:p-4" },
                      v.map((e) =>
                        r.createElement(At, {
                          key: e.id,
                          task: e,
                          onEdit: w,
                          isDraggable: !1,
                        }),
                      ),
                    ),
                  ),
                ),
              ),
              r.createElement(me, {
                open: Boolean(u),
                task: u?.task ?? null,
                defaultHour: u?.hour,
                defaultDate: m,
                existingTasks: y,
                onClose: k,
                onSubmit: (e) => {
                  (u?.task ? c(u.task.id, e) : s(e.date || m, e), k());
                },
                onDelete: (e) => {
                  (i(e), k());
                },
              }),
            );
          };
        var jt = a(2307),
          Pt = a(3128),
          _t = a(3375);
        const Ht = function (e) {
          let { onEditTask: t, onAddTask: a } = e;
          const {
              selectedDate: n,
              setSelectedDate: l,
              getTasksForDate: o,
              moveTask: s,
              addTask: c,
              updateTask: i,
              deleteTask: m,
            } = le(),
            d = (0, b.GP)(n, "yyyy-MM-dd"),
            u = (0, h.r)(n, new Date()),
            [p, y] = (0, r.useState)(null),
            v = (e) => {
              if (a) return a(e);
              y({ task: null, hour: e });
            },
            N = (e) => {
              if (t) return t(e);
              y({ task: e, hour: e.startHour });
            },
            w = () => y(null),
            C = (0, _t.FR)(
              (0, _t.MS)(_t.AN, { activationConstraint: { distance: 8 } }),
              (0, _t.MS)(_t.uN),
            ),
            S = (0, r.useMemo)(() => o(d), [o, d]),
            M = (0, r.useMemo)(() => {
              const e = {};
              return (
                D.forEach((t) => {
                  let { index: a } = t;
                  e[a] = S.filter(
                    (e) => Math.round(4 * Number(e.startHour || 0)) === a,
                  );
                }),
                e
              );
            }, [S]),
            L = (0, r.useMemo)(() => {
              const e = new Map();
              return (
                S.forEach((t) => {
                  const [a, r] = j(t);
                  for (let n = a; n < r; n++)
                    e.has(n) || e.set(n, { task: t, isStart: n === a });
                }),
                e
              );
            }, [S]),
            T =
              4 * new Date().getHours() +
              Math.floor(new Date().getMinutes() / 15);
          return r.createElement(
            "section",
            { id: "home", className: "min-h-full bg-[#000000]" },
            r.createElement(f, {
              hexRadius: 60,
              viewWidth: 900,
              viewHeight: 600,
            }),
            r.createElement(
              _t.Mp,
              {
                sensors: C,
                collisionDetection: _t.fp,
                onDragEnd: (e) => {
                  const { active: t, over: a } = e;
                  if (!a) return;
                  const r = t.id,
                    n = parseInt(a.id, 10);
                  if (isNaN(n)) return;
                  const l = S.find((e) => e.id === r);
                  if (!l) return;
                  const o = { ...l, startHour: n / 4 };
                  S.some((e) => e.id !== r && _(o, e)) || s(r, n / 4);
                },
              },
              r.createElement(
                "div",
                {
                  className:
                    "container mx-auto px-3 pb-6 sm:px-4 sm:pb-8 md:px-6",
                },
                r.createElement(
                  "div",
                  {
                    className:
                      "overflow-hidden rounded-xl border border-border bg-card",
                  },
                  r.createElement(
                    "div",
                    {
                      className:
                        "flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/30 px-4 py-3",
                    },
                    r.createElement(
                      "div",
                      null,
                      r.createElement(
                        "h3",
                        { className: "font-semibold text-card-foreground" },
                        "Daily Timeline",
                      ),
                      r.createElement(
                        "p",
                        { className: "text-sm text-muted-foreground" },
                        (0, b.GP)(n, "EEEE, MMMM d"),
                        " • ",
                        S.length,
                        " tasks scheduled",
                      ),
                    ),
                    r.createElement(
                      "div",
                      {
                        className:
                          "flex flex-wrap items-center justify-end gap-2 sm:flex-nowrap",
                      },
                      r.createElement(
                        "button",
                        {
                          type: "button",
                          onClick: () => l((e) => (0, g.e)(e, 1)),
                          "aria-label": "Previous day",
                          className:
                            "flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                        },
                        r.createElement(et.A, { className: "h-4 w-4" }),
                      ),
                      r.createElement("input", {
                        type: "date",
                        value: d,
                        onChange: (e) => {
                          e.target.value && l((0, x.H)(e.target.value));
                        },
                        className:
                          "h-8 rounded-lg border border-border bg-secondary/40 px-2 text-sm text-foreground [color-scheme:dark] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                      }),
                      r.createElement(
                        "button",
                        {
                          type: "button",
                          onClick: () => l((e) => (0, Xe.f)(e, 1)),
                          "aria-label": "Next day",
                          className:
                            "flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                        },
                        r.createElement(tt.A, { className: "h-4 w-4" }),
                      ),
                      !u &&
                        r.createElement(
                          A,
                          {
                            variant: "ghost",
                            size: "sm",
                            onClick: () => l(new Date()),
                          },
                          "Today",
                        ),
                    ),
                    r.createElement(
                      A,
                      {
                        size: "sm",
                        onClick: () =>
                          v(
                            ((e) => {
                              for (let t = 0; t < D.length; t++) {
                                const a = (e + t) % D.length;
                                if (!L.has(a)) return D[a].time;
                              }
                              return D[e]?.time ?? 9;
                            })(T),
                          ),
                      },
                      r.createElement(E.A, { className: "mr-2 h-4 w-4" }),
                      "Add task",
                    ),
                  ),
                  r.createElement(
                    "div",
                    {
                      className:
                        "max-h-[calc(100dvh-13rem)] overflow-y-auto sm:max-h-[calc(100dvh-15rem)]",
                    },
                    D.map((e) => {
                      let { time: t, index: a } = e;
                      const n = M[a] || [],
                        l = L.get(a),
                        o = l && !l.isStart,
                        s =
                          T === a && (0, b.GP)(new Date(), "yyyy-MM-dd") === d;
                      return r.createElement(
                        "div",
                        {
                          key: a,
                          id: a.toString(),
                          className: k(
                            "group relative flex border-b border-border/50 last:border-0",
                            s && "bg-primary/5",
                          ),
                        },
                        r.createElement(
                          "div",
                          {
                            className: k(
                              "w-20 flex-shrink-0 border-r border-border/50 p-2 text-right",
                              s && "text-primary font-medium",
                            ),
                          },
                          r.createElement(
                            "span",
                            { className: "text-xs sm:text-sm" },
                            H(t),
                          ),
                        ),
                        s &&
                          r.createElement(
                            "div",
                            {
                              className:
                                "absolute left-20 right-0 top-1/2 -translate-y-1/2 pointer-events-none",
                            },
                            r.createElement(
                              "div",
                              { className: "flex items-center" },
                              r.createElement("div", {
                                className: "h-2 w-2 rounded-full bg-primary",
                              }),
                              r.createElement("div", {
                                className: "h-px flex-1 bg-primary",
                              }),
                            ),
                          ),
                        r.createElement(
                          "div",
                          {
                            className:
                              "min-h-[56px] flex-1 p-2 sm:min-h-[64px] sm:p-3",
                          },
                          r.createElement(
                            Ct.gB,
                            { items: n.map((e) => e.id), strategy: Ct._G },
                            r.createElement(
                              "div",
                              { className: "space-y-2" },
                              n.map((e) =>
                                r.createElement(At, {
                                  key: e.id,
                                  task: e,
                                  onEdit: N,
                                }),
                              ),
                            ),
                          ),
                          0 === n.length &&
                            o &&
                            r.createElement(
                              "div",
                              {
                                className:
                                  "flex h-8 items-center gap-2 rounded-lg border border-dashed border-border/60 bg-muted/20 px-3 text-xs text-muted-foreground",
                              },
                              r.createElement("span", {
                                className: k(
                                  "h-1.5 w-1.5 rounded-full",
                                  $(l.task.category)?.solidBgColor || "",
                                ),
                              }),
                              l.task.name,
                              " continues",
                            ),
                          0 === n.length &&
                            !o &&
                            r.createElement(
                              A,
                              {
                                variant: "ghost",
                                size: "sm",
                                onClick: () => v(t),
                                className:
                                  "h-8 w-full border border-dashed border-border text-muted-foreground opacity-100 transition-opacity hover:text-foreground xl:opacity-0 xl:group-hover:opacity-100",
                              },
                              r.createElement(E.A, {
                                className: "mr-2 h-4 w-4",
                              }),
                              "Add task at ",
                              H(t),
                            ),
                        ),
                      );
                    }),
                  ),
                ),
              ),
              r.createElement(me, {
                open: Boolean(p),
                task: p?.task ?? null,
                defaultHour: p?.hour,
                defaultDate: d,
                existingTasks: S,
                onClose: w,
                onSubmit: (e) => {
                  (p?.task ? i(p.task.id, e) : c(e.date || d, e), w());
                },
                onDelete: (e) => {
                  (m(e), w());
                },
              }),
            ),
          );
        };
        var Bt = a(2150),
          Ot = a(7423),
          zt = a(4883),
          $t = a(2528),
          Ft = a(2483),
          Rt = a(1359),
          It = a(5855),
          Gt = a(2138);
        const Ut = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          Wt = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          qt = function (e) {
            let { onNavigateToTimeline: t } = e;
            const {
                selectedDate: a,
                setSelectedDate: n,
                getTasksForDate: l,
              } = le(),
              [o, s] = (0, r.useState)(() => (0, Bt.w)(a || new Date())),
              [c, i] = (0, r.useState)(a || new Date()),
              m = (0, r.useMemo)(() => {
                const e = (0, $t.k)((0, Bt.w)(o)),
                  t = (0, Ft.$)((0, Rt.p)(o));
                return (0, p.k)({ start: e, end: t });
              }, [o]),
              d = (0, r.useMemo)(() => {
                const e = {};
                return (
                  m.forEach((t) => {
                    const a = (0, b.GP)(t, "yyyy-MM-dd");
                    e[a] = l(a) || [];
                  }),
                  e
                );
              }, [m, l]),
              u = (0, b.GP)(c, "yyyy-MM-dd"),
              g = d[u] || [],
              x = (e) => {
                (n(e), t && t());
              },
              y = new Date().getFullYear(),
              E = (0, r.useMemo)(
                () => Array.from({ length: 21 }, (e, t) => y - 10 + t),
                [y],
              );
            return r.createElement(
              "section",
              { id: "calendar", className: "min-h-full bg-[#000000]" },
              r.createElement(f, {
                hexRadius: 60,
                viewWidth: 900,
                viewHeight: 600,
              }),
              r.createElement(
                "div",
                {
                  className:
                    "container mx-auto px-3 pb-6 sm:px-4 sm:pb-8 md:px-6",
                },
                r.createElement(
                  "div",
                  {
                    className:
                      "overflow-hidden rounded-xl border border-border bg-card",
                  },
                  r.createElement(
                    "div",
                    {
                      className:
                        "flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/30 px-4 py-3",
                    },
                    r.createElement(
                      "div",
                      null,
                      r.createElement(
                        "h3",
                        { className: "font-semibold text-card-foreground" },
                        "Calendar",
                      ),
                      r.createElement(
                        "p",
                        { className: "text-sm text-muted-foreground" },
                        (0, b.GP)(o, "MMMM yyyy"),
                      ),
                    ),
                    r.createElement(
                      "div",
                      {
                        className:
                          "flex flex-wrap items-center justify-end gap-2 sm:flex-nowrap",
                      },
                      r.createElement(
                        "button",
                        {
                          type: "button",
                          onClick: () => s((e) => (0, Ot.a)(e, 1)),
                          "aria-label": "Previous month",
                          className:
                            "flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                        },
                        r.createElement(et.A, { className: "h-4 w-4" }),
                      ),
                      r.createElement(
                        "select",
                        {
                          value: o.getMonth(),
                          onChange: (e) => {
                            const t = Number(e.target.value);
                            s((e) => new Date(e.getFullYear(), t, 1));
                          },
                          className:
                            "h-8 rounded-lg border border-border bg-secondary/40 px-2 text-sm text-foreground [color-scheme:dark] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                        },
                        Wt.map((e, t) =>
                          r.createElement("option", { key: e, value: t }, e),
                        ),
                      ),
                      r.createElement(
                        "select",
                        {
                          value: o.getFullYear(),
                          onChange: (e) => {
                            const t = Number(e.target.value);
                            s((e) => new Date(t, e.getMonth(), 1));
                          },
                          className:
                            "h-8 rounded-lg border border-border bg-secondary/40 px-2 text-sm text-foreground [color-scheme:dark] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                        },
                        E.map((e) =>
                          r.createElement("option", { key: e, value: e }, e),
                        ),
                      ),
                      r.createElement(
                        "button",
                        {
                          type: "button",
                          onClick: () => s((e) => (0, zt.P)(e, 1)),
                          "aria-label": "Next month",
                          className:
                            "flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                        },
                        r.createElement(tt.A, { className: "h-4 w-4" }),
                      ),
                      !(0, It.t)(o, new Date()) &&
                        r.createElement(
                          A,
                          {
                            variant: "ghost",
                            size: "sm",
                            onClick: () => s((0, Bt.w)(new Date())),
                          },
                          "This month",
                        ),
                    ),
                  ),
                  r.createElement(
                    "div",
                    {
                      className:
                        "grid min-w-0 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)]",
                    },
                    r.createElement(
                      "div",
                      { className: "border-r border-border/50" },
                      r.createElement(
                        "div",
                        {
                          className:
                            "grid grid-cols-7 border-b border-border/50",
                        },
                        Ut.map((e) =>
                          r.createElement(
                            "div",
                            {
                              key: e,
                              className:
                                "p-2 text-center text-xs font-medium text-muted-foreground",
                            },
                            e,
                          ),
                        ),
                      ),
                      r.createElement(
                        "div",
                        { className: "grid grid-cols-7" },
                        m.map((e) => {
                          const t = (0, b.GP)(e, "yyyy-MM-dd"),
                            a = (0, It.t)(e, o),
                            n = (0, h.r)(e, c),
                            l = (0, Gt.c)(e),
                            { dots: s, overflow: m } = ((e) => {
                              const t = d[e] || [],
                                a = new Set(),
                                r = [];
                              for (const e of t)
                                if (
                                  !a.has(e.category) &&
                                  (a.add(e.category),
                                  r.push($(e.category)),
                                  r.length >= 4)
                                )
                                  break;
                              return {
                                dots: r,
                                overflow: Math.max(0, t.length - r.length),
                              };
                            })(t),
                            u = s.length > 0;
                          return r.createElement(
                            "button",
                            {
                              type: "button",
                              key: t,
                              onClick: () =>
                                ((e) => {
                                  i(e);
                                })(e),
                              onDoubleClick: () => x(e),
                              title: u
                                ? `${s.length + m} task${s.length + m === 1 ? "" : "s"} • double-click to open timeline`
                                : "Double-click to open timeline",
                              className: k(
                                "group relative flex h-16 min-w-0 flex-col items-start gap-1 border-b border-r border-border/50 p-1.5 text-left transition-colors last:border-r-0 hover:bg-secondary/40 sm:h-24 sm:p-2",
                                !a && "opacity-40",
                                n &&
                                  "bg-primary/10 ring-1 ring-inset ring-primary/40",
                              ),
                            },
                            r.createElement(
                              "span",
                              {
                                className: k(
                                  "flex h-6 w-6 items-center justify-center rounded-full text-xs",
                                  l &&
                                    "bg-primary font-semibold text-primary-foreground",
                                  !l && "text-foreground",
                                ),
                              },
                              (0, b.GP)(e, "d"),
                            ),
                            u &&
                              r.createElement(
                                "div",
                                {
                                  className:
                                    "flex flex-wrap items-center gap-1",
                                },
                                s.map((e, t) =>
                                  r.createElement("span", {
                                    key: t,
                                    className: k(
                                      "h-1.5 w-1.5 rounded-full",
                                      e?.solidBgColor || "",
                                    ),
                                  }),
                                ),
                                m > 0 &&
                                  r.createElement(
                                    "span",
                                    {
                                      className:
                                        "text-[10px] leading-none text-muted-foreground",
                                    },
                                    "+",
                                    m,
                                  ),
                              ),
                          );
                        }),
                      ),
                    ),
                    r.createElement(
                      "div",
                      { className: "flex flex-col" },
                      r.createElement(
                        "div",
                        { className: "border-b border-border/50 px-4 py-3" },
                        r.createElement(
                          "h4",
                          { className: "font-medium text-card-foreground" },
                          (0, b.GP)(c, "EEEE, MMMM d"),
                        ),
                        r.createElement(
                          "p",
                          { className: "text-sm text-muted-foreground" },
                          g.length,
                          " task",
                          1 === g.length ? "" : "s",
                          " scheduled",
                        ),
                      ),
                      r.createElement(
                        "div",
                        {
                          className:
                            "flex-1 space-y-2 overflow-y-auto p-4 lg:max-h-[calc(100dvh-17rem)]",
                        },
                        0 === g.length &&
                          r.createElement(
                            "p",
                            { className: "text-sm text-muted-foreground" },
                            "No tasks for this day.",
                          ),
                        g.map((e) => {
                          const t = $(e.category);
                          return r.createElement(
                            "div",
                            {
                              key: e.id,
                              className:
                                "flex items-center gap-2 rounded-lg border border-border/60 bg-muted/20 px-3 py-2",
                            },
                            r.createElement("span", {
                              className: k(
                                "h-2 w-2 flex-shrink-0 rounded-full",
                                t?.solidBgColor || "",
                              ),
                            }),
                            r.createElement(
                              "div",
                              { className: "min-w-0 flex-1" },
                              r.createElement(
                                "p",
                                {
                                  className:
                                    "truncate text-sm font-medium text-card-foreground",
                                },
                                e.name,
                              ),
                              r.createElement(
                                "p",
                                { className: "text-xs text-muted-foreground" },
                                t.label,
                              ),
                            ),
                          );
                        }),
                      ),
                      r.createElement(
                        "div",
                        { className: "border-t border-border/50 p-3" },
                        r.createElement(
                          A,
                          {
                            size: "sm",
                            className: "w-full",
                            onClick: () => x(c),
                          },
                          "Open in Timeline",
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            );
          };
        var Zt = a(6632),
          Jt = a(3241),
          Vt = a(8645);
        const Kt = "all",
          Yt = {
            high: "bg-destructive/15 text-destructive border-destructive/30",
            medium: "bg-amber-500/15 text-amber-500 border-amber-500/30",
            low: "bg-emerald-500/15 text-emerald-500 border-emerald-500/30",
          },
          Qt = {
            completed:
              "bg-emerald-500/15 text-emerald-500 border-emerald-500/30",
            done: "bg-emerald-500/15 text-emerald-500 border-emerald-500/30",
            "in-progress": "bg-blue-500/15 text-blue-500 border-blue-500/30",
            "in progress": "bg-blue-500/15 text-blue-500 border-blue-500/30",
            pending: "bg-muted text-muted-foreground border-border",
            cancelled:
              "bg-muted text-muted-foreground border-border line-through",
          };
        function Xt(e) {
          let { value: t, styleMap: a } = e;
          if (!t)
            return r.createElement(
              "span",
              { className: "text-xs text-muted-foreground" },
              "—",
            );
          const n = String(t).toLowerCase();
          return r.createElement(
            "span",
            {
              className: k(
                "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium capitalize",
                a[n] || "bg-secondary/40 text-foreground border-border",
              ),
            },
            t,
          );
        }
        const ea = function (e) {
            let { onEditTask: t, onAddTask: a } = e;
            const {
                getAllTasks: n,
                addTask: l,
                updateTask: o,
                deleteTask: s,
              } = le(),
              [i, m] = (0, r.useState)(null),
              [d, u] = (0, r.useState)(null),
              [g, p] = (0, r.useState)(Kt),
              [h, y] = (0, r.useState)(Kt),
              [v, N] = (0, r.useState)(Kt),
              [w, C] = (0, r.useState)(""),
              [S, M] = (0, r.useState)(""),
              [L, T] = (0, r.useState)("asc"),
              D = (0, r.useMemo)(() => n?.() || [], [n]),
              j = (0, r.useMemo)(() => {
                const e = new Map();
                return (
                  D.forEach((t) => {
                    e.has(t.category) || e.set(t.category, $(t.category));
                  }),
                  Array.from(e.entries())
                );
              }, [D]),
              _ = (0, r.useMemo)(
                () =>
                  Array.from(new Set(D.map((e) => e.priority).filter(Boolean))),
                [D],
              ),
              B = (0, r.useMemo)(
                () =>
                  Array.from(new Set(D.map((e) => e.status).filter(Boolean))),
                [D],
              ),
              O = g !== Kt || h !== Kt || v !== Kt || w || S,
              z = (0, r.useMemo)(
                () =>
                  D.filter(
                    (e) =>
                      !(
                        (g !== Kt && e.category !== g) ||
                        (h !== Kt && e.priority !== h) ||
                        (v !== Kt && e.status !== v) ||
                        (w && e.date < w) ||
                        (S && e.date > S)
                      ),
                  ),
                [D, g, h, v, w, S],
              ),
              F = (0, r.useMemo)(() => {
                const e = z.map((e) => ({
                  task: e,
                  sortKey:
                    (e.date ? (0, x.H)(e.date).getTime() : 0) +
                    36e5 * (e.startHour || 0),
                }));
                return (
                  e.sort((e, t) =>
                    "asc" === L ? e.sortKey - t.sortKey : t.sortKey - e.sortKey,
                  ),
                  e.map((e) => {
                    let { task: t } = e;
                    return t;
                  })
                );
              }, [z, L]),
              R = () => m(null);
            return r.createElement(
              "section",
              { id: "list", className: "min-h-full bg-[#000000]" },
              r.createElement(f, {
                hexRadius: 60,
                viewWidth: 900,
                viewHeight: 600,
              }),
              r.createElement(
                "div",
                {
                  className:
                    "container mx-auto px-3 pb-6 sm:px-4 sm:pb-8 md:px-6",
                },
                r.createElement(
                  "div",
                  {
                    className:
                      "overflow-hidden rounded-xl border border-border bg-card",
                  },
                  r.createElement(
                    "div",
                    {
                      className:
                        "flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/30 px-4 py-3",
                    },
                    r.createElement(
                      "div",
                      null,
                      r.createElement(
                        "h3",
                        { className: "font-semibold text-card-foreground" },
                        "All Tasks",
                      ),
                      r.createElement(
                        "p",
                        { className: "text-sm text-muted-foreground" },
                        F.length,
                        " of ",
                        D.length,
                        " tasks",
                      ),
                    ),
                    r.createElement(
                      A,
                      {
                        size: "sm",
                        onClick: () => {
                          if (a) return a();
                          m({
                            task: null,
                            hour: new Date().getHours(),
                            date: (0, b.GP)(new Date(), "yyyy-MM-dd"),
                          });
                        },
                      },
                      r.createElement(E.A, { className: "mr-2 h-4 w-4" }),
                      "Add task",
                    ),
                  ),
                  r.createElement(
                    "div",
                    {
                      className:
                        "flex flex-wrap items-center gap-2 border-b border-border/50 px-4 py-3",
                    },
                    r.createElement(
                      "select",
                      {
                        value: g,
                        onChange: (e) => p(e.target.value),
                        className:
                          "h-8 rounded-lg border border-border bg-secondary/40 px-2 text-sm text-foreground [color-scheme:dark] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                      },
                      r.createElement(
                        "option",
                        { value: Kt },
                        "All categories",
                      ),
                      j.map((e) => {
                        let [t, a] = e;
                        return r.createElement(
                          "option",
                          { key: t, value: t },
                          a.label,
                        );
                      }),
                    ),
                    r.createElement(
                      "select",
                      {
                        value: h,
                        onChange: (e) => y(e.target.value),
                        className:
                          "h-8 rounded-lg border border-border bg-secondary/40 px-2 text-sm text-foreground capitalize [color-scheme:dark] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                      },
                      r.createElement(
                        "option",
                        { value: Kt },
                        "All priorities",
                      ),
                      _.map((e) =>
                        r.createElement(
                          "option",
                          { key: e, value: e, className: "capitalize" },
                          e,
                        ),
                      ),
                    ),
                    r.createElement(
                      "select",
                      {
                        value: v,
                        onChange: (e) => N(e.target.value),
                        className:
                          "h-8 rounded-lg border border-border bg-secondary/40 px-2 text-sm text-foreground capitalize [color-scheme:dark] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                      },
                      r.createElement("option", { value: Kt }, "All statuses"),
                      B.map((e) =>
                        r.createElement(
                          "option",
                          { key: e, value: e, className: "capitalize" },
                          e,
                        ),
                      ),
                    ),
                    r.createElement(
                      "div",
                      { className: "flex items-center gap-1" },
                      r.createElement("input", {
                        type: "date",
                        value: w,
                        onChange: (e) => C(e.target.value),
                        "aria-label": "From date",
                        className:
                          "h-8 rounded-lg border border-border bg-secondary/40 px-2 text-sm text-foreground [color-scheme:dark] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                      }),
                      r.createElement(
                        "span",
                        { className: "text-xs text-muted-foreground" },
                        "to",
                      ),
                      r.createElement("input", {
                        type: "date",
                        value: S,
                        onChange: (e) => M(e.target.value),
                        "aria-label": "To date",
                        className:
                          "h-8 rounded-lg border border-border bg-secondary/40 px-2 text-sm text-foreground [color-scheme:dark] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                      }),
                    ),
                    r.createElement(
                      "button",
                      {
                        type: "button",
                        onClick: () => T((e) => ("asc" === e ? "desc" : "asc")),
                        className:
                          "flex h-8 items-center gap-1.5 rounded-lg border border-border px-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                        "aria-label":
                          "Sort by date " +
                          ("asc" === L ? "ascending" : "descending"),
                      },
                      "asc" === L
                        ? r.createElement(Zt.A, { className: "h-3.5 w-3.5" })
                        : r.createElement(Jt.A, { className: "h-3.5 w-3.5" }),
                      "Date",
                      r.createElement(Vt.A, {
                        className: "h-3 w-3 opacity-50",
                      }),
                    ),
                    O &&
                      r.createElement(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            (p(Kt), y(Kt), N(Kt), C(""), M(""));
                          },
                          className:
                            "flex h-8 items-center gap-1 rounded-lg px-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                        },
                        r.createElement(c.A, { className: "h-3.5 w-3.5" }),
                        "Clear filters",
                      ),
                  ),
                  r.createElement(
                    "div",
                    {
                      className:
                        "hidden border-b border-border/50 px-4 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground lg:grid lg:grid-cols-[1fr_10rem_9rem_6.5rem_7rem_5rem]",
                    },
                    r.createElement("span", null, "Title"),
                    r.createElement("span", null, "Date & Time"),
                    r.createElement("span", null, "Category"),
                    r.createElement("span", null, "Priority"),
                    r.createElement("span", null, "Status"),
                    r.createElement(
                      "span",
                      { className: "text-right" },
                      "Actions",
                    ),
                  ),
                  r.createElement(
                    "div",
                    { className: "max-h-[calc(100dvh-17rem)] overflow-y-auto" },
                    0 === F.length &&
                      r.createElement(
                        "div",
                        {
                          className:
                            "p-6 text-center text-sm text-muted-foreground",
                        },
                        0 === D.length
                          ? "No tasks yet."
                          : "No tasks match the current filters.",
                      ),
                    F.map((e) => {
                      const a = $(e.category),
                        [n, l] = P(e),
                        o = d === e.id;
                      return r.createElement(
                        "div",
                        {
                          key: e.id,
                          className:
                            "group grid grid-cols-1 gap-2 border-b border-border/50 px-4 py-3 last:border-0 hover:bg-secondary/30 lg:grid-cols-[1fr_10rem_9rem_6.5rem_7rem_5rem] lg:items-center lg:gap-2",
                        },
                        r.createElement(
                          "div",
                          { className: "flex min-w-0 items-center gap-2" },
                          r.createElement("span", {
                            className: k(
                              "h-2 w-2 flex-shrink-0 rounded-full lg:hidden",
                              a?.solidBgColor || "",
                            ),
                          }),
                          r.createElement(
                            "p",
                            {
                              className:
                                "truncate text-sm font-medium text-card-foreground",
                            },
                            e.name,
                          ),
                        ),
                        r.createElement(
                          "div",
                          { className: "text-sm text-muted-foreground" },
                          e.date &&
                            r.createElement(
                              "span",
                              { className: "mr-1.5" },
                              (0, b.GP)((0, x.H)(e.date), "MMM d, yyyy"),
                            ),
                          r.createElement("span", null, H(n), " – ", H(l)),
                        ),
                        r.createElement(
                          "div",
                          { className: "hidden items-center gap-1.5 lg:flex" },
                          r.createElement("span", {
                            className: k(
                              "h-1.5 w-1.5 flex-shrink-0 rounded-full",
                              a?.solidBgColor || "",
                            ),
                          }),
                          r.createElement(
                            "span",
                            {
                              className:
                                "truncate text-sm text-muted-foreground",
                            },
                            a.label,
                          ),
                        ),
                        r.createElement(
                          "div",
                          null,
                          r.createElement(Xt, {
                            value: e.priority,
                            styleMap: Yt,
                          }),
                        ),
                        r.createElement(
                          "div",
                          null,
                          r.createElement(Xt, {
                            value: e.status,
                            styleMap: Qt,
                          }),
                        ),
                        r.createElement(
                          "div",
                          {
                            className: "flex items-center gap-1 lg:justify-end",
                          },
                          r.createElement(
                            "button",
                            {
                              type: "button",
                              onClick: () =>
                                ((e) => {
                                  if (t) return t(e);
                                  m({ task: e, hour: e.startHour });
                                })(e),
                              "aria-label": `Edit ${e.name}`,
                              className:
                                "flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                            },
                            r.createElement(Je.A, { className: "h-3.5 w-3.5" }),
                          ),
                          r.createElement(
                            "button",
                            {
                              type: "button",
                              onClick: () => {
                                return (
                                  (t = e.id),
                                  void (d === t ? (s(t), u(null)) : u(t))
                                );
                                var t;
                              },
                              onBlur: () => u(null),
                              "aria-label": o
                                ? `Confirm delete ${e.name}`
                                : `Delete ${e.name}`,
                              className: k(
                                "flex h-7 w-7 items-center justify-center rounded-md transition-colors",
                                o
                                  ? "bg-destructive/20 text-destructive"
                                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                              ),
                            },
                            r.createElement(Ve.A, { className: "h-3.5 w-3.5" }),
                          ),
                        ),
                      );
                    }),
                  ),
                ),
              ),
              r.createElement(me, {
                open: Boolean(i),
                task: i?.task ?? null,
                defaultHour: i?.hour,
                defaultDate: i?.date,
                existingTasks: D,
                onClose: R,
                onSubmit: (e) => {
                  (i?.task
                    ? o(i.task.id, e)
                    : null === i?.task && e.date && l(e.date, e),
                    R());
                },
                onDelete: (e) => {
                  (s(e), R());
                },
              }),
            );
          },
          ta = [
            { id: "timeline", label: "Timeline", icon: st.A },
            { id: "calendar", label: "Calendar", icon: jt.A },
            { id: "list", label: "List", icon: Pt.A },
          ],
          aa = function () {
            const [e, t] = (0, r.useState)("timeline");
            return r.createElement(
              "div",
              { className: "min-h-full min-w-0 bg-[#000000]" },
              r.createElement(
                "div",
                {
                  className:
                    "sticky top-0 z-10 border-b border-border bg-[#000000]/95 backdrop-blur",
                },
                r.createElement(
                  "div",
                  { className: "container mx-auto px-4 py-3 md:px-6" },
                  r.createElement(
                    "div",
                    {
                      className:
                        "flex w-full items-center gap-1 rounded-xl border border-border bg-card p-1 sm:inline-flex sm:w-auto",
                    },
                    ta.map((a) => {
                      let { id: n, label: l, icon: o } = a;
                      const s = e === n;
                      return r.createElement(
                        "button",
                        {
                          key: n,
                          type: "button",
                          onClick: () => t(n),
                          "aria-pressed": s,
                          className: k(
                            "flex min-w-0 flex-1 items-center justify-center gap-1 rounded-lg px-2 py-1.5 text-xs font-medium transition-colors sm:flex-none sm:gap-2 sm:px-3 sm:text-sm",
                            s
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                          ),
                        },
                        r.createElement(o, { className: "h-4 w-4" }),
                        l,
                      );
                    }),
                  ),
                ),
              ),
              "timeline" === e && r.createElement(Ht, null),
              "calendar" === e &&
                r.createElement(qt, {
                  onNavigateToTimeline: () => t("timeline"),
                }),
              "list" === e && r.createElement(ea, null),
            );
          };
        var ra = a(4485),
          na = a(9754),
          la = a(131);
        const oa =
            "https://script.google.com/macros/s/AKfycbwpiIoQE77nRCv6AKTJqzfWRWEJj_HxcFd6Y8HCpbYbKksj6Ynub7_DFIV_YsVPj1g5/exec",
          sa = async (e, t) => {
            if (!e.ok) throw new Error(t);
            let a;
            try {
              a = await e.json();
            } catch {
              throw new Error("Unexpected response from the server.");
            }
            if (a && !Array.isArray(a) && a.error) throw new Error(a.error);
            return a;
          },
          ca = async (e, t) => {
            const a = await fetch(oa, {
                method: "POST",
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify(e),
              }),
              r = await sa(a, t);
            if (!1 === r?.success)
              throw new Error(
                "That resource no longer exists in the sheet. Refresh and try again.",
              );
            return r;
          };
        function ia() {
          return (
            (ia = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            ia.apply(null, arguments)
          );
        }
        const ma = "Dev Resource",
          da = (e) =>
            Array.isArray(e)
              ? e.filter(Boolean)
              : String(e ?? "")
                  .split(",")
                  .map((e) => e.trim())
                  .filter(Boolean),
          ua = (e) => {
            try {
              return new URL(e).hostname.replace(/^www\./, "");
            } catch {
              return "";
            }
          },
          fa = (e) => {
            const t = ua(e);
            if (!t) return e || "Untitled";
            const a = t.split(".")[0];
            return a.charAt(0).toUpperCase() + a.slice(1);
          },
          ba = (e) =>
            e
              ? new Date(e).toLocaleDateString(void 0, {
                  month: "short",
                  year: "numeric",
                })
              : "",
          ga = (e, t) => {
            const a = e.resource_timestamp
              ? new Date(e.resource_timestamp).getTime()
              : 0;
            return {
              id: e.resource_url || `row-${e._row ?? t}`,
              title:
                String(e.resource_title || "").trim() || fa(e.resource_url),
              types: da(e.resource_type),
              subCategories: da(e.resource_sub_category),
              url: e.resource_url || "",
              description: e.resource_desc || "",
              rating: Number(e.resource_rating) || 0,
              addedAt: Number.isNaN(a) ? 0 : a,
            };
          },
          pa = (e) =>
            e.url && e.types.some((e) => e.toLowerCase() === ma.toLowerCase()),
          ha = (e, t) => ({
            resource_title: e.title.trim(),
            resource_type: t,
            resource_sub_category: e.subCategories,
            resource_desc: e.description,
            resource_rating: "" === e.rating ? "" : Number(e.rating),
          }),
          xa = {
            newest: {
              label: "Newest first",
              fn: (e, t) => t.addedAt - e.addedAt,
            },
            rating: {
              label: "Top rated",
              fn: (e, t) => t.rating - e.rating || t.addedAt - e.addedAt,
            },
            az: {
              label: "A to Z",
              fn: (e, t) => e.title.localeCompare(t.title),
            },
          },
          ya = {
            h1: (e) => {
              let { node: t, children: a, ...n } = e;
              return r.createElement(
                "h1",
                ia(
                  {
                    className:
                      "text-2xl font-display font-semibold text-white mt-6 mb-3 first:mt-0",
                  },
                  n,
                ),
                a,
              );
            },
            h2: (e) => {
              let { node: t, children: a, ...n } = e;
              return r.createElement(
                "h2",
                ia(
                  {
                    className:
                      "text-xl font-display font-semibold text-white mt-6 mb-3 first:mt-0",
                  },
                  n,
                ),
                a,
              );
            },
            h3: (e) => {
              let { node: t, children: a, ...n } = e;
              return r.createElement(
                "h3",
                ia(
                  {
                    className:
                      "text-lg font-display font-semibold text-white mt-5 mb-2 first:mt-0",
                  },
                  n,
                ),
                a,
              );
            },
            h4: (e) => {
              let { node: t, children: a, ...n } = e;
              return r.createElement(
                "h4",
                ia(
                  {
                    className:
                      "text-base font-semibold text-white mt-4 mb-2 first:mt-0",
                  },
                  n,
                ),
                a,
              );
            },
            p: (e) => {
              let { node: t, ...a } = e;
              return r.createElement(
                "p",
                ia({ className: "mb-4 last:mb-0" }, a),
              );
            },
            a: (e) => {
              let { node: t, children: a, ...n } = e;
              return r.createElement(
                "a",
                ia(
                  {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "text-[#8cfcfb] underline underline-offset-2 hover:text-white break-words",
                  },
                  n,
                ),
                a,
              );
            },
            strong: (e) => {
              let { node: t, ...a } = e;
              return r.createElement(
                "strong",
                ia({ className: "font-semibold text-white" }, a),
              );
            },
            em: (e) => {
              let { node: t, ...a } = e;
              return r.createElement("em", ia({ className: "italic" }, a));
            },
            del: (e) => {
              let { node: t, ...a } = e;
              return r.createElement(
                "del",
                ia({ className: "line-through opacity-70" }, a),
              );
            },
            ul: (e) => {
              let { node: t, className: a, ...n } = e;
              return r.createElement(
                "ul",
                ia(
                  {
                    className: a?.includes("contains-task-list")
                      ? "mb-4 space-y-1"
                      : "list-disc pl-6 mb-4 space-y-1 marker:text-[#8cfcfb]",
                  },
                  n,
                ),
              );
            },
            ol: (e) => {
              let { node: t, ...a } = e;
              return r.createElement(
                "ol",
                ia(
                  {
                    className:
                      "list-decimal pl-6 mb-4 space-y-1 marker:text-[#8cfcfb]",
                  },
                  a,
                ),
              );
            },
            li: (e) => {
              let { node: t, ...a } = e;
              return r.createElement("li", ia({ className: "pl-1" }, a));
            },
            input: (e) => {
              let { node: t, ...a } = e;
              return r.createElement(
                "input",
                ia(
                  {
                    className: "mr-2 align-middle accent-[#8cfcfb]",
                    disabled: !0,
                  },
                  a,
                ),
              );
            },
            blockquote: (e) => {
              let { node: t, ...a } = e;
              return r.createElement(
                "blockquote",
                ia(
                  {
                    className:
                      "border-l-4 border-[#8cfcfb]/50 pl-4 my-4 italic text-[#c2ccaa]/90",
                  },
                  a,
                ),
              );
            },
            hr: (e) => {
              let { node: t, ...a } = e;
              return r.createElement(
                "hr",
                ia({ className: "my-6 border-[#c2ccaa]/20" }, a),
              );
            },
            pre: (e) => {
              let { node: t, ...a } = e;
              return r.createElement(
                "pre",
                ia(
                  {
                    className:
                      "mb-4 p-4 rounded-lg bg-black/50 border border-[#c2ccaa]/15 overflow-x-auto text-sm [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-[#e6f7f7]",
                  },
                  a,
                ),
              );
            },
            code: (e) => {
              let { node: t, ...a } = e;
              return r.createElement(
                "code",
                ia(
                  {
                    className:
                      "font-mono text-[0.9em] px-1.5 py-0.5 rounded bg-black/40 text-[#8cfcfb]",
                  },
                  a,
                ),
              );
            },
            table: (e) => {
              let { node: t, ...a } = e;
              return r.createElement(
                "div",
                { className: "mb-4 overflow-x-auto" },
                r.createElement(
                  "table",
                  ia({ className: "w-full text-sm border-collapse" }, a),
                ),
              );
            },
            th: (e) => {
              let { node: t, ...a } = e;
              return r.createElement(
                "th",
                ia(
                  {
                    className:
                      "text-left font-semibold text-white border-b border-[#c2ccaa]/30 px-3 py-2",
                  },
                  a,
                ),
              );
            },
            td: (e) => {
              let { node: t, ...a } = e;
              return r.createElement(
                "td",
                ia({ className: "border-b border-[#c2ccaa]/10 px-3 py-2" }, a),
              );
            },
            img: (e) => {
              let { node: t, alt: a, ...n } = e;
              return r.createElement(
                "img",
                ia(
                  {
                    alt: a || "",
                    loading: "lazy",
                    className: "max-w-full rounded-lg my-4",
                  },
                  n,
                ),
              );
            },
          },
          Ea = (e) => {
            let { children: t } = e;
            return r.createElement(
              na.oz,
              { remarkPlugins: [la.A], components: ya },
              t,
            );
          },
          va = ["strong", "em", "del", "code"],
          Na = (e) => {
            let { children: t } = e;
            return r.createElement(
              na.oz,
              {
                remarkPlugins: [la.A],
                allowedElements: va,
                unwrapDisallowed: !0,
                components: {
                  strong: ya.strong,
                  em: ya.em,
                  del: ya.del,
                  code: ya.code,
                },
              },
              t,
            );
          },
          wa = (e) => {
            let { url: t, title: a } = e;
            const [n, l] = (0, r.useState)(!1),
              o = ua(t);
            return !o || n
              ? r.createElement(
                  "div",
                  {
                    className:
                      "w-11 h-11 shrink-0 rounded-lg bg-black/40 border border-[#c2ccaa]/15 flex items-center justify-center text-lg font-display font-semibold text-[#8cfcfb]",
                  },
                  a.charAt(0).toUpperCase(),
                )
              : r.createElement(
                  "div",
                  {
                    className:
                      "w-11 h-11 shrink-0 rounded-lg bg-black/40 border border-[#c2ccaa]/15 flex items-center justify-center",
                  },
                  r.createElement("img", {
                    src: `https://www.google.com/s2/favicons?domain=${o}&sz=64`,
                    alt: "",
                    width: 24,
                    height: 24,
                    loading: "lazy",
                    onError: () => l(!0),
                    className: "w-6 h-6 rounded-sm",
                  }),
                );
          },
          ka = (e) => {
            let { active: t, onClick: a, children: n } = e;
            return r.createElement(
              "button",
              {
                type: "button",
                onClick: a,
                "aria-pressed": t,
                className:
                  "px-3.5 py-1.5 rounded-full text-sm border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8cfcfb] " +
                  (t
                    ? "bg-[#8cfcfb] text-black border-[#8cfcfb] font-semibold"
                    : "bg-transparent text-[#c2ccaa] border-[#c2ccaa]/25 hover:border-[#8cfcfb]/60 hover:text-white"),
              },
              n,
            );
          },
          Ca = () =>
            r.createElement(
              "div",
              {
                className:
                  "rounded-2xl bg-[#6A0C0B]/60 border border-[#c2ccaa]/10 p-6 animate-pulse",
              },
              r.createElement(
                "div",
                { className: "flex items-center gap-3 mb-5" },
                r.createElement("div", {
                  className: "w-11 h-11 rounded-lg bg-black/30",
                }),
                r.createElement(
                  "div",
                  { className: "flex-1 space-y-2" },
                  r.createElement("div", {
                    className: "h-4 w-2/3 rounded bg-black/30",
                  }),
                  r.createElement("div", {
                    className: "h-3 w-1/3 rounded bg-black/20",
                  }),
                ),
              ),
              r.createElement(
                "div",
                { className: "space-y-2 mb-6" },
                r.createElement("div", {
                  className: "h-3 rounded bg-black/20",
                }),
                r.createElement("div", {
                  className: "h-3 w-5/6 rounded bg-black/20",
                }),
              ),
              r.createElement("div", {
                className: "h-9 rounded-lg bg-black/20",
              }),
            ),
          Sa = (e) => {
            let { className: t = "w-4 h-4" } = e;
            return r.createElement(
              "svg",
              {
                className: `${t} animate-spin`,
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": "true",
              },
              r.createElement("circle", {
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "3",
                className: "opacity-25",
              }),
              r.createElement("path", {
                d: "M22 12a10 10 0 00-10-10",
                stroke: "currentColor",
                strokeWidth: "3",
                strokeLinecap: "round",
              }),
            );
          },
          Ma = (e) => {
            let {
              resource: t,
              index: a,
              onOpen: n,
              onEdit: o,
              onDelete: s,
              isDeleting: c = !1,
            } = e;
            const {
                title: i,
                subCategories: m,
                url: d,
                description: u,
                rating: f,
                addedAt: b,
              } = t,
              g = ua(d),
              p = ba(b);
            return r.createElement(
              l.P.article,
              {
                layout: !0,
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, scale: 0.96 },
                transition: { duration: 0.35, delay: 0.04 * Math.min(a, 8) },
                role: "button",
                tabIndex: 0,
                "aria-haspopup": "dialog",
                "aria-label": `View details for ${i}`,
                onClick: () => n(t),
                onKeyDown: (e) => {
                  e.target === e.currentTarget &&
                    (("Enter" !== e.key && " " !== e.key) ||
                      (e.preventDefault(), n(t)));
                },
                className:
                  "group relative flex flex-col h-full cursor-pointer rounded-2xl bg-gradient-to-b from-[#7a0f0e] to-[#5a0a09] border border-[#c2ccaa]/15 shadow-[0_12px_30px_rgba(0,0,0,0.45)] transition-[border-color,box-shadow] duration-300 hover:border-[#8cfcfb]/40 hover:shadow-[0_18px_40px_rgba(140,252,251,0.12)] focus-within:border-[#8cfcfb]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8cfcfb]",
              },
              r.createElement(
                "div",
                { className: "p-6 flex flex-col flex-grow" },
                r.createElement(
                  "div",
                  { className: "flex items-start gap-3 mb-4" },
                  r.createElement(wa, { url: d, title: i }),
                  r.createElement(
                    "div",
                    { className: "min-w-0 flex-1" },
                    r.createElement(
                      "h3",
                      {
                        className:
                          "text-lg font-display font-semibold text-white leading-snug truncate",
                      },
                      i,
                    ),
                    g &&
                      r.createElement(
                        "p",
                        { className: "text-sm text-[#c2ccaa]/70 truncate" },
                        g,
                      ),
                  ),
                  f > 0 &&
                    r.createElement(
                      "span",
                      {
                        className:
                          "shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-[#8cfcfb] bg-black/30 rounded-full px-2.5 py-1",
                        title: `Rating: ${f}`,
                      },
                      r.createElement(
                        "svg",
                        {
                          viewBox: "0 0 20 20",
                          className: "w-3.5 h-3.5 fill-current",
                          "aria-hidden": "true",
                        },
                        r.createElement("path", {
                          d: "M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 15l-5.4 3 1.2-6L1.3 7.8l6.1-.7L10 1.5z",
                        }),
                      ),
                      f,
                    ),
                ),
                r.createElement(
                  "div",
                  {
                    className:
                      "text-[#c2ccaa] text-sm leading-relaxed mb-5 flex-grow line-clamp-3",
                  },
                  u ? r.createElement(Na, null, u) : "No description yet.",
                ),
                m.length > 0 &&
                  r.createElement(
                    "div",
                    { className: "flex flex-wrap gap-2 mb-5" },
                    m.map((e) =>
                      r.createElement(
                        "span",
                        {
                          key: e,
                          className:
                            "text-xs font-semibold px-2.5 py-1 rounded-full bg-[#8cfcfb]/15 text-[#8cfcfb]",
                        },
                        e,
                      ),
                    ),
                  ),
                r.createElement(
                  "div",
                  {
                    className:
                      "mt-auto pt-4 border-t border-[#c2ccaa]/10 flex flex-wrap items-center gap-3",
                  },
                  p &&
                    r.createElement(
                      "span",
                      { className: "text-xs text-[#c2ccaa]/60" },
                      "Added ",
                      p,
                    ),
                  r.createElement(
                    "div",
                    {
                      className:
                        "ml-auto flex items-center gap-1.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100 transition-opacity",
                    },
                    r.createElement(
                      "button",
                      {
                        type: "button",
                        onClick: (e) => {
                          (e.stopPropagation(), o(t));
                        },
                        disabled: c,
                        "aria-label": `Edit ${i}`,
                        className:
                          "p-2 rounded-lg text-[#c2ccaa] hover:text-white hover:bg-white/10 transition-colors disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8cfcfb]",
                      },
                      r.createElement(
                        "svg",
                        {
                          className: "w-4 h-4 fill-none stroke-current",
                          strokeWidth: "2",
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true",
                        },
                        r.createElement("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                        }),
                      ),
                    ),
                    r.createElement(
                      "button",
                      {
                        type: "button",
                        onClick: (e) => {
                          (e.stopPropagation(), s(t));
                        },
                        disabled: c,
                        "aria-label": `Delete ${i}`,
                        className:
                          "p-2 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-colors disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400",
                      },
                      c
                        ? r.createElement(Sa, { className: "w-4 h-4" })
                        : r.createElement(
                            "svg",
                            {
                              className: "w-4 h-4 fill-none stroke-current",
                              strokeWidth: "2",
                              viewBox: "0 0 24 24",
                              "aria-hidden": "true",
                            },
                            r.createElement("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                            }),
                          ),
                    ),
                  ),
                  d &&
                    r.createElement(
                      "a",
                      {
                        href: d,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: (e) => e.stopPropagation(),
                        "aria-label": `Visit ${i} (opens in a new tab)`,
                        className:
                          "inline-flex items-center gap-2 py-2 px-4 rounded-lg bg-[#8cfcfb]/10 text-[#8cfcfb] font-semibold border border-[#8cfcfb]/30 hover:bg-[#8cfcfb] hover:text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8cfcfb]",
                      },
                      "Visit site",
                      r.createElement(
                        "svg",
                        {
                          viewBox: "0 0 20 20",
                          className: "w-4 h-4 fill-none stroke-current",
                          strokeWidth: "2",
                          "aria-hidden": "true",
                        },
                        r.createElement("path", {
                          d: "M11 3h6v6M17 3l-8 8M8 5H4a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-4",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      ),
                    ),
                ),
              ),
            );
          };
        let Aa = 0;
        const La = (e) => {
            let {
              onClose: t,
              labelledBy: a,
              initialFocusRef: n,
              dismissible: o = !0,
              className: s = "max-w-xl",
              children: c,
            } = e;
            const i = (0, r.useRef)(null),
              m = (0, r.useRef)(!1),
              d = (0, r.useRef)(t),
              u = (0, r.useRef)(o);
            return (
              (d.current = t),
              (u.current = o),
              (0, r.useEffect)(() => {
                const e = document.activeElement;
                ((Aa += 1),
                  (document.body.style.overflow = "hidden"),
                  (n?.current || i.current)?.focus());
                const t = (e) => {
                  "Escape" === e.key && u.current && d.current();
                };
                return (
                  window.addEventListener("keydown", t),
                  () => {
                    (window.removeEventListener("keydown", t),
                      (Aa -= 1),
                      0 === Aa && (document.body.style.overflow = ""));
                    const a = document.activeElement;
                    (a && a !== document.body) || !e?.isConnected || e.focus();
                  }
                );
              }, []),
              r.createElement(
                l.P.div,
                {
                  className:
                    "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.2 },
                  onMouseDown: (e) => {
                    m.current = e.target === e.currentTarget;
                  },
                  onClick: (e) => {
                    m.current && e.target === e.currentTarget && o && t();
                  },
                },
                r.createElement(
                  l.P.div,
                  {
                    ref: i,
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": a,
                    tabIndex: -1,
                    initial: { opacity: 0, y: 24, scale: 0.97 },
                    animate: { opacity: 1, y: 0, scale: 1 },
                    exit: { opacity: 0, y: 16, scale: 0.97 },
                    transition: { duration: 0.25 },
                    className: `relative w-full ${s} max-h-[85vh] overflow-y-auto rounded-2xl bg-gradient-to-b from-[#7a0f0e] to-[#5a0a09] border border-[#8cfcfb]/30 shadow-[0_24px_60px_rgba(0,0,0,0.6)] focus:outline-none`,
                  },
                  c,
                ),
              )
            );
          },
          Ta = r.forwardRef((e, t) => {
            let { onClick: a, disabled: n } = e;
            return r.createElement(
              "button",
              {
                ref: t,
                type: "button",
                onClick: a,
                disabled: n,
                "aria-label": "Close",
                className:
                  "shrink-0 w-9 h-9 rounded-full text-2xl leading-none text-[#c2ccaa] hover:text-white hover:bg-white/10 disabled:opacity-40 disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8cfcfb]",
              },
              "×",
            );
          }),
          Da = (e) => {
            let { resource: t, onClose: a, onEdit: n, onDelete: l } = e;
            const o = (0, r.useRef)(null),
              {
                title: s,
                types: c,
                subCategories: i,
                url: m,
                description: d,
                rating: u,
                addedAt: f,
              } = t,
              b = ua(m),
              g = ba(f);
            return r.createElement(
              La,
              {
                onClose: a,
                labelledBy: "resource-modal-title",
                initialFocusRef: o,
              },
              r.createElement(
                "div",
                { className: "p-6 sm:p-8" },
                r.createElement(
                  "div",
                  { className: "flex items-start gap-4 mb-6" },
                  r.createElement(wa, { url: m, title: s }),
                  r.createElement(
                    "div",
                    { className: "min-w-0 flex-1" },
                    r.createElement(
                      "h3",
                      {
                        id: "resource-modal-title",
                        className:
                          "text-2xl font-display font-semibold text-white leading-snug break-words",
                      },
                      s,
                    ),
                    b &&
                      r.createElement(
                        "p",
                        { className: "text-sm text-[#c2ccaa]/70 break-all" },
                        b,
                      ),
                  ),
                  r.createElement(
                    "button",
                    {
                      ref: o,
                      type: "button",
                      onClick: a,
                      "aria-label": "Close",
                      className:
                        "shrink-0 w-9 h-9 rounded-full text-2xl leading-none text-[#c2ccaa] hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8cfcfb]",
                    },
                    "×",
                  ),
                ),
                r.createElement(
                  "div",
                  {
                    className:
                      "text-[#c2ccaa] leading-relaxed mb-6 break-words",
                  },
                  d
                    ? r.createElement(Ea, null, d)
                    : r.createElement("p", null, "No description yet."),
                ),
                (c.length > 0 || i.length > 0) &&
                  r.createElement(
                    "div",
                    { className: "flex flex-wrap gap-2 mb-6" },
                    c.map((e) =>
                      r.createElement(
                        "span",
                        {
                          key: `type-${e}`,
                          className:
                            "text-xs font-semibold px-2.5 py-1 rounded-full bg-black/30 text-[#c2ccaa]",
                        },
                        e,
                      ),
                    ),
                    i.map((e) =>
                      r.createElement(
                        "span",
                        {
                          key: `sub-${e}`,
                          className:
                            "text-xs font-semibold px-2.5 py-1 rounded-full bg-[#8cfcfb]/15 text-[#8cfcfb]",
                        },
                        e,
                      ),
                    ),
                  ),
                r.createElement(
                  "dl",
                  { className: "grid grid-cols-2 gap-4 mb-6 text-sm" },
                  r.createElement(
                    "div",
                    { className: "rounded-lg bg-black/25 p-3" },
                    r.createElement(
                      "dt",
                      { className: "text-[#c2ccaa]/60 mb-1" },
                      "Rating",
                    ),
                    r.createElement(
                      "dd",
                      { className: "font-semibold text-[#8cfcfb]" },
                      u > 0 ? u : "Not rated",
                    ),
                  ),
                  r.createElement(
                    "div",
                    { className: "rounded-lg bg-black/25 p-3" },
                    r.createElement(
                      "dt",
                      { className: "text-[#c2ccaa]/60 mb-1" },
                      "Added",
                    ),
                    r.createElement(
                      "dd",
                      { className: "font-semibold text-white" },
                      g || "Unknown",
                    ),
                  ),
                ),
                m &&
                  r.createElement(
                    "a",
                    {
                      href: m,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": `Visit ${s} (opens in a new tab)`,
                      className:
                        "w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#8cfcfb] text-black font-semibold hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
                    },
                    "Visit site",
                    r.createElement(
                      "svg",
                      {
                        viewBox: "0 0 20 20",
                        className: "w-4 h-4 fill-none stroke-current",
                        strokeWidth: "2",
                        "aria-hidden": "true",
                      },
                      r.createElement("path", {
                        d: "M11 3h6v6M17 3l-8 8M8 5H4a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-4",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                    ),
                  ),
                r.createElement(
                  "div",
                  { className: "mt-3 grid grid-cols-2 gap-3" },
                  r.createElement(
                    "button",
                    {
                      type: "button",
                      onClick: () => n(t),
                      className:
                        "inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-black/25 text-[#c2ccaa] font-semibold border border-[#c2ccaa]/20 hover:border-[#8cfcfb]/60 hover:text-[#8cfcfb] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8cfcfb]",
                    },
                    r.createElement(Je.A, {
                      className: "w-4 h-4",
                      "aria-hidden": "true",
                    }),
                    "Edit",
                  ),
                  r.createElement(
                    "button",
                    {
                      type: "button",
                      onClick: () => l(t),
                      className:
                        "inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-black/25 text-red-300 font-semibold border border-red-400/25 hover:bg-red-500 hover:border-red-500 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400",
                    },
                    r.createElement(Ve.A, {
                      className: "w-4 h-4",
                      "aria-hidden": "true",
                    }),
                    "Delete",
                  ),
                ),
              ),
            );
          },
          ja =
            "w-full bg-[#1a0a0a] border border-[#c2ccaa]/30 rounded-lg py-2.5 px-3.5 text-white placeholder:text-[#c2ccaa]/40 focus:outline-none focus:border-[#8cfcfb] focus:ring-1 focus:ring-[#8cfcfb] transition-colors aria-[invalid=true]:border-red-400",
          Pa = "block text-sm font-semibold text-white mb-1.5",
          _a = (e) => {
            let { id: t, children: a } = e;
            return a
              ? r.createElement(
                  "p",
                  { id: t, className: "mt-1.5 text-sm text-red-300" },
                  a,
                )
              : null;
          },
          Ha = (e) => {
            let {
              resource: t,
              subOptions: a,
              takenUrls: n,
              onClose: l,
              onSubmit: o,
            } = e;
            const s = Boolean(t),
              [c, i] = (0, r.useState)(() =>
                ((e) => ({
                  title: e?.title ?? "",
                  url: e?.url ?? "",
                  subCategories: e?.subCategories ?? [],
                  description: e?.description ?? "",
                  rating: e?.rating > 0 ? String(e.rating) : "",
                }))(t),
              ),
              [m, d] = (0, r.useState)(""),
              [u, f] = (0, r.useState)("write"),
              [b, g] = (0, r.useState)({}),
              [p, h] = (0, r.useState)(""),
              [x, y] = (0, r.useState)(!1),
              E = (0, r.useRef)(null),
              v = (e) => (t) => {
                const { value: a } = t.target;
                (i((t) => ({ ...t, [e]: a })),
                  g((t) => ({ ...t, [e]: void 0 })));
              },
              N = (e) => {
                const t = da(e);
                (t.length &&
                  i((e) => ({
                    ...e,
                    subCategories: [...new Set([...e.subCategories, ...t])],
                  })),
                  d(""));
              },
              w = (e) =>
                i((t) => ({
                  ...t,
                  subCategories: t.subCategories.filter((t) => t !== e),
                })),
              k = a.filter((e) => "All" !== e && !c.subCategories.includes(e)),
              C = s ? "Edit resource" : "Add resource";
            return r.createElement(
              La,
              {
                onClose: l,
                labelledBy: "resource-form-title",
                initialFocusRef: E,
                dismissible: !x,
                className: "max-w-2xl",
              },
              r.createElement(
                "form",
                {
                  onSubmit: async (e) => {
                    if ((e.preventDefault(), x)) return;
                    const a = {
                        ...c,
                        url: c.url.trim(),
                        subCategories: [
                          ...new Set([...c.subCategories, ...da(m)]),
                        ],
                      },
                      r = ((e) => {
                        const a = {};
                        if (
                          (e.url
                            ? ((e) => {
                                try {
                                  const { protocol: t } = new URL(e);
                                  return "http:" === t || "https:" === t;
                                } catch {
                                  return !1;
                                }
                              })(e.url)
                              ? e.url !== t?.url &&
                                n.has(e.url) &&
                                (a.url =
                                  "A resource with this URL already exists.")
                              : (a.url =
                                  "Enter a full URL starting with http:// or https://.")
                            : (a.url = "URL is required."),
                          "" !== e.rating)
                        ) {
                          const t = Number(e.rating);
                          (!Number.isFinite(t) || t < 0 || t > 5) &&
                            (a.rating = "Rating must be between 0 and 5.");
                        }
                        return a;
                      })(a);
                    if ((g(r), !Object.keys(r).length)) {
                      (y(!0), h(""));
                      try {
                        await o(a);
                      } catch (e) {
                        (h(e.message), y(!1));
                      }
                    }
                  },
                  noValidate: !0,
                  className: "p-6 sm:p-8",
                },
                r.createElement(
                  "div",
                  { className: "flex items-start gap-4 mb-6" },
                  r.createElement(
                    "h3",
                    {
                      id: "resource-form-title",
                      className:
                        "flex-1 text-2xl font-display font-semibold text-white",
                    },
                    C,
                  ),
                  r.createElement(Ta, { onClick: l, disabled: x }),
                ),
                r.createElement(
                  "fieldset",
                  { disabled: x, className: "space-y-5" },
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "label",
                      { htmlFor: "rf-title", className: Pa },
                      "Title",
                    ),
                    r.createElement("input", {
                      ref: E,
                      id: "rf-title",
                      type: "text",
                      value: c.title,
                      onChange: v("title"),
                      placeholder: "e.g. UI Verse",
                      className: ja,
                    }),
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "label",
                      { htmlFor: "rf-url", className: Pa },
                      "URL ",
                      r.createElement(
                        "span",
                        { className: "text-[#8cfcfb]" },
                        "*",
                      ),
                    ),
                    r.createElement("input", {
                      id: "rf-url",
                      type: "url",
                      inputMode: "url",
                      required: !0,
                      value: c.url,
                      onChange: v("url"),
                      placeholder: "https://example.com",
                      "aria-invalid": Boolean(b.url),
                      "aria-describedby": b.url ? "rf-url-error" : void 0,
                      className: ja,
                    }),
                    r.createElement(_a, { id: "rf-url-error" }, b.url),
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "label",
                      { htmlFor: "rf-sub", className: Pa },
                      "Categories",
                    ),
                    c.subCategories.length > 0 &&
                      r.createElement(
                        "ul",
                        {
                          className: "flex flex-wrap gap-2 mb-2",
                          "aria-label": "Selected categories",
                        },
                        c.subCategories.map((e) =>
                          r.createElement(
                            "li",
                            { key: e },
                            r.createElement(
                              "button",
                              {
                                type: "button",
                                onClick: () => w(e),
                                "aria-label": `Remove ${e}`,
                                className:
                                  "inline-flex items-center gap-1.5 text-xs font-semibold pl-2.5 pr-2 py-1 rounded-full bg-[#8cfcfb]/15 text-[#8cfcfb] hover:bg-[#8cfcfb]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8cfcfb]",
                              },
                              e,
                              r.createElement(
                                "span",
                                { "aria-hidden": "true" },
                                "×",
                              ),
                            ),
                          ),
                        ),
                      ),
                    r.createElement("input", {
                      id: "rf-sub",
                      type: "text",
                      value: m,
                      onChange: (e) => {
                        const { value: t } = e.target;
                        t.includes(",") ? N(t) : d(t);
                      },
                      onKeyDown: (e) => {
                        "Enter" === e.key
                          ? (e.preventDefault(), N(m))
                          : "Backspace" === e.key &&
                            !m &&
                            c.subCategories.length &&
                            w(c.subCategories[c.subCategories.length - 1]);
                      },
                      onBlur: () => N(m),
                      placeholder: "Type a category and press Enter",
                      "aria-describedby": "rf-sub-hint",
                      className: ja,
                    }),
                    r.createElement(
                      "p",
                      {
                        id: "rf-sub-hint",
                        className: "mt-1.5 text-xs text-[#c2ccaa]/60",
                      },
                      "Separate several with commas.",
                    ),
                    k.length > 0 &&
                      r.createElement(
                        "div",
                        { className: "mt-2 flex flex-wrap gap-2" },
                        k.map((e) =>
                          r.createElement(
                            "button",
                            {
                              key: e,
                              type: "button",
                              onClick: () => N(e),
                              className:
                                "text-xs px-2.5 py-1 rounded-full border border-[#c2ccaa]/25 text-[#c2ccaa] hover:border-[#8cfcfb]/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8cfcfb]",
                            },
                            "+ ",
                            e,
                          ),
                        ),
                      ),
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "div",
                      { className: "flex items-center justify-between mb-1.5" },
                      r.createElement(
                        "label",
                        {
                          htmlFor: "rf-desc",
                          className: "text-sm font-semibold text-white",
                        },
                        "Description",
                      ),
                      r.createElement(
                        "div",
                        {
                          role: "tablist",
                          "aria-label": "Description mode",
                          className:
                            "inline-flex rounded-lg bg-black/30 p-0.5 text-xs",
                        },
                        ["write", "preview"].map((e) =>
                          r.createElement(
                            "button",
                            {
                              key: e,
                              type: "button",
                              role: "tab",
                              "aria-selected": u === e,
                              onClick: () => f(e),
                              className:
                                "px-3 py-1 rounded-md capitalize font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8cfcfb] " +
                                (u === e
                                  ? "bg-[#8cfcfb] text-black"
                                  : "text-[#c2ccaa] hover:text-white"),
                            },
                            e,
                          ),
                        ),
                      ),
                    ),
                    "write" === u
                      ? r.createElement("textarea", {
                          id: "rf-desc",
                          rows: 7,
                          value: c.description,
                          onChange: v("description"),
                          placeholder:
                            "What is it, and why is it useful? Markdown is supported.",
                          className: `${ja} font-mono text-sm leading-relaxed resize-y min-h-[9rem]`,
                        })
                      : r.createElement(
                          "div",
                          {
                            className:
                              "min-h-[9rem] max-h-80 overflow-y-auto rounded-lg border border-[#c2ccaa]/30 bg-[#1a0a0a] p-4 text-[#c2ccaa] leading-relaxed break-words",
                          },
                          c.description.trim()
                            ? r.createElement(Ea, null, c.description)
                            : r.createElement(
                                "p",
                                { className: "text-[#c2ccaa]/50" },
                                "Nothing to preview yet.",
                              ),
                        ),
                    r.createElement(
                      "p",
                      { className: "mt-1.5 text-xs text-[#c2ccaa]/60" },
                      "Supports Markdown: **bold**, _italic_, `code`, lists, links and tables.",
                    ),
                  ),
                  r.createElement(
                    "div",
                    { className: "max-w-[10rem]" },
                    r.createElement(
                      "label",
                      { htmlFor: "rf-rating", className: Pa },
                      "Rating (0–5)",
                    ),
                    r.createElement("input", {
                      id: "rf-rating",
                      type: "number",
                      min: 0,
                      max: 5,
                      step: 1,
                      value: c.rating,
                      onChange: v("rating"),
                      placeholder: "—",
                      "aria-invalid": Boolean(b.rating),
                      "aria-describedby": b.rating ? "rf-rating-error" : void 0,
                      className: ja,
                    }),
                    r.createElement(_a, { id: "rf-rating-error" }, b.rating),
                  ),
                ),
                p &&
                  r.createElement(
                    "p",
                    {
                      role: "alert",
                      className:
                        "mt-6 rounded-lg border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200",
                    },
                    p,
                  ),
                r.createElement(
                  "div",
                  {
                    className:
                      "mt-8 flex flex-col-reverse sm:flex-row sm:justify-end gap-3",
                  },
                  r.createElement(
                    "button",
                    {
                      type: "button",
                      onClick: l,
                      disabled: x,
                      className:
                        "py-2.5 px-5 rounded-lg text-[#c2ccaa] font-semibold border border-[#c2ccaa]/25 hover:text-white hover:border-[#c2ccaa]/60 disabled:opacity-40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8cfcfb]",
                    },
                    "Cancel",
                  ),
                  r.createElement(
                    "button",
                    {
                      type: "submit",
                      disabled: x,
                      className:
                        "py-2.5 px-5 rounded-lg bg-[#8cfcfb] text-black font-semibold hover:bg-white disabled:opacity-60 disabled:cursor-wait transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
                    },
                    x ? "Saving…" : s ? "Save changes" : "Add resource",
                  ),
                ),
              ),
            );
          },
          Ba = (e) => {
            let { resource: t, onClose: a, onConfirm: n } = e;
            const [l, o] = (0, r.useState)(!1),
              [s, c] = (0, r.useState)(""),
              i = (0, r.useRef)(null);
            return r.createElement(
              La,
              {
                onClose: a,
                labelledBy: "resource-delete-title",
                initialFocusRef: i,
                dismissible: !l,
                className: "max-w-md",
              },
              r.createElement(
                "div",
                { className: "p-6 sm:p-8" },
                r.createElement(
                  "div",
                  {
                    className:
                      "w-12 h-12 mb-4 rounded-full bg-red-500/15 text-red-300 flex items-center justify-center",
                  },
                  r.createElement(Ve.A, {
                    className: "w-6 h-6",
                    "aria-hidden": "true",
                  }),
                ),
                r.createElement(
                  "h3",
                  {
                    id: "resource-delete-title",
                    className:
                      "text-xl font-display font-semibold text-white mb-2 break-words",
                  },
                  "Delete “",
                  t.title,
                  "”?",
                ),
                r.createElement(
                  "p",
                  { className: "text-[#c2ccaa]" },
                  "This removes the row from the Google Sheet. It can't be undone.",
                ),
                s &&
                  r.createElement(
                    "p",
                    {
                      role: "alert",
                      className:
                        "mt-4 rounded-lg border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200",
                    },
                    s,
                  ),
                r.createElement(
                  "div",
                  {
                    className:
                      "mt-8 flex flex-col-reverse sm:flex-row sm:justify-end gap-3",
                  },
                  r.createElement(
                    "button",
                    {
                      ref: i,
                      type: "button",
                      onClick: a,
                      disabled: l,
                      className:
                        "py-2.5 px-5 rounded-lg text-[#c2ccaa] font-semibold border border-[#c2ccaa]/25 hover:text-white hover:border-[#c2ccaa]/60 disabled:opacity-40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8cfcfb]",
                    },
                    "Cancel",
                  ),
                  r.createElement(
                    "button",
                    {
                      type: "button",
                      onClick: async () => {
                        (o(!0), c(""));
                        try {
                          await n(t);
                        } catch (e) {
                          (c(e.message), o(!1));
                        }
                      },
                      disabled: l,
                      className:
                        "py-2.5 px-5 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 disabled:opacity-60 disabled:cursor-wait transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300",
                    },
                    l ? "Deleting…" : "Delete",
                  ),
                ),
              ),
            );
          },
          Oa = (e) => {
            let { toast: t, onDismiss: a } = e;
            return r.createElement(
              "div",
              {
                className:
                  "fixed bottom-20 left-1/2 -translate-x-1/2 z-[60] w-[calc(100%-2rem)] max-w-sm pointer-events-none",
                role: "status",
                "aria-live": "polite",
              },
              r.createElement(
                o.N,
                null,
                t &&
                  r.createElement(
                    l.P.div,
                    {
                      key: t.id,
                      initial: { opacity: 0, y: 16 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: 16 },
                      className:
                        "pointer-events-auto flex items-start gap-3 rounded-xl border px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.5)] " +
                        ("error" === t.type
                          ? "bg-[#3a0a0a] border-red-400/40 text-red-200"
                          : "bg-[#0d1f1f] border-[#8cfcfb]/40 text-[#8cfcfb]"),
                    },
                    r.createElement(
                      "p",
                      { className: "flex-1 text-sm font-semibold" },
                      t.message,
                    ),
                    r.createElement(
                      "button",
                      {
                        type: "button",
                        onClick: a,
                        "aria-label": "Dismiss",
                        className:
                          "-mr-1 w-6 h-6 rounded-full leading-none opacity-70 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-current",
                      },
                      "×",
                    ),
                  ),
              ),
            );
          },
          za = () => {
            const [e, t] = (0, r.useState)([]),
              [a, n] = (0, r.useState)(!0),
              [s, c] = (0, r.useState)(null),
              [i, m] = (0, r.useState)(""),
              [d, u] = (0, r.useState)("All"),
              [f, b] = (0, r.useState)("newest"),
              [g, p] = (0, r.useState)(null),
              h = (0, r.useCallback)(() => p(null), []),
              [x, y] = (0, r.useState)(null),
              [v, N] = (0, r.useState)(null),
              [w, k] = (0, r.useState)(null),
              [C, S] = (0, r.useState)(() => new Set()),
              [M, A] = (0, r.useState)(null),
              L = (0, r.useCallback)(
                (e, t) => A({ type: e, message: t, id: Date.now() }),
                [],
              );
            (0, r.useEffect)(() => {
              if (!M) return;
              const e = setTimeout(() => A(null), 4500);
              return () => clearTimeout(e);
            }, [M]);
            const T = (0, r.useRef)(0),
              D = (0, r.useCallback)(
                async function () {
                  let { signal: e, silent: a = !1 } =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  const r = ++T.current;
                  a || (n(!0), c(null));
                  try {
                    const a = await (async function () {
                      let { signal: e } =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      const t = await fetch(oa, { signal: e }),
                        a = await sa(
                          t,
                          "Couldn't load resources. Please try again.",
                        );
                      if (!Array.isArray(a))
                        throw new Error("Unexpected response from the server.");
                      return a;
                    })({ signal: e });
                    if (r !== T.current) return;
                    (S(
                      new Set(
                        a
                          .map((e) => String(e.resource_url ?? "").trim())
                          .filter(Boolean),
                      ),
                    ),
                      t(a.map(ga).filter(pa)),
                      c(null));
                  } catch (e) {
                    if ("AbortError" === e.name || r !== T.current) return;
                    a
                      ? L("error", `Couldn't refresh the list. ${e.message}`)
                      : c(e.message);
                  } finally {
                    a || r !== T.current || e?.aborted || n(!1);
                  }
                },
                [L],
              );
            (0, r.useEffect)(() => {
              const e = new AbortController();
              return (D({ signal: e.signal }), () => e.abort());
            }, [D]);
            const j = (0, r.useCallback)((e) => {
                (p(null), y({ resource: e }));
              }, []),
              P = (0, r.useCallback)((e) => {
                (p(null), N(e));
              }, []),
              _ = (0, r.useMemo)(
                () => ["All", ...new Set(e.flatMap((e) => e.subCategories))],
                [e],
              ),
              H = (0, r.useMemo)(() => {
                const t = i.trim().toLowerCase();
                return e
                  .filter(
                    (e) =>
                      !("All" !== d && !e.subCategories.includes(d)) &&
                      (!t ||
                        [e.title, e.description, ua(e.url), ...e.subCategories]
                          .join(" ")
                          .toLowerCase()
                          .includes(t)),
                  )
                  .sort(xa[f].fn);
              }, [e, i, d, f]),
              B = i || "All" !== d,
              O = () => {
                (m(""), u("All"));
              };
            return r.createElement(
              ra.x,
              { reducedMotion: "user" },
              r.createElement(
                "section",
                {
                  id: "dev-resources",
                  className: "py-20 relative overflow-hidden bg-[#000000]",
                },
                r.createElement("div", {
                  className:
                    "pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,rgba(140,252,251,0.08),transparent_65%)]",
                  "aria-hidden": "true",
                }),
                r.createElement(
                  "div",
                  {
                    className:
                      "container mx-auto px-6 min-h-[70vh] relative z-10",
                  },
                  r.createElement(
                    l.P.div,
                    {
                      className: "text-center mb-10",
                      initial: { opacity: 0, y: -24 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.6 },
                    },
                    r.createElement(
                      "h2",
                      {
                        className:
                          "text-4xl font-display font-semibold mb-4 text-white",
                      },
                      "Developer Resources",
                    ),
                    r.createElement(
                      "p",
                      { className: "text-[#c2ccaa] max-w-2xl mx-auto" },
                      "Hand-picked tools, libraries, and references. Search by name, or filter by category.",
                    ),
                    r.createElement(
                      "button",
                      {
                        type: "button",
                        onClick: () => y({ resource: null }),
                        "aria-haspopup": "dialog",
                        className:
                          "mt-6 inline-flex items-center gap-2 py-2.5 px-5 rounded-full bg-[#8cfcfb] text-black font-semibold hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                      },
                      r.createElement(E.A, {
                        className: "w-4 h-4",
                        "aria-hidden": "true",
                      }),
                      "Add resource",
                    ),
                  ),
                  r.createElement(
                    "div",
                    {
                      className:
                        "flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-6",
                    },
                    r.createElement(
                      "div",
                      { className: "relative flex-1" },
                      r.createElement(
                        "svg",
                        {
                          viewBox: "0 0 20 20",
                          className:
                            "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 fill-none stroke-[#c2ccaa]/60",
                          strokeWidth: "2",
                          "aria-hidden": "true",
                        },
                        r.createElement("circle", { cx: "9", cy: "9", r: "6" }),
                        r.createElement("path", {
                          d: "M14 14l4 4",
                          strokeLinecap: "round",
                        }),
                      ),
                      r.createElement("input", {
                        type: "text",
                        "aria-label": "Search resources",
                        placeholder: "Search by name, category, or description",
                        value: i,
                        onChange: (e) => m(e.target.value),
                        className:
                          "w-full bg-[#1a0a0a] border border-[#c2ccaa]/30 rounded-full py-3 pl-12 pr-11 text-white placeholder:text-[#c2ccaa]/50 focus:outline-none focus:border-[#8cfcfb] focus:ring-1 focus:ring-[#8cfcfb] transition-all",
                      }),
                      i &&
                        r.createElement(
                          "button",
                          {
                            type: "button",
                            onClick: () => m(""),
                            "aria-label": "Clear search",
                            className:
                              "absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full text-[#c2ccaa] hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8cfcfb]",
                          },
                          "×",
                        ),
                    ),
                    r.createElement(
                      "select",
                      {
                        "aria-label": "Sort resources",
                        value: f,
                        onChange: (e) => b(e.target.value),
                        className:
                          "bg-[#1a0a0a] border border-[#c2ccaa]/30 rounded-full py-3 px-5 text-white focus:outline-none focus:border-[#8cfcfb] focus:ring-1 focus:ring-[#8cfcfb]",
                      },
                      Object.entries(xa).map((e) => {
                        let [t, { label: a }] = e;
                        return r.createElement(
                          "option",
                          { key: t, value: t },
                          a,
                        );
                      }),
                    ),
                  ),
                  !a &&
                    !s &&
                    e.length > 0 &&
                    r.createElement(
                      "div",
                      { className: "max-w-4xl mx-auto mb-8 space-y-3" },
                      _.length > 2 &&
                        r.createElement(
                          "div",
                          {
                            className: "flex flex-wrap justify-center gap-2",
                            role: "group",
                            "aria-label": "Filter by sub-category",
                          },
                          _.map((e) =>
                            r.createElement(
                              ka,
                              { key: e, active: d === e, onClick: () => u(e) },
                              e,
                            ),
                          ),
                        ),
                      r.createElement(
                        "p",
                        {
                          className: "text-center text-sm text-[#c2ccaa]/70",
                          "aria-live": "polite",
                        },
                        "Showing ",
                        H.length,
                        " of ",
                        e.length,
                        " ",
                        "resources",
                        B &&
                          r.createElement(
                            r.Fragment,
                            null,
                            " ",
                            r.createElement(
                              "button",
                              {
                                type: "button",
                                onClick: O,
                                className:
                                  "underline underline-offset-2 text-[#8cfcfb] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8cfcfb] rounded",
                              },
                              "Clear filters",
                            ),
                          ),
                      ),
                    ),
                  a
                    ? r.createElement(
                        "div",
                        {
                          className:
                            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                          "aria-busy": "true",
                        },
                        Array.from({ length: 6 }).map((e, t) =>
                          r.createElement(Ca, { key: t }),
                        ),
                      )
                    : s
                      ? r.createElement(
                          "div",
                          { className: "py-12 text-center", role: "alert" },
                          r.createElement(
                            "p",
                            { className: "text-xl text-red-400 mb-2" },
                            s,
                          ),
                          r.createElement(
                            "button",
                            {
                              type: "button",
                              onClick: () => D(),
                              className:
                                "text-[#8cfcfb] underline underline-offset-2 hover:text-white",
                            },
                            "Try again",
                          ),
                        )
                      : H.length > 0
                        ? r.createElement(
                            "div",
                            {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            },
                            r.createElement(
                              o.N,
                              { mode: "popLayout" },
                              H.map((e, t) =>
                                r.createElement(Ma, {
                                  key: e.id,
                                  resource: e,
                                  index: t,
                                  onOpen: p,
                                  onEdit: j,
                                  onDelete: P,
                                  isDeleting: w === e.id,
                                }),
                              ),
                            ),
                          )
                        : r.createElement(
                            "div",
                            { className: "py-12 text-center" },
                            r.createElement(
                              "p",
                              { className: "text-xl text-[#c2ccaa] mb-3" },
                              0 === e.length
                                ? "No resources have been added yet."
                                : i
                                  ? `No resources match "${i}".`
                                  : "No resources in this category yet.",
                            ),
                            B &&
                              r.createElement(
                                "button",
                                {
                                  type: "button",
                                  onClick: O,
                                  className:
                                    "text-[#8cfcfb] underline underline-offset-2 hover:text-white",
                                },
                                "Clear filters",
                              ),
                          ),
                ),
                r.createElement(
                  o.N,
                  null,
                  g &&
                    r.createElement(Da, {
                      key: g.id,
                      resource: g,
                      onClose: h,
                      onEdit: j,
                      onDelete: P,
                    }),
                ),
                r.createElement(
                  o.N,
                  null,
                  x &&
                    r.createElement(Ha, {
                      key: x.resource ? `edit-${x.resource.id}` : "add",
                      resource: x.resource,
                      subOptions: _,
                      takenUrls: C,
                      onClose: () => y(null),
                      onSubmit: async (e) => {
                        const a = x?.resource;
                        if (a) {
                          const r = a.types.length ? a.types : [ma],
                            n = ha(e, r);
                          (e.url !== a.url && (n.new_resource_url = e.url),
                            await ((e, t) =>
                              ca(
                                { ...t, action: "update", resource_url: e },
                                "Couldn't save your changes. Please try again.",
                              ))(a.url, n));
                          const l = ga({
                            ...n,
                            resource_url: e.url,
                            resource_timestamp: a.addedAt
                              ? new Date(a.addedAt).toISOString()
                              : "",
                          });
                          (t((e) => e.map((e) => (e.id === a.id ? l : e))),
                            L("success", "Resource updated."));
                        } else {
                          const a = {
                            ...ha(e, [ma]),
                            resource_url: e.url,
                            resource_timestamp: new Date().toISOString(),
                          };
                          (await ((e) =>
                            ca(
                              e,
                              "Couldn't add the resource. Please try again.",
                            ))(a),
                            t((e) => [ga(a), ...e]),
                            L("success", "Resource added."));
                        }
                        (S((t) => {
                          const r = new Set(t);
                          return (a && r.delete(a.url), r.add(e.url), r);
                        }),
                          y(null),
                          D({ silent: !0 }));
                      },
                    }),
                ),
                r.createElement(
                  o.N,
                  null,
                  v &&
                    r.createElement(Ba, {
                      key: `delete-${v.id}`,
                      resource: v,
                      onClose: () => N(null),
                      onConfirm: async (e) => {
                        k(e.id);
                        try {
                          await ((a = e.url),
                          ca(
                            { action: "delete", resource_url: a },
                            "Couldn't delete the resource. Please try again.",
                          ));
                        } finally {
                          k(null);
                        }
                        var a;
                        (t((t) => t.filter((t) => t.id !== e.id)),
                          S((t) => {
                            const a = new Set(t);
                            return (a.delete(e.url), a);
                          }),
                          N(null),
                          L("success", `Deleted “${e.title}”.`),
                          D({ silent: !0 }));
                      },
                    }),
                ),
                r.createElement(Oa, { toast: M, onDismiss: () => A(null) }),
              ),
            );
          },
          $a = function () {
            const { isAuthenticated: e } = Be(),
              t = (0, d.zy)();
            return e
              ? r.createElement(d.sv, null)
              : r.createElement(d.C5, {
                  to: "/login",
                  replace: !0,
                  state: { from: t },
                });
          },
          Fa = () => {
            const e = (0, d.zy)(),
              t = (0, d.Zp)(),
              { isAuthenticated: a, logout: n } = Be(),
              [u, f] = (0, r.useState)("home"),
              [b, g] = (0, r.useState)(!1),
              p = [
                { name: "home", label: "home", url: "/" },
                {
                  name: "time-planner",
                  label: "time-planner",
                  url: "/time-planner",
                },
                {
                  name: "project-track",
                  label: "project-track",
                  url: "/project-track",
                },
                { name: "todo-list", label: "todo-list", url: "/todo-list" },
                {
                  name: "dev-res-admin",
                  label: "dev-res-admin",
                  url: "/dev-res-admin",
                },
              ],
              h = "/login" === e.pathname || "/signup" === e.pathname;
            function x() {
              (n(), g(!1), t("/login", { replace: !0 }));
            }
            return (
              (0, r.useEffect)(() => {
                const t = p.find((t) => e.pathname.includes(t.name));
                t && f(t.name);
              }, [e.pathname]),
              r.createElement(
                "div",
                {
                  className:
                    "flex min-h-screen min-w-0 flex-col bg-[#000000] text-[#c2ccaa]",
                },
                !h &&
                  r.createElement(
                    "header",
                    {
                      className:
                        "fixed inset-x-0 top-0 z-50 border-b border-black/20 bg-[#6A0C0B]/90 backdrop-blur-md",
                    },
                    r.createElement(
                      "nav",
                      {
                        className:
                          "container mx-auto flex min-w-0 items-center justify-between px-4 py-3 sm:px-6 sm:py-4",
                      },
                      r.createElement(
                        l.P.div,
                        {
                          initial: { opacity: 0, x: -50 },
                          animate: { opacity: 1, x: 0 },
                          transition: { duration: 0.5 },
                          className:
                            "min-w-0 truncate pr-4 text-xl font-display font-semibold text-[#FFFFFF] sm:text-2xl",
                        },
                        r.createElement(d.k2, { to: "/" }, "Ashtro Planner"),
                      ),
                      r.createElement(
                        "div",
                        {
                          className:
                            "hidden items-center space-x-4 md:flex lg:space-x-6",
                        },
                        p.map((e) =>
                          r.createElement(
                            d.k2,
                            { key: e.name, to: e.url },
                            r.createElement(
                              l.P.button,
                              {
                                whileHover: { scale: 1.1 },
                                whileTap: { scale: 0.95 },
                                className: `capitalize font-semibold ${u === e.name ? "text-[#8cfcfb]" : "text-[#c2ccaa]"} hover:text-[#67C7EB] transition-colors`,
                              },
                              e.label,
                            ),
                          ),
                        ),
                        a &&
                          r.createElement(
                            l.P.button,
                            {
                              whileHover: { scale: 1.1 },
                              whileTap: { scale: 0.95 },
                              onClick: x,
                              className:
                                "flex items-center gap-1.5 font-semibold text-[#c2ccaa] hover:text-[#67C7EB] transition-colors",
                            },
                            r.createElement(s.A, { className: "w-4 h-4" }),
                            " logout",
                          ),
                      ),
                      r.createElement(
                        "div",
                        { className: "md:hidden" },
                        r.createElement(
                          "button",
                          { onClick: () => g(!b) },
                          b
                            ? r.createElement(c.A, { className: "w-6 h-6" })
                            : r.createElement(i.A, { className: " w-6 h-6" }),
                        ),
                      ),
                    ),
                  ),
                r.createElement(
                  o.N,
                  null,
                  !h &&
                    b &&
                    r.createElement(
                      l.P.div,
                      {
                        initial: { opacity: 0, y: -50 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -50 },
                        className:
                          "fixed inset-0 z-40 bg-[#582726] bg-opacity-95 flex flex-col items-center justify-center space-y-6",
                      },
                      p.map((e) =>
                        r.createElement(
                          d.k2,
                          {
                            key: e.name,
                            to: e.url,
                            onClick: () => {
                              (f(e.name), g(!1));
                            },
                          },
                          r.createElement(
                            l.P.button,
                            {
                              whileHover: { scale: 1.1 },
                              whileTap: { scale: 0.95 },
                              className: `text-2xl font-bold capitalize ${u === e.name ? "text-[#8cfcfb]" : "text-[#c2ccaa]"} hover:text-[#67C7EB] transition-colors`,
                            },
                            e.label,
                          ),
                        ),
                      ),
                      a &&
                        r.createElement(
                          l.P.button,
                          {
                            whileHover: { scale: 1.1 },
                            whileTap: { scale: 0.95 },
                            onClick: x,
                            className:
                              "flex items-center gap-2 text-2xl font-bold capitalize text-[#c2ccaa] hover:text-[#67C7EB] transition-colors",
                          },
                          r.createElement(s.A, { className: "w-5 h-5" }),
                          " logout",
                        ),
                    ),
                ),
                r.createElement(
                  "main",
                  {
                    className:
                      "min-w-0 flex-1 " + (h ? "" : "pt-[4.5rem] sm:pt-24"),
                  },
                  r.createElement(
                    d.BV,
                    null,
                    r.createElement(d.qh, {
                      path: "/login",
                      element: r.createElement(Ie, null),
                    }),
                    r.createElement(d.qh, {
                      path: "/signup",
                      element: r.createElement(qe, null),
                    }),
                    r.createElement(
                      d.qh,
                      { element: r.createElement($a, null) },
                      r.createElement(d.qh, {
                        path: "/",
                        element: r.createElement(ge, null),
                      }),
                      r.createElement(d.qh, {
                        path: "/time-planner",
                        element: r.createElement(aa, null),
                      }),
                      r.createElement(d.qh, {
                        path: "/project-track",
                        element: r.createElement(Qe, null),
                      }),
                      r.createElement(d.qh, {
                        path: "/todo-list",
                        element: r.createElement(Dt, null),
                      }),
                      r.createElement(d.qh, {
                        path: "/dev-res-admin",
                        element: r.createElement(za, null),
                      }),
                    ),
                  ),
                ),
                !b &&
                  r.createElement(
                    "footer",
                    {
                      className:
                        "sticky bottom-0 z-40 bg-[#000000] text-[#c2ccaa] border-t border-[#c2ccaa]/10",
                    },
                    r.createElement(
                      "div",
                      {
                        className:
                          "container mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-2 text-center sm:px-6",
                      },
                      r.createElement(
                        "div",
                        { className: "mt-1" },
                        "© 2026",
                        " ",
                        r.createElement(
                          "span",
                          null,
                          r.createElement(
                            "strong",
                            null,
                            r.createElement(
                              "a",
                              {
                                href: "https://ashserrao.github.io/portfolio/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-[#67C7EB] transition-colors",
                              },
                              "Ashtro Dev",
                            ),
                          ),
                        ),
                        ". v2.0.12 All rights reserved.",
                      ),
                      r.createElement(
                        "div",
                        { className: "flex justify-center space-x-5 sm:ml-2" },
                        r.createElement(
                          l.P.a,
                          {
                            href: "https://github.com/ashserrao",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            whileHover: { scale: 1.1 },
                            whileTap: { scale: 0.95 },
                            className: "hover:text-[#67C7EB] transition-colors",
                          },
                          r.createElement(m.hL4, { className: "w-6 h-6" }),
                        ),
                        r.createElement(
                          l.P.a,
                          {
                            href: "https://www.linkedin.com/in/anush-serrao-31440a16a/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            whileHover: { scale: 1.1 },
                            whileTap: { scale: 0.95 },
                            className: "hover:text-[#67C7EB] transition-colors",
                          },
                          r.createElement(m.QEs, { className: "w-6 h-6" }),
                        ),
                        r.createElement(
                          l.P.a,
                          {
                            href: "https://www.facebook.com/profile.php?id=100009259891356",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            whileHover: { scale: 1.1 },
                            whileTap: { scale: 0.95 },
                            className: "hover:text-[#67C7EB] transition-colors",
                          },
                          r.createElement(m.iYk, { className: "w-6 h-6" }),
                        ),
                        r.createElement(
                          l.P.a,
                          {
                            href: "https://www.instagram.com/cipher_beast/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            whileHover: { scale: 1.1 },
                            whileTap: { scale: 0.95 },
                            className: "hover:text-[#67C7EB] transition-colors",
                          },
                          r.createElement(m.ao$, { className: "w-6 h-6" }),
                        ),
                      ),
                    ),
                  ),
              )
            );
          },
          Ra = function () {
            return r.createElement(
              "div",
              { className: "App" },
              r.createElement(
                He,
                null,
                r.createElement(
                  ee,
                  null,
                  r.createElement(ne, null, r.createElement(Fa, null)),
                ),
              ),
            );
          };
        var Ia;
        (n
          .createRoot(document.getElementById("root"))
          .render(r.createElement(d.I9, null, r.createElement(Ra, null))),
          Ia &&
            Ia instanceof Function &&
            a
              .e(364)
              .then(a.bind(a, 364))
              .then((e) => {
                let {
                  getCLS: t,
                  getFID: a,
                  getFCP: r,
                  getLCP: n,
                  getTTFB: l,
                } = e;
                (t(Ia), a(Ia), r(Ia), n(Ia), l(Ia));
              }));
      },
    },
    n = {};
  function l(e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var a = (n[e] = { exports: {} });
    return (r[e].call(a.exports, a, a.exports, l), a.exports);
  }
  ((l.m = r),
    (e = []),
    (l.O = (t, a, r, n) => {
      if (!a) {
        var o = 1 / 0;
        for (m = 0; m < e.length; m++) {
          ((a = e[m][0]), (r = e[m][1]), (n = e[m][2]));
          for (var s = !0, c = 0; c < a.length; c++)
            (!1 & n || o >= n) && Object.keys(l.O).every((e) => l.O[e](a[c]))
              ? a.splice(c--, 1)
              : ((s = !1), n < o && (o = n));
          if (s) {
            e.splice(m--, 1);
            var i = r();
            void 0 !== i && (t = i);
          }
        }
        return t;
      }
      n = n || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > n; m--) e[m] = e[m - 1];
      e[m] = [a, r, n];
    }),
    (l.d = (e, t) => {
      for (var a in t)
        l.o(t, a) &&
          !l.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (l.f = {}),
    (l.e = (e) =>
      Promise.all(Object.keys(l.f).reduce((t, a) => (l.f[a](e, t), t), []))),
    (l.u = (e) => "bundle.49239971958313ee0ec7.js"),
    (l.miniCssF = (e) => {}),
    (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (t = {}),
    (a = "react-taskplanner:"),
    (l.l = (e, r, n, o) => {
      if (t[e]) t[e].push(r);
      else {
        var s, c;
        if (void 0 !== n)
          for (
            var i = document.getElementsByTagName("script"), m = 0;
            m < i.length;
            m++
          ) {
            var d = i[m];
            if (
              d.getAttribute("src") == e ||
              d.getAttribute("data-webpack") == a + n
            ) {
              s = d;
              break;
            }
          }
        (s ||
          ((c = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          l.nc && s.setAttribute("nonce", l.nc),
          s.setAttribute("data-webpack", a + n),
          (s.src = e)),
          (t[e] = [r]));
        var u = (a, r) => {
            ((s.onerror = s.onload = null), clearTimeout(f));
            var n = t[e];
            if (
              (delete t[e],
              s.parentNode && s.parentNode.removeChild(s),
              n && n.forEach((e) => e(r)),
              a)
            )
              return a(r);
          },
          f = setTimeout(
            u.bind(null, void 0, { type: "timeout", target: s }),
            12e4,
          );
        ((s.onerror = u.bind(null, s.onerror)),
          (s.onload = u.bind(null, s.onload)),
          c && document.head.appendChild(s));
      }
    }),
    (l.r = (e) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (l.p = "./"),
    (() => {
      var e = { 792: 0 };
      ((l.f.j = (t, a) => {
        var r = l.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) a.push(r[2]);
          else {
            var n = new Promise((a, n) => (r = e[t] = [a, n]));
            a.push((r[2] = n));
            var o = l.p + l.u(t),
              s = new Error();
            l.l(
              o,
              (a) => {
                if (l.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var n = a && ("load" === a.type ? "missing" : a.type),
                    o = a && a.target && a.target.src;
                  ((s.message =
                    "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = n),
                    (s.request = o),
                    r[1](s));
                }
              },
              "chunk-" + t,
              t,
            );
          }
      }),
        (l.O.j = (t) => 0 === e[t]));
      var t = (t, a) => {
          var r,
            n,
            o = a[0],
            s = a[1],
            c = a[2],
            i = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (r in s) l.o(s, r) && (l.m[r] = s[r]);
            if (c) var m = c(l);
          }
          for (t && t(a); i < o.length; i++)
            ((n = o[i]), l.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
          return l.O(m);
        },
        a = (self.webpackChunkreact_taskplanner =
          self.webpackChunkreact_taskplanner || []);
      (a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a))));
    })());
  var o = l.O(void 0, [549], () => l(2074));
  o = l.O(o);
})();
