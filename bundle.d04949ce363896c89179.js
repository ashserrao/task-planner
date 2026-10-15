(() => {
  "use strict";
  var e,
    t,
    a,
    r,
    n,
    l = {
      8305: (e, t, a) => {
        var r = a(6540),
          n = a(5338),
          l = a(8664),
          o = a(937),
          s = a(4794);
        const c = (e, t, a) => {
            const r = [];
            for (let n = 0; n < 6; n++) {
              const l = (Math.PI / 180) * (60 * n);
              r.push(`${e + a * Math.cos(l)},${t + a * Math.sin(l)}`);
            }
            return r.join(" ");
          },
          i = (e) => {
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
                    i = a / 2,
                    d = Math.hypot(s, i),
                    m = [];
                  for (let t = -1; t < l; t++)
                    for (let a = -1; a < o; a++) {
                      const l = t * r,
                        o = a * n + (t % 2 != 0 ? n / 2 : 0),
                        u = Math.hypot(l - s, o - i);
                      m.push({
                        key: `${t}-${a}`,
                        points: c(l, o, e - 2),
                        delay: (u / d) * 1.6,
                      });
                    }
                  return m;
                }, [e, t, a]))(a, n, l),
              s = (0.6 * Math.min(n, l)) / Math.max(1e3, 714),
              i = (n - 1e3 * s) / 2,
              d = (l - 714 * s) / 2;
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
                  { transform: `translate(${i}, ${d}) scale(${s})` },
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
        var d = a(4571),
          m = a(828),
          u = a(2340),
          f = a(5551),
          g = a(4929),
          b = a(7870),
          p = a(697),
          h = a(9095),
          x = a(4164),
          E = a(856);
        function y() {
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          return (0, E.QP)((0, x.$)(t));
        }
        function v() {
          return (
            (v = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            v.apply(null, arguments)
          );
        }
        const N = {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            secondary:
              "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            outline: "border border-border bg-transparent hover:bg-secondary",
            ghost: "bg-transparent hover:bg-secondary/60",
            destructive: "bg-destructive text-white hover:bg-destructive/90",
          },
          w = {
            default: "h-10 px-4 py-2",
            sm: "h-8 px-3 text-xs",
            lg: "h-11 px-6",
            icon: "h-8 w-8 p-0",
          },
          k = (0, r.forwardRef)(function (e, t) {
            let {
              className: a,
              type: n = "button",
              variant: l = "default",
              size: o = "default",
              ...s
            } = e;
            return r.createElement(
              "button",
              v(
                {
                  ref: t,
                  type: n,
                  className: y(
                    "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold",
                    "transition-transform duration-200",
                    "disabled:cursor-not-allowed disabled:opacity-60",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                    N[l] || N.default,
                    w[o] || w.default,
                    a,
                  ),
                },
                s,
              ),
            );
          }),
          C = Array.from({ length: 24 }, (e, t) => t),
          S = Array.from({ length: 96 }, (e, t) => t / 4),
          A = S.map((e, t) => ({ time: e, index: t }));
        function M(e) {
          const t = Math.max(0, Math.round(4 * Number(e.startHour || 0))),
            a = Math.max(0.25, Number(e.duration) || 1);
          return [t, Math.min(A.length, t + Math.max(1, Math.ceil(4 * a)))];
        }
        function L(e) {
          const [t, a] = M(e);
          return [t / 4, Math.min(a / 4, C.length)];
        }
        function T(e, t) {
          if (e.date && t.date && e.date !== t.date) return !1;
          const [a, r] = L(e),
            [n, l] = L(t);
          return a < l && n < r;
        }
        function D(e) {
          const t = ((Math.round(60 * Number(e)) % 1440) + 1440) % 1440,
            a = Math.floor(t / 60),
            r = a >= 12 ? "PM" : "AM";
          return `${a % 12 == 0 ? 12 : a % 12}:${String(t % 60).padStart(2, "0")} ${r}`;
        }
        const j = [
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
          P = j,
          O = j[j.length - 1];
        function _(e) {
          if (!e) return O;
          const t = String(e).trim().toLowerCase(),
            a = j.find((e) => e.id === t);
          if (a) return a;
          const r = t.charAt(0).toUpperCase() + t.slice(1);
          return {
            ...O,
            id: t,
            name: r,
            label: r,
            solidBgColor: "bg-slate-500",
          };
        }
        const z = {
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
        function B(e) {
          if (!e) return "";
          const t = String(e).trim();
          return t ? t.charAt(0).toUpperCase() + t.slice(1).toLowerCase() : "";
        }
        function H(e) {
          return "boolean" == typeof e
            ? e
            : "true" ===
                String(e ?? "")
                  .trim()
                  .toLowerCase();
        }
        function $(e) {
          return "" !== e && null != e && !isNaN(Number(e));
        }
        function F(e) {
          if (!e || "object" != typeof e) return null;
          const t =
            !$(e["ticket id"]) &&
            !e["Task title"] &&
            (a = e["Task description"]) &&
            !isNaN(new Date(a).getTime()) &&
            $(e["task date time"]);
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
            c = $(s) ? Number(s) : void 0,
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
              ? (0, d.GP)(l, "yyyy-MM-dd")
              : (0, d.GP)(new Date(), "yyyy-MM-dd"),
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
            calendarSync: H(e["sync calendar"]),
            reminderMinutes: $(e["reminder minutes"])
              ? Number(e["reminder minutes"])
              : 30,
            calendarEventId: (e["calendar event id"] || "").toString().trim(),
          };
        }
        function R(e) {
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
            "task priority": B(e.priority || "medium"),
            "task category": B(e.category || "other"),
            "ticket type": (e.ticketType || "task")
              .toString()
              .trim()
              .toLowerCase(),
            "task status": B(e.status || "pending"),
            "user name": (e.userName || "ashserrao@ashtro.dev")
              .toString()
              .trim(),
            "user type": (e.userType || "admin").toString().trim(),
            "log time": e.logTime || new Date().toISOString(),
            "sync calendar": Boolean(e.calendarSync),
            "reminder minutes": $(e.reminderMinutes)
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
        const I =
          "https://script.google.com/macros/s/AKfycbzxrRvX7S2Jh6QOHeeTWaCzTiitdn9Y49CUcI4FZh9MJdnEC_VtF9k04jshmkRavUw/exec";
        async function U(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const a = await fetch(I, {
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
        const G = {
            success: 4e3,
            info: 5e3,
            warning: 6e3,
            error: 8e3,
            loading: 1 / 0,
          },
          W = "taskplanner.notifications.prefs",
          q = { popups: !0 };
        function Z(e, t) {
          try {
            return JSON.parse(localStorage.getItem(e) || "null") ?? t;
          } catch {
            return t;
          }
        }
        function J(e, t) {
          try {
            localStorage.setItem(e, JSON.stringify(t));
          } catch {}
        }
        function V() {
          try {
            return crypto.randomUUID();
          } catch {
            return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
          }
        }
        let Y = [],
          K = [],
          Q = null,
          X = { ...q, ...Z(W, {}) },
          ee = { toasts: Y, inbox: K, prefs: X };
        const te = new Set(),
          ae = new Map();
        function re() {
          ((ee = { toasts: Y, inbox: K, prefs: X }), te.forEach((e) => e()));
        }
        function ne(e) {
          return (te.add(e), () => te.delete(e));
        }
        function le() {
          return ee;
        }
        function oe(e, t) {
          let a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const {
            id: r = V(),
            description: n,
            duration: l = G[e] ?? G.info,
            action: o,
            save: s = !1,
            href: c,
          } = a;
          s && me({ type: e, title: t, description: n, href: c });
          const i = Y.find((e) => e.id === r);
          if (!X.popups && "error" !== e) return (i && se(r), r);
          const d = {
            id: r,
            type: e,
            title: t,
            description: n,
            duration: l,
            action: o,
            open: !0,
            version: (i?.version ?? 0) + 1,
          };
          if (i)
            (clearTimeout(ae.get(r)),
              ae.delete(r),
              (Y = Y.map((e) => (e.id === r ? d : e))));
          else {
            Y = [...Y, d];
            const e = Y.filter((e) => e.open);
            e.slice(0, Math.max(0, e.length - 4)).forEach((e) =>
              se(e.id, { silent: !0 }),
            );
          }
          return (re(), r);
        }
        function se(e) {
          let { silent: t = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const a = Y.filter((t) => t.open && (null == e || t.id === e));
          if (0 === a.length) return;
          const r = new Set(a.map((e) => e.id));
          ((Y = Y.map((e) => (r.has(e.id) ? { ...e, open: !1 } : e))),
            r.forEach((e) => {
              (clearTimeout(ae.get(e)),
                ae.set(
                  e,
                  setTimeout(() => {
                    (ae.delete(e),
                      (Y = Y.filter((t) => t.id !== e || t.open)),
                      re());
                  }, 200),
                ));
            }),
            t || re());
        }
        function ce(e, t) {
          return "function" == typeof e ? e(t) : e;
        }
        function ie() {
          Q && J(Q, K);
        }
        function de(e) {
          ((K = e), ie(), re());
        }
        function me(e) {
          let { type: t = "info", title: a, description: r, href: n } = e;
          const l = {
            id: V(),
            type: "loading" === t ? "info" : t,
            title: String(a),
            description: null == r ? void 0 : String(r),
            href: n,
            read: !1,
            createdAt: Date.now(),
          };
          return (de([l, ...K].slice(0, 50)), l.id);
        }
        function ue(e) {
          let t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          de(K.map((a) => (a.id === e ? { ...a, read: t } : a)));
        }
        function fe() {
          K.every((e) => e.read) ||
            de(K.map((e) => (e.read ? e : { ...e, read: !0 })));
        }
        function ge(e) {
          de(K.filter((t) => t.id !== e));
        }
        function be() {
          de([]);
        }
        function pe(e) {
          de(e);
        }
        function he(e) {
          ((X = { ...X, ...e }),
            J(W, X),
            X.popups ||
              Y.filter((e) => "error" !== e.type).forEach((e) => se(e.id)),
            re());
        }
        "undefined" != typeof window &&
          window.addEventListener("storage", (e) => {
            Q && e.key === Q
              ? ((K = Z(Q, [])), re())
              : e.key === W && ((X = { ...q, ...Z(W, {}) }), re());
          });
        const xe = Object.assign((e, t) => oe("info", e, t), {
          success: (e, t) => oe("success", e, t),
          error: (e, t) => oe("error", e, t),
          warning: (e, t) => oe("warning", e, t),
          info: (e, t) => oe("info", e, t),
          loading: (e, t) => oe("loading", e, t),
          promise: function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            const r = oe("loading", t.loading ?? "Working…", a),
              { save: n, href: l } = a,
              o = Promise.resolve("function" == typeof e ? e() : e);
            return (
              o.then(
                (e) => {
                  oe("success", ce(t.success ?? "Done", e), {
                    id: r,
                    save: n,
                    href: l,
                  });
                },
                (e) => {
                  oe(
                    "error",
                    ce(t.error ?? (e?.message || "Something went wrong"), e),
                    { id: r, save: n, href: l },
                  );
                },
              ),
              o
            );
          },
          dismiss: (e) => se(e),
        });
        function Ee() {
          return (0, r.useSyncExternalStore)(ne, le, le);
        }
        const ye = "taskplanner:tasks",
          ve = (0, r.createContext)(null);
        function Ne() {
          try {
            const e = window.localStorage.getItem(ye);
            return e ? JSON.parse(e) : [];
          } catch {
            return [];
          }
        }
        function we(e) {
          let { children: t } = e;
          const [a, n] = (0, r.useState)(Ne),
            [l, o] = (0, r.useState)(() => new Date()),
            s = (0, r.useCallback)((e) => {
              e?.calendarError &&
                xe.error(`Google Calendar sync failed: ${e.calendarError}`, {
                  save: !0,
                });
            }, []),
            c = (0, r.useCallback)(async () => {
              try {
                const e = await (async function () {
                  const e = await (async function (e) {
                    const t = new URLSearchParams({
                        action: e,
                        ...(arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {}),
                      }),
                      a = await fetch(`${I}?${t.toString()}`);
                    if (!a.ok)
                      throw new Error(`API GET "${e}" failed: ${a.status}`);
                    return a.json();
                  })("list");
                  if (!Array.isArray(e))
                    throw new Error(
                      "Unexpected response shape from timeline sheet",
                    );
                  return e.map(F);
                })();
                if (Array.isArray(e)) {
                  const t = e.filter(Boolean);
                  return (
                    n(t),
                    xe.success(
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
                  xe.error(
                    e.message || "The timeline API could not be reached.",
                    { save: !0 },
                  ));
              }
            }, []);
          ((0, r.useEffect)(() => {
            c();
          }, [c]),
            (0, r.useEffect)(() => {
              try {
                window.localStorage.setItem(ye, JSON.stringify(a));
              } catch {}
            }, [a]));
          const i = (0, r.useCallback)(
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
                    return U("create", R(e));
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
                        xe.success("Task created successfully."),
                        s(e));
                    })
                    .catch((e) => {
                      (console.warn("Failed to sync new task to sheet:", e),
                        xe.error(
                          e.message ||
                            "The task could not be created in the timeline.",
                          { save: !0 },
                        ));
                    }),
                  r
                );
              },
              [s],
            ),
            m = (0, r.useCallback)(
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
                        const a = R(t),
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
                          U("update", l)
                        );
                      })(e, n)
                        .then((e) => {
                          (xe.success("Task updated successfully."), s(e));
                        })
                        .catch((e) => {
                          (console.warn(
                            "Failed to sync task update to sheet:",
                            e,
                          ),
                            xe.error(
                              e.message ||
                                "The task could not be updated in the timeline.",
                              { save: !0 },
                            ));
                        }),
                    r
                  );
                });
              },
              [s],
            ),
            u = (0, r.useCallback)(
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
                      U("delete", n)
                    );
                  })(e, t || {})
                    .then(() => xe.success("Task deleted successfully."))
                    .catch((e) => {
                      (console.warn("Failed to sync task delete to sheet:", e),
                        xe.error(
                          e.message ||
                            "The task could not be deleted from the timeline.",
                          { save: !0 },
                        ));
                    }));
              },
              [a],
            ),
            f = (0, r.useCallback)((e, t) => m(e, { startHour: t }), [m]),
            g = (0, r.useCallback)(() => a, [a]),
            b = (0, r.useMemo)(
              () => ({
                selectedDate: l,
                setSelectedDate: o,
                getTasksForDate: i,
                getAllTasks: g,
                addTask: d,
                updateTask: m,
                deleteTask: u,
                moveTask: f,
                refreshTasks: c,
              }),
              [l, i, g, d, m, u, f, c],
            );
          return r.createElement(ve.Provider, { value: b }, t);
        }
        function ke() {
          const e = (0, r.useContext)(ve);
          if (!e)
            throw new Error(
              "useTimeTracking must be used within a TimeTrackingProvider",
            );
          return e;
        }
        var Ce = a(8697),
          Se = a(4852);
        const Ae = [
            { value: 0, label: "At start time" },
            { value: 5, label: "5 minutes before" },
            { value: 10, label: "10 minutes before" },
            { value: 30, label: "30 minutes before" },
            { value: 60, label: "1 hour before" },
            { value: 120, label: "2 hours before" },
            { value: 1440, label: "1 day before" },
          ],
          Me = {
            date: (0, d.GP)(new Date(), "yyyy-MM-dd"),
            name: "",
            description: "",
            category: j[0].id,
            priority: "medium",
            startHour: 9,
            duration: 1,
            notes: "",
            calendarSync: !1,
            reminderMinutes: 30,
          },
          Le =
            "w-full rounded-lg border border-border bg-secondary/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40";
        function Te(e) {
          let {
            open: t,
            task: a,
            defaultHour: n,
            defaultDate: l,
            existingTasks: o = [],
            onClose: s,
            onSubmit: c,
            onDelete: i,
          } = e;
          const [m, u] = (0, r.useState)(Me),
            [f, g] = (0, r.useState)("");
          let b;
          try {
            const e = ke();
            b = e.getAllTasks;
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
                        category: a.category || j[0].id,
                        priority: a.priority || "medium",
                        date:
                          a.date || l || (0, d.GP)(new Date(), "yyyy-MM-dd"),
                        startHour: a.startHour ?? n ?? 9,
                        duration: a.duration || 1,
                        notes: a.notes || "",
                        calendarSync: Boolean(a.calendarSync),
                        reminderMinutes: a.reminderMinutes ?? 30,
                      }
                    : {
                        ...Me,
                        date: l || (0, d.GP)(new Date(), "yyyy-MM-dd"),
                        startHour: n ?? 9,
                      },
                ));
            }, [t, a, n, l]),
            !t)
          )
            return null;
          const p = (e) => (t) => {
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
                  r.createElement(Ce.A, { className: "h-4 w-4" }),
                ),
              ),
              r.createElement(
                "form",
                {
                  onSubmit: (e) => {
                    if ((e.preventDefault(), !m.name.trim())) return;
                    const t = ("function" == typeof b ? b() : o).find(
                      (e) => e.id !== a?.id && T(m, e),
                    );
                    t
                      ? g(`This overlaps with "${t.name}" (${D(t.startHour)}).`)
                      : c(m);
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
                    className: Le,
                    value: m.name,
                    onChange: p("name"),
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
                    className: Le,
                    value: m.description,
                    onChange: p("description"),
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
                      className: Le,
                      value: m.date,
                      onChange: p("date"),
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
                        className: y(Le, "appearance-none"),
                        value: m.category,
                        onChange: p("category"),
                      },
                      j.map((e) =>
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
                        className: y(Le, "appearance-none"),
                        value: m.priority,
                        onChange: p("priority"),
                      },
                      Object.entries(z).map((e) => {
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
                        className: y(Le, "appearance-none"),
                        value: m.startHour,
                        onChange: p("startHour"),
                      },
                      S.map((e) =>
                        r.createElement("option", { key: e, value: e }, D(e)),
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
                      className: Le,
                      value: m.duration,
                      onChange: p("duration"),
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
                    className: y(Le, "min-h-[70px] resize-none"),
                    value: m.notes,
                    onChange: p("notes"),
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
                      checked: m.calendarSync,
                      onChange: (e) =>
                        u((t) => ({ ...t, calendarSync: e.target.checked })),
                    }),
                    r.createElement(Se.A, {
                      className: "h-4 w-4 text-muted-foreground",
                    }),
                    "Add to Google Calendar",
                  ),
                  m.calendarSync &&
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
                          className: y(Le, "appearance-none"),
                          value: m.reminderMinutes,
                          onChange: p("reminderMinutes"),
                        },
                        Ae.map((e) =>
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
                  a && i
                    ? r.createElement(
                        k,
                        {
                          type: "button",
                          variant: "destructive",
                          size: "sm",
                          onClick: () => i(a.id),
                        },
                        "Delete",
                      )
                    : r.createElement("span", null),
                  r.createElement(
                    "div",
                    { className: "flex gap-2" },
                    r.createElement(
                      k,
                      {
                        type: "button",
                        variant: "ghost",
                        size: "sm",
                        onClick: s,
                      },
                      "Cancel",
                    ),
                    r.createElement(
                      k,
                      { type: "submit", size: "sm" },
                      a ? "Save" : "Add task",
                    ),
                  ),
                ),
              ),
            ),
          );
        }
        const De = new Set(["completed", "done"]),
          je = (e) => De.has(String(e.status || "").toLowerCase());
        function Pe(e) {
          let t = 0,
            a = new Date();
          for (
            e.has((0, d.GP)(a, "yyyy-MM-dd")) || (a = (0, m.e)(a, 1));
            e.has((0, d.GP)(a, "yyyy-MM-dd"));
          )
            ((t += 1), (a = (0, m.e)(a, 1)));
          return t;
        }
        const Oe = function (e) {
            let { onEditTask: t } = e;
            const {
                getAllTasks: a,
                addTask: n,
                updateTask: l,
                deleteTask: o,
              } = ke(),
              s = (0, r.useMemo)(() => a?.() || [], [a]),
              c = (0, r.useMemo)(
                () =>
                  P.map((e) => {
                    const t = s.filter((t) => t.category === e.id),
                      a = new Set(
                        t
                          .filter(je)
                          .map((e) => e.date)
                          .filter(Boolean),
                      );
                    return {
                      category: e,
                      tasks: t,
                      doneDateSet: a,
                      streak: Pe(a),
                    };
                  }),
                [s],
              ),
              [x, E] = (0, r.useState)(() => c[0]?.category.id ?? null),
              v = c.find((e) => e.category.id === x) ?? c[0],
              [N, w] = (0, r.useState)(null),
              C = new Date(),
              S = (0, r.useMemo)(
                () => (0, u.k)({ start: (0, m.e)(C, 29), end: C }),
                [],
              ),
              A = S.slice(-7),
              M = () => w(null);
            return r.createElement(
              "section",
              { id: "habits", className: "min-h-full bg-[#000000]" },
              r.createElement(i, {
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
                      r.createElement(b.A, {
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
                      const t = e.category.id === v?.category.id;
                      return r.createElement(
                        "button",
                        {
                          type: "button",
                          key: e.category.id,
                          onClick: () => E(e.category.id),
                          className: y(
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
                              className: y(
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
                            r.createElement(b.A, { className: "h-3 w-3" }),
                            e.streak,
                          ),
                        ),
                        r.createElement(
                          "div",
                          { className: "mt-2 flex items-center gap-1" },
                          A.map((t) => {
                            const a = (0, d.GP)(t, "yyyy-MM-dd"),
                              n = e.doneDateSet.has(a);
                            return r.createElement("span", {
                              key: a,
                              title: (0, d.GP)(t, "MMM d"),
                              className: y(
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
                  v &&
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
                            v.category.label,
                          ),
                          r.createElement(
                            "p",
                            { className: "text-sm text-muted-foreground" },
                            v.streak,
                            "-day streak •",
                            " ",
                            v.doneDateSet.size,
                            " check-ins in last",
                            " ",
                            30,
                            " days",
                          ),
                        ),
                        r.createElement(
                          k,
                          {
                            size: "sm",
                            onClick: () =>
                              ((e) => {
                                const t = (0, d.GP)(new Date(), "yyyy-MM-dd"),
                                  a = e.tasks.find((e) => e.date === t);
                                a
                                  ? l(a.id, { status: "completed" })
                                  : w({
                                      task: null,
                                      category: e.category.id,
                                      date: t,
                                    });
                              })(v),
                          },
                          r.createElement(p.A, { className: "mr-2 h-4 w-4" }),
                          "Log today",
                        ),
                      ),
                      r.createElement(
                        "div",
                        {
                          className:
                            "grid grid-cols-10 gap-1.5 sm:grid-cols-[repeat(15,minmax(0,1fr))] lg:grid-cols-[repeat(30,minmax(0,1fr))]",
                        },
                        S.map((e) => {
                          const t = (0, d.GP)(e, "yyyy-MM-dd"),
                            a = v.doneDateSet.has(t),
                            n = (0, f.r)(e, C);
                          return r.createElement("div", {
                            key: t,
                            title: `${(0, d.GP)(e, "EEE, MMM d")}${a ? " • done" : ""}`,
                            className: y(
                              "aspect-square rounded-sm",
                              a
                                ? v.category?.solidBgColor || ""
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
                        r.createElement(h.A, {
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
                        0 === v.tasks.length &&
                          r.createElement(
                            "div",
                            {
                              className:
                                "p-4 text-center text-sm text-muted-foreground",
                            },
                            "No entries logged for this habit yet.",
                          ),
                        [...v.tasks]
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
                                  (0, d.GP)((0, g.H)(e.date), "EEE, MMM d"),
                              ),
                              r.createElement(
                                "span",
                                { className: "truncate text-card-foreground" },
                                e.name,
                              ),
                              r.createElement(
                                "span",
                                {
                                  className: y(
                                    "flex-shrink-0 rounded-full border px-2 py-0.5 text-xs capitalize",
                                    je(e)
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
              r.createElement(Te, {
                open: Boolean(N),
                task: N?.task ?? null,
                defaultCategory: N?.category,
                defaultDate: N?.date,
                existingTasks: v?.tasks ?? [],
                onClose: M,
                onSubmit: (e) => {
                  if (N?.task) l(N.task.id, e);
                  else {
                    const t = e.date || N?.date;
                    n(t, {
                      ...e,
                      category: N?.category,
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
          _e = () => {
            const [e, t] = (0, r.useState)([]);
            return r.createElement(
              "section",
              { id: "home", className: "relative min-h-full overflow-hidden" },
              r.createElement(i, {
                hexRadius: 60,
                viewWidth: 900,
                viewHeight: 600,
              }),
              r.createElement(Oe, null),
            );
          };
        var ze = a(9436),
          Be = a(5042),
          He = a(9230);
        function $e() {
          return (
            ($e = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            $e.apply(null, arguments)
          );
        }
        const Fe = (0, r.createContext)(null);
        function Re(e) {
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
              Fe.Provider,
              { value: { open: a, setOpen: n } },
              r.createElement(
                "div",
                { ref: l, className: "relative inline-block" },
                t,
              ),
            )
          );
        }
        function Ie(e) {
          let { asChild: t, children: a, ...n } = e;
          const { open: l, setOpen: o } = (0, r.useContext)(Fe),
            s = (e) => {
              (a.props.onClick?.(e), n.onClick?.(e), o(!l));
            };
          return t
            ? (0, r.cloneElement)(a, { ...n, onClick: s })
            : r.createElement(
                "button",
                $e({ type: "button" }, n, { onClick: s }),
                a,
              );
        }
        function Ue(e) {
          let { align: t = "start", className: a, children: n } = e;
          const { open: l } = (0, r.useContext)(Fe);
          return l
            ? r.createElement(
                "div",
                {
                  className: y(
                    "absolute z-50 mt-2 min-w-[10rem] rounded-lg border border-border bg-card p-1 shadow-xl",
                    "end" === t ? "right-0" : "left-0",
                    a,
                  ),
                },
                n,
              )
            : null;
        }
        function Ge(e) {
          let { className: t, onClick: a, children: n, ...l } = e;
          const { setOpen: o } = (0, r.useContext)(Fe);
          return r.createElement(
            "button",
            $e(
              {
                type: "button",
                className: y(
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
        function We(e) {
          let { className: t } = e;
          return r.createElement("div", {
            className: y("my-1 h-px bg-border", t),
          });
        }
        var qe = a(990);
        function Ze() {
          return (
            (Ze = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Ze.apply(null, arguments)
          );
        }
        const Je = qe.bL,
          Ve = qe.l9;
        function Ye(e) {
          let { className: t, children: a, side: n = "right", ...l } = e;
          return r.createElement(
            qe.ZL,
            null,
            r.createElement(qe.hJ, {
              className:
                "fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            }),
            r.createElement(
              qe.UC,
              Ze(
                {
                  className: y(
                    "fixed z-50 flex flex-col gap-4 bg-background text-foreground shadow-lg transition ease-in-out",
                    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
                    "right" === n &&
                      "inset-y-0 right-0 h-full w-3/4 border-l border-border data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
                    "left" === n &&
                      "inset-y-0 left-0 h-full w-3/4 border-r border-border data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                    t,
                  ),
                },
                l,
              ),
              a,
              r.createElement(
                qe.bm,
                {
                  className:
                    "absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                },
                r.createElement(Ce.A, { className: "h-4 w-4" }),
                r.createElement("span", { className: "sr-only" }, "Close"),
              ),
            ),
          );
        }
        function Ke(e) {
          let { className: t, ...a } = e;
          return r.createElement(
            qe.hE,
            Ze({ className: y("font-semibold text-foreground", t) }, a),
          );
        }
        function Qe(e) {
          let { className: t, ...a } = e;
          return r.createElement(
            qe.VY,
            Ze({ className: y("text-sm text-muted-foreground", t) }, a),
          );
        }
        qe.bm;
        var Xe = a(1316),
          et = a(5700);
        function tt() {
          return (
            (tt = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            tt.apply(null, arguments)
          );
        }
        const at = et.bL,
          rt = et.l9;
        function nt(e) {
          let {
            className: t,
            align: a = "center",
            sideOffset: n = 4,
            ...l
          } = e;
          return r.createElement(
            et.ZL,
            null,
            r.createElement(
              et.UC,
              tt(
                {
                  align: a,
                  sideOffset: n,
                  className: y(
                    "z-50 w-72 origin-[--radix-popover-content-transform-origin] rounded-lg border border-border bg-card p-4 text-card-foreground shadow-xl outline-none",
                    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                    t,
                  ),
                },
                l,
              ),
            ),
          );
        }
        et.bm;
        var lt = a(8376),
          ot = a(5773),
          st = a(8007);
        const ct = (0, r.createContext)(null),
          it = "taskplanner.auth.session",
          dt = "taskplanner.auth.users",
          mt = {
            username: "demo",
            email: "demo@ashtro.dev",
            password: "Demo@123",
            firstName: "Demo",
            lastName: "User",
          };
        function ut() {
          try {
            const e = JSON.parse(localStorage.getItem(dt) || "[]");
            return [mt, ...e];
          } catch {
            return [mt];
          }
        }
        function ft() {
          try {
            return JSON.parse(localStorage.getItem(it) || "null");
          } catch {
            return null;
          }
        }
        function gt(e) {
          let { children: t } = e;
          const [a, n] = (0, r.useState)(ft);
          (0, r.useEffect)(() => {
            a
              ? localStorage.setItem(it, JSON.stringify(a))
              : localStorage.removeItem(it);
          }, [a]);
          const l = (0, r.useCallback)((e, t) => {
              const a = e?.trim().toLowerCase(),
                r = ut().find(
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
              if (ut().some((e) => e.email?.toLowerCase() === t))
                return {
                  success: !1,
                  error: "An account with that email already exists.",
                };
              const a = { ...e, username: t, email: t },
                r = JSON.parse(localStorage.getItem(dt) || "[]");
              (r.push(a), localStorage.setItem(dt, JSON.stringify(r)));
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
          return r.createElement(ct.Provider, { value: c }, t);
        }
        function bt() {
          const e = (0, r.useContext)(ct);
          if (!e)
            throw new Error("useAuth must be used within an AuthProvider");
          return e;
        }
        var pt = a(9804),
          ht = a(7946),
          xt = a(418),
          Et = a(7213),
          yt = a(1104);
        const vt = {
          success: {
            label: "Success",
            icon: pt.A,
            iconClass: "bg-emerald-500/15 text-emerald-400",
            barClass: "bg-emerald-500",
          },
          error: {
            label: "Error",
            icon: ht.A,
            iconClass: "bg-rose-500/15 text-rose-400",
            barClass: "bg-rose-500",
          },
          warning: {
            label: "Warning",
            icon: xt.A,
            iconClass: "bg-amber-500/15 text-amber-400",
            barClass: "bg-amber-500",
          },
          info: {
            label: "Info",
            icon: Et.A,
            iconClass: "bg-sky-500/15 text-sky-400",
            barClass: "bg-sky-500",
          },
          loading: {
            label: "In progress",
            icon: yt.A,
            iconClass: "bg-brand-soft text-brand-fg [&_svg]:animate-spin",
            barClass: "bg-brand",
          },
        };
        function Nt(e) {
          return vt[e] ?? vt.info;
        }
        function wt() {
          const { toasts: e } = Ee(),
            [t, a] = (0, r.useState)(!1),
            [n, l] = (0, r.useState)(!1),
            [o, s] = (0, r.useState)(
              () => "undefined" != typeof document && document.hidden,
            );
          ((0, r.useEffect)(() => {
            const e = () => s(document.hidden);
            return (
              document.addEventListener("visibilitychange", e),
              () => document.removeEventListener("visibilitychange", e)
            );
          }, []),
            (0, r.useEffect)(() => {
              0 === e.length && (a(!1), l(!1));
            }, [e.length]));
          const c = t || n || o;
          return r.createElement(
            "section",
            {
              "aria-label": "Notifications",
              className:
                "pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex justify-center p-4 md:inset-x-auto md:right-0 md:p-6",
            },
            r.createElement(
              "ol",
              {
                className: "flex w-full flex-col gap-2 md:w-[380px]",
                onMouseEnter: () => a(!0),
                onMouseLeave: () => a(!1),
                onFocus: () => l(!0),
                onBlur: (e) => {
                  e.currentTarget.contains(e.relatedTarget) || l(!1);
                },
              },
              e.map((e) =>
                r.createElement(kt, { key: e.id, toast: e, paused: c }),
              ),
            ),
          );
        }
        function kt(e) {
          let { toast: t, paused: a } = e;
          const { icon: n, iconClass: l, barClass: o } = Nt(t.type),
            s = Number.isFinite(t.duration),
            c = () => xe.dismiss(t.id);
          return r.createElement(
            "li",
            {
              role: "error" === t.type ? "alert" : "status",
              "aria-atomic": "true",
              "data-state": t.open ? "open" : "closed",
              onKeyDown: (e) => {
                "Escape" === e.key && c();
              },
              className: y(
                "pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-xl p-4 pr-11 shadow-lg",
                "bg-card ring-1 ring-border",
                "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-4 md:data-[state=open]:slide-in-from-right-8",
                "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:fill-mode-forwards",
              ),
            },
            r.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: y(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                  l,
                ),
              },
              r.createElement(n, { className: "h-[18px] w-[18px]" }),
            ),
            r.createElement(
              "div",
              { className: "min-w-0 flex-1 pt-1" },
              r.createElement(
                "p",
                {
                  className:
                    "text-sm font-semibold leading-snug text-foreground",
                },
                t.title,
              ),
              t.description &&
                r.createElement(
                  "p",
                  { className: "mt-1 text-sm text-muted-foreground" },
                  t.description,
                ),
              t.action &&
                r.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      (t.action.onClick?.(), c());
                    },
                    className:
                      "-ml-2 mt-2 rounded-md px-2 py-1 text-sm font-semibold text-brand-fg outline-none transition-colors hover:bg-brand-soft focus-visible:ring-[3px] focus-visible:ring-brand-fg/40",
                  },
                  t.action.label,
                ),
            ),
            r.createElement(
              "button",
              {
                type: "button",
                onClick: c,
                "aria-label": "Dismiss notification",
                className:
                  "absolute right-2 top-2 rounded-md p-1.5 text-muted-foreground outline-none transition-colors hover:bg-white/10 hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-brand-fg/40",
              },
              r.createElement(Ce.A, { className: "h-4 w-4" }),
            ),
            s &&
              t.open &&
              r.createElement("span", {
                key: t.version,
                "aria-hidden": "true",
                onAnimationEnd: (e) => {
                  e.target === e.currentTarget && c();
                },
                className: y(
                  "absolute bottom-0 left-0 h-[3px] w-full origin-left opacity-70",
                  o,
                ),
                style: {
                  animation: `toast-timer ${t.duration}ms linear forwards`,
                  animationPlayState: a ? "paused" : "running",
                },
              }),
          );
        }
        function Ct(e) {
          let { children: t } = e;
          const { user: a } = bt(),
            n = a?.email ?? a?.username ?? null;
          return (
            (0, r.useLayoutEffect)(() => {
              !(function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
                const a = e ? `taskplanner.notifications.inbox.${e}` : null;
                if (a !== Q) {
                  if (((Q = a), Q)) {
                    const e = Z(Q, null);
                    Array.isArray(e)
                      ? (K = e)
                      : ((K = t.map((e) => ({
                          id: V(),
                          read: !1,
                          createdAt: Date.now(),
                          ...e,
                        }))),
                        ie());
                  } else K = [];
                  re();
                }
              })(
                n,
                n
                  ? [
                      {
                        type: "info",
                        title: "Welcome to Ashtro Planner",
                        description:
                          "Plan your day in the Time Planner and track progress in Project Track.",
                        href: "/time-planner",
                        createdAt: Date.now() - 12e4,
                      },
                    ]
                  : [],
              );
            }, [n]),
            r.createElement(r.Fragment, null, t, r.createElement(wt, null))
          );
        }
        function St() {
          const { inbox: e, prefs: t } = Ee(),
            a = (0, r.useMemo)(() => e.filter((e) => !e.read).length, [e]);
          return {
            notifications: e,
            unreadCount: a,
            prefs: t,
            notify: xe,
            addNotification: me,
            markRead: (e) => ue(e, !0),
            markUnread: (e) => ue(e, !1),
            markAllRead: fe,
            remove: ge,
            clearAll: be,
            restore: pe,
            setPrefs: he,
          };
        }
        const At = [
          ["year", 31536e6],
          ["month", 2592e6],
          ["week", 6048e5],
          ["day", 864e5],
          ["hour", 36e5],
          ["minute", 6e4],
        ];
        function Mt(e) {
          let {
            items: t,
            onNavigate: a,
            emptyTitle: n = "You're all caught up",
            emptyDescription: l = "New notifications will show up here.",
            className: o,
          } = e;
          const s = (function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 6e4;
            const [t, a] = (0, r.useState)(Date.now);
            return (
              (0, r.useEffect)(() => {
                const t = setInterval(() => a(Date.now()), e);
                return () => clearInterval(t);
              }, [e]),
              t
            );
          })();
          return 0 === t.length
            ? r.createElement(
                "div",
                {
                  className:
                    "flex flex-col items-center gap-2 px-6 py-10 text-center",
                },
                r.createElement(
                  "span",
                  {
                    className:
                      "flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft text-brand-fg",
                  },
                  r.createElement(lt.A, { className: "h-5 w-5" }),
                ),
                r.createElement("p", { className: "text-sm font-semibold" }, n),
                r.createElement(
                  "p",
                  { className: "text-xs text-muted-foreground" },
                  l,
                ),
              )
            : r.createElement(
                "ul",
                { className: y("divide-y divide-border", o) },
                t.map((e) =>
                  r.createElement(Lt, {
                    key: e.id,
                    item: e,
                    now: s,
                    onNavigate: a,
                  }),
                ),
              );
        }
        function Lt(e) {
          let { item: t, now: a, onNavigate: n } = e;
          const { markRead: l, markUnread: o, remove: c } = St(),
            { icon: i, iconClass: d, label: m } = Nt(t.type),
            u = !t.read,
            f = r.createElement(
              r.Fragment,
              null,
              r.createElement(
                "span",
                {
                  "aria-hidden": "true",
                  className: y(
                    "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                    d,
                  ),
                },
                r.createElement(i, { className: "h-4 w-4" }),
              ),
              r.createElement(
                "span",
                { className: "min-w-0 flex-1" },
                r.createElement(
                  "span",
                  { className: "sr-only" },
                  u ? "Unread" : "Read",
                  " ",
                  m.toLowerCase(),
                  " notification:",
                  " ",
                ),
                r.createElement(
                  "span",
                  {
                    className: y(
                      "block text-sm leading-snug",
                      u ? "font-semibold" : "font-medium text-muted-foreground",
                    ),
                  },
                  t.title,
                ),
                t.description &&
                  r.createElement(
                    "span",
                    {
                      className:
                        "mt-0.5 line-clamp-2 block text-xs text-muted-foreground",
                    },
                    t.description,
                  ),
                r.createElement(
                  "time",
                  {
                    dateTime: new Date(t.createdAt).toISOString(),
                    title: new Date(t.createdAt).toLocaleString(),
                    className: "mt-1 block text-xs text-muted-foreground/80",
                  },
                  (function (e) {
                    const t =
                        e -
                        (arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : Date.now()),
                      a = new Intl.RelativeTimeFormat(void 0, {
                        numeric: "auto",
                      });
                    for (const [e, r] of At)
                      if (Math.abs(t) >= r)
                        return a.format(Math.round(t / r), e);
                    return "just now";
                  })(t.createdAt, a),
                ),
              ),
            ),
            g = y(
              "flex w-full items-start gap-3 py-3 pl-4 pr-20 text-left outline-none transition-colors",
              "hover:bg-white/5 focus-visible:bg-white/5",
              u && "bg-brand-soft/60",
            );
          return r.createElement(
            "li",
            { className: "group relative" },
            t.href
              ? r.createElement(
                  s.N_,
                  {
                    to: t.href,
                    className: g,
                    onClick: () => {
                      (l(t.id), n?.());
                    },
                  },
                  f,
                )
              : r.createElement(
                  "button",
                  { type: "button", className: g, onClick: () => l(t.id) },
                  f,
                ),
            u &&
              r.createElement("span", {
                "aria-hidden": "true",
                className:
                  "pointer-events-none absolute right-4 top-4 h-2 w-2 rounded-full bg-brand-fg group-focus-within:opacity-0 group-hover:opacity-0",
              }),
            r.createElement(
              "div",
              {
                className:
                  "absolute right-2 top-2 flex gap-0.5 opacity-0 transition-opacity focus-within:opacity-100 group-hover:opacity-100 [@media(hover:none)]:opacity-100",
              },
              r.createElement(
                Tt,
                {
                  label: u ? "Mark as read" : "Mark as unread",
                  onClick: () => (u ? l(t.id) : o(t.id)),
                },
                u ? r.createElement(ot.A, null) : r.createElement(st.A, null),
              ),
              r.createElement(
                Tt,
                { label: "Remove notification", onClick: () => c(t.id) },
                r.createElement(Ce.A, null),
              ),
            ),
          );
        }
        function Tt(e) {
          let { label: t, onClick: a, children: n } = e;
          return r.createElement(
            "button",
            {
              type: "button",
              onClick: a,
              "aria-label": t,
              title: t,
              className:
                "rounded-md p-1.5 text-muted-foreground outline-none transition-colors hover:bg-white/10 hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-brand-fg/40 [&_svg]:h-4 [&_svg]:w-4",
            },
            n,
          );
        }
        const Dt = [
          { value: "all", label: "All" },
          { value: "unread", label: "Unread" },
        ];
        function jt() {
          const [e, t] = (0, r.useState)(!1),
            [a, n] = (0, r.useState)("all"),
            { notifications: l, unreadCount: o, markAllRead: c } = St(),
            i = "unread" === a ? l.filter((e) => !e.read) : l;
          return r.createElement(
            at,
            { open: e, onOpenChange: t },
            r.createElement(
              rt,
              { asChild: !0 },
              r.createElement(
                k,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "relative h-9 w-9 rounded-full",
                  "aria-label":
                    o > 0 ? `Notifications, ${o} unread` : "Notifications",
                },
                r.createElement(ze.A, { className: "h-5 w-5" }),
                o > 0 &&
                  r.createElement(
                    "span",
                    {
                      "aria-hidden": "true",
                      className:
                        "absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-brand-strong px-1 text-[10px] font-semibold leading-none text-white ring-2 ring-background",
                    },
                    o > 9 ? "9+" : o,
                  ),
              ),
            ),
            r.createElement(
              nt,
              {
                align: "end",
                sideOffset: 8,
                collisionPadding: 16,
                className:
                  "w-[min(24rem,calc(100vw-2rem))] overflow-hidden p-0",
              },
              r.createElement(
                "div",
                {
                  className:
                    "flex items-center justify-between gap-3 border-b border-border px-4 py-3",
                },
                r.createElement(
                  "div",
                  { className: "flex items-center gap-2" },
                  r.createElement(
                    "h2",
                    { className: "text-sm font-semibold" },
                    "Notifications",
                  ),
                  o > 0 &&
                    r.createElement(
                      "span",
                      {
                        className:
                          "rounded-full bg-brand-soft px-2 py-0.5 text-xs font-medium text-brand-fg",
                      },
                      o,
                      " new",
                    ),
                ),
                r.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: c,
                    disabled: 0 === o,
                    className:
                      "inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-brand-fg outline-none transition-colors hover:bg-brand-soft focus-visible:ring-[3px] focus-visible:ring-brand-fg/40 disabled:pointer-events-none disabled:opacity-50",
                  },
                  r.createElement(Xe.A, { className: "h-3.5 w-3.5" }),
                  "Mark all as read",
                ),
              ),
              r.createElement(
                "div",
                {
                  role: "group",
                  "aria-label": "Filter notifications",
                  className: "flex gap-1 border-b border-border px-3 py-2",
                },
                Dt.map((e) =>
                  r.createElement(
                    "button",
                    {
                      key: e.value,
                      type: "button",
                      "aria-pressed": a === e.value,
                      onClick: () => n(e.value),
                      className: y(
                        "rounded-md px-2.5 py-1 text-xs font-medium outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-brand-fg/40",
                        a === e.value
                          ? "bg-white/10 text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      ),
                    },
                    e.label,
                  ),
                ),
              ),
              r.createElement(
                "div",
                { className: "max-h-[min(24rem,60vh)] overflow-y-auto" },
                r.createElement(Mt, {
                  items: i,
                  onNavigate: () => t(!1),
                  emptyTitle:
                    "unread" === a ? "No unread notifications" : void 0,
                }),
              ),
              r.createElement(
                "div",
                { className: "border-t border-border p-2" },
                r.createElement(
                  s.N_,
                  {
                    to: "/notifications",
                    onClick: () => t(!1),
                    className:
                      "block rounded-md px-3 py-2 text-center text-sm font-medium text-brand-fg outline-none transition-colors hover:bg-brand-soft focus-visible:ring-[3px] focus-visible:ring-brand-fg/40",
                  },
                  "View all notifications",
                ),
              ),
            ),
          );
        }
        var Pt = a(1805),
          Ot = a(6220),
          _t = a(7849),
          zt = a(7298),
          Bt = a(7774);
        const Ht = [
          { label: "home", to: "/", icon: Pt.A },
          { label: "time-planner", to: "/time-planner", icon: Ot.A },
          { label: "project-track", to: "/project-track", icon: _t.A },
          { label: "todo-list", to: "/todo-list", icon: zt.A },
          { label: "nec-doc", to: "/nec-doc", icon: Bt.A },
          { label: "dev-res-admin", to: "/dev-res-admin", icon: Bt.A },
        ];
        function $t(e) {
          let { className: t } = e;
          return r.createElement("img", {
            src: "/assets/logo no bg.svg",
            alt: "Logo",
            className: "h-12 w-12 shrink-0",
          });
        }
        function Ft() {
          const [e, t] = (0, r.useState)(!1),
            a = (0, s.Zp)(),
            { user: n, logout: l } = bt(),
            o =
              [n?.firstName, n?.lastName].filter(Boolean).join(" ") ||
              n?.username ||
              "Guest",
            c =
              o
                .split(/\s+/)
                .map((e) => e[0])
                .join("")
                .slice(0, 2)
                .toUpperCase() || "?";
          function i() {
            (t(!1),
              l(),
              xe.info("You've been signed out"),
              a("/login", { replace: !0 }));
          }
          return r.createElement(
            "nav",
            {
              role: "navigation",
              "aria-label": "Primary",
              className:
                "sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md",
            },
            r.createElement(
              "div",
              {
                className:
                  "mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-2.5 md:px-6 lg:px-8",
              },
              r.createElement(
                s.N_,
                {
                  to: "/",
                  className: "flex min-w-0 items-center gap-2.5",
                  "aria-label": "Ashtro Planner",
                },
                r.createElement($t, null),
                r.createElement(
                  "span",
                  {
                    className:
                      "truncate font-display text-lg font-semibold tracking-tight text-brand-gradient",
                  },
                  "Ashtro Planner",
                ),
              ),
              r.createElement(
                "ul",
                { className: "hidden items-center gap-1 lg:flex" },
                Ht.map((e) =>
                  r.createElement(
                    "li",
                    { key: e.label },
                    r.createElement(
                      s.k2,
                      {
                        to: e.to,
                        end: !0,
                        className: (e) => {
                          let { isActive: t } = e;
                          return y(
                            "inline-flex items-center rounded-md px-3 py-2 text-sm capitalize text-muted-foreground transition-colors",
                            "hover:text-foreground",
                            t && "bg-white/10 font-medium text-glow",
                          );
                        },
                      },
                      e.label,
                    ),
                  ),
                ),
              ),
              r.createElement(
                "div",
                { className: "flex shrink-0 items-center gap-2" },
                r.createElement(jt, null),
                r.createElement(
                  Re,
                  null,
                  r.createElement(
                    Ie,
                    { asChild: !0 },
                    r.createElement(
                      k,
                      {
                        variant: "ghost",
                        size: "icon",
                        className: "h-9 w-9 rounded-full",
                        "aria-label": "Open profile menu",
                      },
                      r.createElement(
                        "span",
                        {
                          className:
                            "flex h-8 w-8 items-center justify-center rounded-full bg-brand-strong text-xs font-semibold text-white",
                        },
                        c,
                      ),
                    ),
                  ),
                  r.createElement(
                    Ue,
                    { align: "end", className: "w-56" },
                    r.createElement(
                      "div",
                      {
                        className:
                          "flex flex-col px-2 py-1.5 text-sm font-medium",
                      },
                      r.createElement("span", { className: "truncate" }, o),
                      r.createElement(
                        "span",
                        {
                          className:
                            "truncate text-xs font-normal text-muted-foreground",
                        },
                        n?.email,
                      ),
                    ),
                    r.createElement(We, null),
                    r.createElement(
                      Ge,
                      {
                        className: "gap-2",
                        onClick: () => a("/notifications"),
                      },
                      r.createElement(ze.A, {
                        className: "h-4 w-4 text-muted-foreground",
                      }),
                      "Notifications",
                    ),
                    r.createElement(We, null),
                    r.createElement(
                      Ge,
                      { className: "gap-2", onClick: i },
                      r.createElement(Be.A, {
                        className: "h-4 w-4 text-muted-foreground",
                      }),
                      "Sign out",
                    ),
                  ),
                ),
                r.createElement(
                  Je,
                  { open: e, onOpenChange: t },
                  r.createElement(
                    Ve,
                    { asChild: !0 },
                    r.createElement(
                      k,
                      {
                        variant: "outline",
                        size: "icon",
                        className: "h-9 w-9 lg:hidden",
                        "aria-label": "Open menu",
                      },
                      r.createElement(He.A, { className: "h-5 w-5" }),
                    ),
                  ),
                  r.createElement(
                    Ye,
                    { side: "left", className: "w-[18rem] gap-0 p-0" },
                    r.createElement(
                      Ke,
                      { className: "sr-only" },
                      "Navigation menu",
                    ),
                    r.createElement(
                      Qe,
                      { className: "sr-only" },
                      "Site navigation links",
                    ),
                    r.createElement(
                      "div",
                      { className: "border-b border-border px-4 pb-3 pt-4" },
                      r.createElement(
                        "div",
                        { className: "flex items-center gap-2" },
                        r.createElement($t, null),
                        r.createElement(
                          "span",
                          {
                            className:
                              "font-display text-base font-semibold tracking-tight",
                          },
                          "Ashtro Planner",
                        ),
                      ),
                    ),
                    r.createElement(
                      "div",
                      { className: "flex flex-col gap-1 p-2" },
                      Ht.map((e) =>
                        r.createElement(
                          s.k2,
                          {
                            key: e.label,
                            to: e.to,
                            end: !0,
                            className: (e) => {
                              let { isActive: t } = e;
                              return y(
                                "flex items-center gap-3 rounded-md px-3 py-2 text-sm capitalize transition-colors",
                                t
                                  ? "bg-brand-gradient text-white"
                                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                              );
                            },
                            onClick: () => t(!1),
                          },
                          r.createElement(e.icon, {
                            className: "h-4 w-4 shrink-0",
                          }),
                          e.label,
                        ),
                      ),
                    ),
                    r.createElement(
                      "div",
                      { className: "mt-auto border-t border-border p-2" },
                      r.createElement(
                        "button",
                        {
                          type: "button",
                          onClick: i,
                          className:
                            "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                        },
                        r.createElement(Be.A, {
                          className: "h-4 w-4 shrink-0",
                        }),
                        "Sign out",
                      ),
                    ),
                  ),
                ),
              ),
            ),
            r.createElement("div", {
              className: "h-[2px] w-full bg-brand-gradient-accent",
            }),
          );
        }
        var Rt = a(6110);
        const It = function () {
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
                  r.createElement(Rt.A, {
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
          Ut = function (e) {
            let { children: t } = e;
            return r.createElement(
              "main",
              {
                className:
                  "relative flex min-h-svh items-center justify-center overflow-hidden bg-background p-4 sm:p-6",
              },
              r.createElement(i, {
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
                r.createElement(It, null),
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
        var Gt = a(3540),
          Wt = a(3160);
        function qt() {
          return (
            (qt = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            qt.apply(null, arguments)
          );
        }
        const Zt = (0, r.forwardRef)(function (e, t) {
          let {
            label: a,
            icon: n,
            type: l = "text",
            className: o,
            id: s,
            ...c
          } = e;
          const i = (0, r.useId)(),
            d = s ?? i,
            m = "password" === l,
            [u, f] = (0, r.useState)(!1),
            g = m ? (u ? "text" : "password") : l;
          return r.createElement(
            "div",
            { className: "group flex flex-col gap-1.5" },
            r.createElement(
              "label",
              {
                htmlFor: d,
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
                qt(
                  {
                    ref: t,
                    id: d,
                    type: g,
                    className: y(
                      "w-full rounded-lg border border-input bg-secondary/40 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40",
                      "transition-all duration-200 outline-none",
                      "focus:border-accent/60 focus:bg-secondary/70 focus:ring-2 focus:ring-accent/25",
                      n ? "pl-10" : "pl-3.5",
                      m ? "pr-10" : "pr-3.5",
                      o,
                    ),
                  },
                  c,
                ),
              ),
              m &&
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
                    ? r.createElement(Gt.A, { className: "size-4" })
                    : r.createElement(Wt.A, { className: "size-4" }),
                ),
            ),
          );
        });
        function Jt() {
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
        function Vt() {
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
        function Yt() {
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
        const Kt = [
          { name: "Google", icon: r.createElement(Jt, null) },
          { name: "GitLab", icon: r.createElement(Vt, null) },
          { name: "Windows", icon: r.createElement(Yt, null) },
        ];
        function Qt(e) {
          let { action: t } = e;
          return r.createElement(
            "div",
            { className: "grid grid-cols-3 gap-2 sm:gap-3" },
            Kt.map((e) =>
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
        const Xt = function (e) {
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
        };
        var ea = a(8686),
          ta = a(7078),
          aa = a(8656);
        const ra = function () {
            const [e, t] = (0, r.useState)(!1),
              [a, n] = (0, r.useState)(""),
              { login: l } = bt(),
              o = (0, s.Zp)();
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
                    s.N_,
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
                r.createElement(Qt, { action: "Sign in" }),
              ),
              r.createElement(
                "div",
                {
                  className: "animate-fade-up",
                  style: { animationDelay: "0.14s" },
                },
                r.createElement(Xt, null, "or continue with"),
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
                r.createElement(Zt, {
                  label: "Username or email",
                  name: "identifier",
                  placeholder: "jane.doe or jane@company.com",
                  autoComplete: "username",
                  icon: r.createElement(ea.A, { className: "size-4" }),
                  required: !0,
                }),
                r.createElement(
                  "div",
                  { className: "flex flex-col gap-1.5" },
                  r.createElement(Zt, {
                    label: "Password",
                    name: "password",
                    type: "password",
                    placeholder: "••••••••",
                    autoComplete: "current-password",
                    icon: r.createElement(ta.A, { className: "size-4" }),
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
                      s.N_,
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
                  k,
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
                        r.createElement(yt.A, {
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
                r.createElement(aa.A, { className: "size-3.5" }),
                "Protected by Ashtro Dev single sign-on",
              ),
            );
          },
          na = function () {
            return r.createElement(Ut, null, r.createElement(ra, null));
          };
        var la = a(9869),
          oa = a(6017);
        function sa() {
          const [e, t] = (0, r.useState)(!1),
            [a, n] = (0, r.useState)(""),
            [l, o] = (0, r.useState)(""),
            [c, i] = (0, r.useState)(""),
            d = c.length > 0 && l !== c,
            { signup: m } = bt(),
            u = (0, s.Zp)();
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
                  s.N_,
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
              r.createElement(Qt, { action: "Sign up" }),
            ),
            r.createElement(
              "div",
              {
                className: "animate-fade-up",
                style: { animationDelay: "0.14s" },
              },
              r.createElement(Xt, null, "or sign up with email"),
            ),
            r.createElement(
              "form",
              {
                onSubmit: function (e) {
                  if ((e.preventDefault(), n(""), d)) return;
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
                r.createElement(Zt, {
                  label: "First name",
                  name: "firstName",
                  placeholder: "Jane",
                  autoComplete: "given-name",
                  icon: r.createElement(ea.A, { className: "size-4" }),
                  required: !0,
                }),
                r.createElement(Zt, {
                  label: "Last name",
                  name: "lastName",
                  placeholder: "Doe",
                  autoComplete: "family-name",
                  required: !0,
                }),
              ),
              r.createElement(Zt, {
                label: "Email",
                name: "email",
                type: "email",
                placeholder: "jane@company.com",
                autoComplete: "email",
                icon: r.createElement(aa.A, { className: "size-4" }),
                required: !0,
              }),
              r.createElement(Zt, {
                label: "Phone",
                name: "phone",
                type: "tel",
                placeholder: "+1 (555) 000-0000",
                autoComplete: "tel",
                icon: r.createElement(la.A, { className: "size-4" }),
                required: !0,
              }),
              r.createElement(Zt, {
                label: "Password",
                name: "password",
                type: "password",
                placeholder: "••••••••",
                autoComplete: "new-password",
                icon: r.createElement(ta.A, { className: "size-4" }),
                value: l,
                onChange: (e) => o(e.target.value),
                required: !0,
              }),
              r.createElement(
                "div",
                { className: "flex flex-col gap-1" },
                r.createElement(Zt, {
                  label: "Confirm password",
                  name: "confirmPassword",
                  type: "password",
                  placeholder: "••••••••",
                  autoComplete: "new-password",
                  icon: r.createElement(oa.A, { className: "size-4" }),
                  value: c,
                  onChange: (e) => i(e.target.value),
                  "aria-invalid": d,
                  required: !0,
                }),
                d &&
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
                k,
                {
                  type: "submit",
                  disabled: e || d,
                  className:
                    "mt-2 h-11 w-full bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_rgba(122,41,56,0.9)] transition-transform hover:-translate-y-0.5 hover:bg-primary/90",
                },
                e
                  ? r.createElement(
                      r.Fragment,
                      null,
                      r.createElement(yt.A, {
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
                  s.N_,
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
                  s.N_,
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
        function ca() {
          return r.createElement(Ut, null, r.createElement(sa, null));
        }
        var ia = a(5892),
          da = a(2708);
        const ma = new Set(["completed", "done"]),
          ua = (e) => ma.has(String(e.status || "").toLowerCase()),
          fa = function (e) {
            let { onEditTask: t } = e;
            const {
                getAllTasks: a,
                addTask: n,
                updateTask: l,
                deleteTask: o,
              } = ke(),
              s = (0, r.useMemo)(() => a?.() || [], [a]),
              c = (0, r.useMemo)(
                () =>
                  P.map((e) => {
                    const t = s.filter((t) => t.category === e.id),
                      a = t.filter(ua).length,
                      r = t.length ? Math.round((a / t.length) * 100) : 0;
                    return { category: e, tasks: t, completed: a, progress: r };
                  }),
                [s],
              ),
              [m, u] = (0, r.useState)(() => c[0]?.category.id ?? null),
              f = c.find((e) => e.category.id === m) ?? c[0],
              [b, h] = (0, r.useState)(null),
              [x, E] = (0, r.useState)(null),
              v = (0, r.useMemo)(
                () =>
                  f
                    ? [...f.tasks].sort(
                        (e, t) =>
                          (e.date ? (0, g.H)(e.date).getTime() : 0) +
                          36e5 * (e.startHour || 0) -
                          ((t.date ? (0, g.H)(t.date).getTime() : 0) +
                            36e5 * (t.startHour || 0)),
                      )
                    : [],
                [f],
              ),
              N = () => h(null);
            return r.createElement(
              "section",
              { id: "projects", className: "min-h-full bg-[#000000]" },
              r.createElement(i, {
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
                      r.createElement(_t.A, {
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
                          const o = t.id === f?.category.id;
                          return r.createElement(
                            "button",
                            {
                              type: "button",
                              key: t.id,
                              onClick: () => u(t.id),
                              className: y(
                                "w-full rounded-lg border border-border/60 p-3 text-left transition-colors hover:bg-secondary/40",
                                o && "border-primary/50 bg-primary/10",
                              ),
                            },
                            r.createElement(
                              "div",
                              { className: "flex items-center gap-2" },
                              r.createElement("span", {
                                className: y(
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
                                className: y(
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
                      f
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
                                  className: y(
                                    "h-3 w-3 flex-shrink-0 rounded-full",
                                    f.category?.solidBgColor || "",
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
                                    f.category.label,
                                  ),
                                  r.createElement(
                                    "p",
                                    {
                                      className:
                                        "text-sm text-muted-foreground",
                                    },
                                    f.completed,
                                    "/",
                                    f.tasks.length,
                                    " tasks complete •",
                                    " ",
                                    f.progress,
                                    "%",
                                  ),
                                ),
                              ),
                              r.createElement(
                                k,
                                {
                                  size: "sm",
                                  onClick: () => {
                                    h({
                                      task: null,
                                      category: f?.category.id,
                                      date: (0, d.GP)(new Date(), "yyyy-MM-dd"),
                                    });
                                  },
                                },
                                r.createElement(p.A, {
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
                              0 === v.length &&
                                r.createElement(
                                  "div",
                                  {
                                    className:
                                      "p-6 text-center text-sm text-muted-foreground",
                                  },
                                  "No tasks under this project yet.",
                                ),
                              v.map((e) => {
                                const [a, n] = L(e),
                                  l = x === e.id,
                                  s = ua(e);
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
                                        className: y(
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
                                        `${(0, d.GP)((0, g.H)(e.date), "MMM d, yyyy")} • `,
                                      D(a),
                                      " – ",
                                      D(n),
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
                                            h({ task: e, hour: e.startHour });
                                          })(e),
                                        "aria-label": `Edit ${e.name}`,
                                        className:
                                          "flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                                      },
                                      r.createElement(ia.A, {
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
                                            void (x === t
                                              ? (o(t), E(null))
                                              : E(t))
                                          );
                                          var t;
                                        },
                                        onBlur: () => E(null),
                                        "aria-label": l
                                          ? `Confirm delete ${e.name}`
                                          : `Delete ${e.name}`,
                                        className: y(
                                          "flex h-7 w-7 items-center justify-center rounded-md transition-colors",
                                          l
                                            ? "bg-destructive/20 text-destructive"
                                            : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                                        ),
                                      },
                                      r.createElement(da.A, {
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
              r.createElement(Te, {
                open: Boolean(b),
                task: b?.task ?? null,
                defaultHour: b?.hour,
                defaultCategory: b?.category,
                defaultDate: b?.date,
                existingTasks: f?.tasks ?? [],
                onClose: N,
                onSubmit: (e) => {
                  if (b?.task) l(b.task.id, e);
                  else {
                    const t = e.date || b?.date;
                    n(t, { ...e, category: b?.category });
                  }
                  N();
                },
                onDelete: (e) => {
                  (o(e), N());
                },
              }),
            );
          };
        var ga = a(3999),
          ba = a(250),
          pa = a(7677),
          ha = a(1436),
          xa = a(5731),
          Ea = a(4718),
          ya = a(8309),
          va = a(7235),
          Na = a(2102),
          wa = a(5107);
        function ka() {
          return (
            (ka = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            ka.apply(null, arguments)
          );
        }
        const Ca = {
          default: "bg-primary text-primary-foreground",
          secondary: "bg-secondary text-secondary-foreground",
          outline: "border border-border text-foreground",
          destructive: "bg-destructive text-white",
        };
        function Sa(e) {
          let { variant: t = "default", className: a, ...n } = e;
          return r.createElement(
            "span",
            ka(
              {
                className: y(
                  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
                  Ca[t] || Ca.default,
                  a,
                ),
              },
              n,
            ),
          );
        }
        function Aa() {
          return (
            (Aa = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Aa.apply(null, arguments)
          );
        }
        const Ma = (0, r.createContext)(null);
        function La(e) {
          let { open: t, onOpenChange: a, children: n } = e;
          return r.createElement(
            Ma.Provider,
            { value: { open: t, onOpenChange: a } },
            n,
          );
        }
        function Ta(e) {
          let { asChild: t, children: a, ...n } = e;
          const { open: l, onOpenChange: o } = (0, r.useContext)(Ma),
            s = (e) => {
              (a.props?.onClick?.(e), n.onClick?.(e), o?.(!l));
            };
          return t
            ? (0, r.cloneElement)(a, { ...n, onClick: s })
            : r.createElement(
                "button",
                Aa({ type: "button" }, n, { onClick: s }),
                a,
              );
        }
        function Da(e) {
          let { children: t } = e;
          const { open: a } = (0, r.useContext)(Ma);
          return a ? r.createElement(r.Fragment, null, t) : null;
        }
        var ja = a(3627),
          Pa = a(4979);
        function Oa() {
          return (
            (Oa = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            Oa.apply(null, arguments)
          );
        }
        function _a(e) {
          let { task: t, onEdit: a, isDraggable: n = !0 } = e;
          const [l, o] = (0, r.useState)(!1),
            { updateTask: s, deleteTask: c } = ke(),
            i = _(t.category),
            d = (function (e) {
              if (!e) return z.medium;
              const t = String(e).trim().toLowerCase();
              return (
                z[t] || {
                  label: t.charAt(0).toUpperCase() + t.slice(1),
                  color: "text-slate-300",
                  bgColor: "bg-slate-500/20",
                }
              );
            })(t.priority),
            {
              attributes: m,
              listeners: u,
              setNodeRef: f,
              transform: g,
              transition: b,
              isDragging: p,
            } = (0, ja.gl)({ id: t.id, disabled: !n }),
            h = { transform: Pa.Ks.Transform.toString(g), transition: b },
            x = (e) => {
              s(t.id, { status: e });
            };
          return r.createElement(
            "div",
            {
              ref: f,
              style: h,
              className: y(
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
                  Oa({}, m, u, {
                    className:
                      "mt-1 cursor-grab opacity-100 transition-opacity touch-none xl:opacity-0 xl:group-hover:opacity-100",
                  }),
                  r.createElement(ha.A, {
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
                  className: y(
                    "mt-1 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors",
                    "completed" === t.status
                      ? "border-emerald-500 bg-emerald-500 text-white"
                      : "ongoing" === t.status
                        ? "border-amber-500 bg-amber-500/20"
                        : "border-muted-foreground/50 hover:border-primary",
                  ),
                },
                "completed" === t.status &&
                  r.createElement(ot.A, { className: "h-3 w-3" }),
                "ongoing" === t.status &&
                  r.createElement(xa.A, {
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
                        className: y(
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
                    Re,
                    null,
                    r.createElement(
                      Ie,
                      { asChild: !0 },
                      r.createElement(
                        k,
                        {
                          variant: "ghost",
                          size: "icon",
                          className:
                            "h-8 w-8 opacity-100 transition-opacity xl:opacity-0 xl:group-hover:opacity-100",
                        },
                        r.createElement(Ea.A, { className: "h-4 w-4" }),
                      ),
                    ),
                    r.createElement(
                      Ue,
                      { align: "end" },
                      r.createElement(
                        Ge,
                        { onClick: () => a(t) },
                        r.createElement(ia.A, { className: "mr-2 h-4 w-4" }),
                        "Edit",
                      ),
                      r.createElement(We, null),
                      r.createElement(
                        Ge,
                        { onClick: () => x("pending") },
                        r.createElement(ya.A, { className: "mr-2 h-4 w-4" }),
                        "Mark as Pending",
                      ),
                      r.createElement(
                        Ge,
                        { onClick: () => x("ongoing") },
                        r.createElement(xa.A, { className: "mr-2 h-4 w-4" }),
                        "Mark as Ongoing",
                      ),
                      r.createElement(
                        Ge,
                        { onClick: () => x("completed") },
                        r.createElement(ot.A, { className: "mr-2 h-4 w-4" }),
                        "Mark as Completed",
                      ),
                      r.createElement(We, null),
                      r.createElement(
                        Ge,
                        {
                          onClick: () => c(t.id),
                          className: "text-destructive",
                        },
                        r.createElement(da.A, { className: "mr-2 h-4 w-4" }),
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
                      Sa,
                      {
                        variant: "outline",
                        className:
                          "text-xs font-mono text-muted-foreground border-border/60",
                      },
                      "#",
                      t.ticketId,
                    ),
                  r.createElement(
                    Sa,
                    {
                      variant: "secondary",
                      className: y("text-xs", i?.bgColor, i?.color),
                    },
                    i?.name || "Other",
                  ),
                  r.createElement(
                    Sa,
                    {
                      variant: "secondary",
                      className: y("text-xs", d?.bgColor, d?.color),
                    },
                    d?.label || "Medium",
                  ),
                  r.createElement(
                    "div",
                    {
                      className:
                        "flex items-center gap-1 text-xs text-muted-foreground",
                    },
                    r.createElement(va.A, { className: "h-3 w-3" }),
                    r.createElement(
                      "span",
                      null,
                      D(t.startHour),
                      " -",
                      " ",
                      D(t.startHour + t.duration),
                    ),
                  ),
                ),
                t.notes &&
                  r.createElement(
                    La,
                    { open: l, onOpenChange: o },
                    r.createElement(
                      Ta,
                      { asChild: !0 },
                      r.createElement(
                        k,
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
                              r.createElement(Na.A, {
                                className: "mr-1 h-3 w-3",
                              }),
                              "Hide notes",
                            )
                          : r.createElement(
                              r.Fragment,
                              null,
                              r.createElement(wa.A, {
                                className: "mr-1 h-3 w-3",
                              }),
                              "Show notes",
                            ),
                      ),
                    ),
                    r.createElement(
                      Da,
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
              className: y(
                "absolute left-0 top-4 bottom-4 w-1 rounded-full",
                i?.solidBgColor || "",
              ),
            }),
          );
        }
        const za = new Set(["completed", "done"]),
          Ba = (e) => za.has(String(e.status || "").toLowerCase()),
          Ha = function (e) {
            let { onEditTask: t, onAddTask: a } = e;
            const {
                selectedDate: n,
                setSelectedDate: l,
                getTasksForDate: o,
                addTask: s,
                updateTask: c,
                deleteTask: u,
              } = ke(),
              b = (0, d.GP)(n, "yyyy-MM-dd"),
              h = (0, f.r)(n, new Date()),
              [x, E] = (0, r.useState)(null),
              y = (0, r.useMemo)(() => o(b), [o, b]),
              v = (0, r.useMemo)(
                () =>
                  [...y].sort((e, t) => {
                    const a = Ba(e) ? 1 : 0,
                      r = Ba(t) ? 1 : 0;
                    return a !== r ? a - r : e.startHour - t.startHour;
                  }),
                [y],
              ),
              N = y.filter(Ba).length,
              w = (e) => {
                if (t) return t(e);
                E({ task: e, hour: e.startHour });
              },
              C = () => E(null);
            return r.createElement(
              "section",
              { id: "todo", className: "min-h-full bg-[#000000]" },
              r.createElement(i, {
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
                        (0, d.GP)(n, "EEEE, MMMM d"),
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
                          onClick: () => l((e) => (0, m.e)(e, 1)),
                          "aria-label": "Previous day",
                          className:
                            "flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                        },
                        r.createElement(ba.A, { className: "h-4 w-4" }),
                      ),
                      r.createElement("input", {
                        type: "date",
                        value: b,
                        onChange: (e) => {
                          e.target.value && l((0, g.H)(e.target.value));
                        },
                        className:
                          "h-8 rounded-lg border border-border bg-secondary/40 px-2 text-sm text-foreground [color-scheme:dark] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                      }),
                      r.createElement(
                        "button",
                        {
                          type: "button",
                          onClick: () => l((e) => (0, ga.f)(e, 1)),
                          "aria-label": "Next day",
                          className:
                            "flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                        },
                        r.createElement(pa.A, { className: "h-4 w-4" }),
                      ),
                      !h &&
                        r.createElement(
                          k,
                          {
                            variant: "ghost",
                            size: "sm",
                            onClick: () => l(new Date()),
                          },
                          "Today",
                        ),
                    ),
                    r.createElement(
                      k,
                      {
                        size: "sm",
                        onClick: () => {
                          if (a) return a(new Date().getHours());
                          E({ task: null, hour: new Date().getHours() });
                        },
                      },
                      r.createElement(p.A, { className: "mr-2 h-4 w-4" }),
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
                        r.createElement(_a, {
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
              r.createElement(Te, {
                open: Boolean(x),
                task: x?.task ?? null,
                defaultHour: x?.hour,
                defaultDate: b,
                existingTasks: y,
                onClose: C,
                onSubmit: (e) => {
                  (x?.task ? c(x.task.id, e) : s(e.date || b, e), C());
                },
                onDelete: (e) => {
                  (u(e), C());
                },
              }),
            );
          };
        var $a = a(2307),
          Fa = a(3128),
          Ra = a(3375);
        const Ia = function (e) {
          let { onEditTask: t, onAddTask: a } = e;
          const {
              selectedDate: n,
              setSelectedDate: l,
              getTasksForDate: o,
              moveTask: s,
              addTask: c,
              updateTask: u,
              deleteTask: b,
            } = ke(),
            h = (0, d.GP)(n, "yyyy-MM-dd"),
            x = (0, f.r)(n, new Date()),
            [E, v] = (0, r.useState)(null),
            N = (e) => {
              if (a) return a(e);
              v({ task: null, hour: e });
            },
            w = (e) => {
              if (t) return t(e);
              v({ task: e, hour: e.startHour });
            },
            C = () => v(null),
            S = (0, Ra.FR)(
              (0, Ra.MS)(Ra.AN, { activationConstraint: { distance: 8 } }),
              (0, Ra.MS)(Ra.uN),
            ),
            L = (0, r.useMemo)(() => o(h), [o, h]),
            j = (0, r.useMemo)(() => {
              const e = {};
              return (
                A.forEach((t) => {
                  let { index: a } = t;
                  e[a] = L.filter(
                    (e) => Math.round(4 * Number(e.startHour || 0)) === a,
                  );
                }),
                e
              );
            }, [L]),
            P = (0, r.useMemo)(() => {
              const e = new Map();
              return (
                L.forEach((t) => {
                  const [a, r] = M(t);
                  for (let n = a; n < r; n++)
                    e.has(n) || e.set(n, { task: t, isStart: n === a });
                }),
                e
              );
            }, [L]),
            O =
              4 * new Date().getHours() +
              Math.floor(new Date().getMinutes() / 15);
          return r.createElement(
            "section",
            { id: "home", className: "min-h-full bg-[#000000]" },
            r.createElement(i, {
              hexRadius: 60,
              viewWidth: 900,
              viewHeight: 600,
            }),
            r.createElement(
              Ra.Mp,
              {
                sensors: S,
                collisionDetection: Ra.fp,
                onDragEnd: (e) => {
                  const { active: t, over: a } = e;
                  if (!a) return;
                  const r = t.id,
                    n = parseInt(a.id, 10);
                  if (isNaN(n)) return;
                  const l = L.find((e) => e.id === r);
                  if (!l) return;
                  const o = { ...l, startHour: n / 4 };
                  L.some((e) => e.id !== r && T(o, e)) || s(r, n / 4);
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
                        (0, d.GP)(n, "EEEE, MMMM d"),
                        " • ",
                        L.length,
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
                          onClick: () => l((e) => (0, m.e)(e, 1)),
                          "aria-label": "Previous day",
                          className:
                            "flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                        },
                        r.createElement(ba.A, { className: "h-4 w-4" }),
                      ),
                      r.createElement("input", {
                        type: "date",
                        value: h,
                        onChange: (e) => {
                          e.target.value && l((0, g.H)(e.target.value));
                        },
                        className:
                          "h-8 rounded-lg border border-border bg-secondary/40 px-2 text-sm text-foreground [color-scheme:dark] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                      }),
                      r.createElement(
                        "button",
                        {
                          type: "button",
                          onClick: () => l((e) => (0, ga.f)(e, 1)),
                          "aria-label": "Next day",
                          className:
                            "flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                        },
                        r.createElement(pa.A, { className: "h-4 w-4" }),
                      ),
                      !x &&
                        r.createElement(
                          k,
                          {
                            variant: "ghost",
                            size: "sm",
                            onClick: () => l(new Date()),
                          },
                          "Today",
                        ),
                    ),
                    r.createElement(
                      k,
                      {
                        size: "sm",
                        onClick: () =>
                          N(
                            ((e) => {
                              for (let t = 0; t < A.length; t++) {
                                const a = (e + t) % A.length;
                                if (!P.has(a)) return A[a].time;
                              }
                              return A[e]?.time ?? 9;
                            })(O),
                          ),
                      },
                      r.createElement(p.A, { className: "mr-2 h-4 w-4" }),
                      "Add task",
                    ),
                  ),
                  r.createElement(
                    "div",
                    {
                      className:
                        "max-h-[calc(100dvh-13rem)] overflow-y-auto sm:max-h-[calc(100dvh-15rem)]",
                    },
                    A.map((e) => {
                      let { time: t, index: a } = e;
                      const n = j[a] || [],
                        l = P.get(a),
                        o = l && !l.isStart,
                        s =
                          O === a && (0, d.GP)(new Date(), "yyyy-MM-dd") === h;
                      return r.createElement(
                        "div",
                        {
                          key: a,
                          id: a.toString(),
                          className: y(
                            "group relative flex border-b border-border/50 last:border-0",
                            s && "bg-primary/5",
                          ),
                        },
                        r.createElement(
                          "div",
                          {
                            className: y(
                              "w-20 flex-shrink-0 border-r border-border/50 p-2 text-right",
                              s && "text-primary font-medium",
                            ),
                          },
                          r.createElement(
                            "span",
                            { className: "text-xs sm:text-sm" },
                            D(t),
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
                            ja.gB,
                            { items: n.map((e) => e.id), strategy: ja._G },
                            r.createElement(
                              "div",
                              { className: "space-y-2" },
                              n.map((e) =>
                                r.createElement(_a, {
                                  key: e.id,
                                  task: e,
                                  onEdit: w,
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
                                className: y(
                                  "h-1.5 w-1.5 rounded-full",
                                  _(l.task.category)?.solidBgColor || "",
                                ),
                              }),
                              l.task.name,
                              " continues",
                            ),
                          0 === n.length &&
                            !o &&
                            r.createElement(
                              k,
                              {
                                variant: "ghost",
                                size: "sm",
                                onClick: () => N(t),
                                className:
                                  "h-8 w-full border border-dashed border-border text-muted-foreground opacity-100 transition-opacity hover:text-foreground xl:opacity-0 xl:group-hover:opacity-100",
                              },
                              r.createElement(p.A, {
                                className: "mr-2 h-4 w-4",
                              }),
                              "Add task at ",
                              D(t),
                            ),
                        ),
                      );
                    }),
                  ),
                ),
              ),
              r.createElement(Te, {
                open: Boolean(E),
                task: E?.task ?? null,
                defaultHour: E?.hour,
                defaultDate: h,
                existingTasks: L,
                onClose: C,
                onSubmit: (e) => {
                  (E?.task ? u(E.task.id, e) : c(e.date || h, e), C());
                },
                onDelete: (e) => {
                  (b(e), C());
                },
              }),
            ),
          );
        };
        var Ua = a(2150),
          Ga = a(7423),
          Wa = a(4883),
          qa = a(2528),
          Za = a(2483),
          Ja = a(1359),
          Va = a(5855),
          Ya = a(2138);
        const Ka = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          Qa = [
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
          Xa = function (e) {
            let { onNavigateToTimeline: t } = e;
            const {
                selectedDate: a,
                setSelectedDate: n,
                getTasksForDate: l,
              } = ke(),
              [o, s] = (0, r.useState)(() => (0, Ua.w)(a || new Date())),
              [c, m] = (0, r.useState)(a || new Date()),
              g = (0, r.useMemo)(() => {
                const e = (0, qa.k)((0, Ua.w)(o)),
                  t = (0, Za.$)((0, Ja.p)(o));
                return (0, u.k)({ start: e, end: t });
              }, [o]),
              b = (0, r.useMemo)(() => {
                const e = {};
                return (
                  g.forEach((t) => {
                    const a = (0, d.GP)(t, "yyyy-MM-dd");
                    e[a] = l(a) || [];
                  }),
                  e
                );
              }, [g, l]),
              p = (0, d.GP)(c, "yyyy-MM-dd"),
              h = b[p] || [],
              x = (e) => {
                (n(e), t && t());
              },
              E = new Date().getFullYear(),
              v = (0, r.useMemo)(
                () => Array.from({ length: 21 }, (e, t) => E - 10 + t),
                [E],
              );
            return r.createElement(
              "section",
              { id: "calendar", className: "min-h-full bg-[#000000]" },
              r.createElement(i, {
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
                        (0, d.GP)(o, "MMMM yyyy"),
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
                          onClick: () => s((e) => (0, Ga.a)(e, 1)),
                          "aria-label": "Previous month",
                          className:
                            "flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                        },
                        r.createElement(ba.A, { className: "h-4 w-4" }),
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
                        Qa.map((e, t) =>
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
                        v.map((e) =>
                          r.createElement("option", { key: e, value: e }, e),
                        ),
                      ),
                      r.createElement(
                        "button",
                        {
                          type: "button",
                          onClick: () => s((e) => (0, Wa.P)(e, 1)),
                          "aria-label": "Next month",
                          className:
                            "flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                        },
                        r.createElement(pa.A, { className: "h-4 w-4" }),
                      ),
                      !(0, Va.t)(o, new Date()) &&
                        r.createElement(
                          k,
                          {
                            variant: "ghost",
                            size: "sm",
                            onClick: () => s((0, Ua.w)(new Date())),
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
                        Ka.map((e) =>
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
                        g.map((e) => {
                          const t = (0, d.GP)(e, "yyyy-MM-dd"),
                            a = (0, Va.t)(e, o),
                            n = (0, f.r)(e, c),
                            l = (0, Ya.c)(e),
                            { dots: s, overflow: i } = ((e) => {
                              const t = b[e] || [],
                                a = new Set(),
                                r = [];
                              for (const e of t)
                                if (
                                  !a.has(e.category) &&
                                  (a.add(e.category),
                                  r.push(_(e.category)),
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
                                  m(e);
                                })(e),
                              onDoubleClick: () => x(e),
                              title: u
                                ? `${s.length + i} task${s.length + i === 1 ? "" : "s"} • double-click to open timeline`
                                : "Double-click to open timeline",
                              className: y(
                                "group relative flex h-16 min-w-0 flex-col items-start gap-1 border-b border-r border-border/50 p-1.5 text-left transition-colors last:border-r-0 hover:bg-secondary/40 sm:h-24 sm:p-2",
                                !a && "opacity-40",
                                n &&
                                  "bg-primary/10 ring-1 ring-inset ring-primary/40",
                              ),
                            },
                            r.createElement(
                              "span",
                              {
                                className: y(
                                  "flex h-6 w-6 items-center justify-center rounded-full text-xs",
                                  l &&
                                    "bg-primary font-semibold text-primary-foreground",
                                  !l && "text-foreground",
                                ),
                              },
                              (0, d.GP)(e, "d"),
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
                                    className: y(
                                      "h-1.5 w-1.5 rounded-full",
                                      e?.solidBgColor || "",
                                    ),
                                  }),
                                ),
                                i > 0 &&
                                  r.createElement(
                                    "span",
                                    {
                                      className:
                                        "text-[10px] leading-none text-muted-foreground",
                                    },
                                    "+",
                                    i,
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
                          (0, d.GP)(c, "EEEE, MMMM d"),
                        ),
                        r.createElement(
                          "p",
                          { className: "text-sm text-muted-foreground" },
                          h.length,
                          " task",
                          1 === h.length ? "" : "s",
                          " scheduled",
                        ),
                      ),
                      r.createElement(
                        "div",
                        {
                          className:
                            "flex-1 space-y-2 overflow-y-auto p-4 lg:max-h-[calc(100dvh-17rem)]",
                        },
                        0 === h.length &&
                          r.createElement(
                            "p",
                            { className: "text-sm text-muted-foreground" },
                            "No tasks for this day.",
                          ),
                        h.map((e) => {
                          const t = _(e.category);
                          return r.createElement(
                            "div",
                            {
                              key: e.id,
                              className:
                                "flex items-center gap-2 rounded-lg border border-border/60 bg-muted/20 px-3 py-2",
                            },
                            r.createElement("span", {
                              className: y(
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
                          k,
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
        var er = a(6632),
          tr = a(3241),
          ar = a(8645);
        const rr = "all",
          nr = {
            high: "bg-destructive/15 text-destructive border-destructive/30",
            medium: "bg-amber-500/15 text-amber-500 border-amber-500/30",
            low: "bg-emerald-500/15 text-emerald-500 border-emerald-500/30",
          },
          lr = {
            completed:
              "bg-emerald-500/15 text-emerald-500 border-emerald-500/30",
            done: "bg-emerald-500/15 text-emerald-500 border-emerald-500/30",
            "in-progress": "bg-blue-500/15 text-blue-500 border-blue-500/30",
            "in progress": "bg-blue-500/15 text-blue-500 border-blue-500/30",
            pending: "bg-muted text-muted-foreground border-border",
            cancelled:
              "bg-muted text-muted-foreground border-border line-through",
          };
        function or(e) {
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
              className: y(
                "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium capitalize",
                a[n] || "bg-secondary/40 text-foreground border-border",
              ),
            },
            t,
          );
        }
        const sr = function (e) {
            let { onEditTask: t, onAddTask: a } = e;
            const {
                getAllTasks: n,
                addTask: l,
                updateTask: o,
                deleteTask: s,
              } = ke(),
              [c, m] = (0, r.useState)(null),
              [u, f] = (0, r.useState)(null),
              [b, h] = (0, r.useState)(rr),
              [x, E] = (0, r.useState)(rr),
              [v, N] = (0, r.useState)(rr),
              [w, C] = (0, r.useState)(""),
              [S, A] = (0, r.useState)(""),
              [M, T] = (0, r.useState)("asc"),
              j = (0, r.useMemo)(() => n?.() || [], [n]),
              P = (0, r.useMemo)(() => {
                const e = new Map();
                return (
                  j.forEach((t) => {
                    e.has(t.category) || e.set(t.category, _(t.category));
                  }),
                  Array.from(e.entries())
                );
              }, [j]),
              O = (0, r.useMemo)(
                () =>
                  Array.from(new Set(j.map((e) => e.priority).filter(Boolean))),
                [j],
              ),
              z = (0, r.useMemo)(
                () =>
                  Array.from(new Set(j.map((e) => e.status).filter(Boolean))),
                [j],
              ),
              B = b !== rr || x !== rr || v !== rr || w || S,
              H = (0, r.useMemo)(
                () =>
                  j.filter(
                    (e) =>
                      !(
                        (b !== rr && e.category !== b) ||
                        (x !== rr && e.priority !== x) ||
                        (v !== rr && e.status !== v) ||
                        (w && e.date < w) ||
                        (S && e.date > S)
                      ),
                  ),
                [j, b, x, v, w, S],
              ),
              $ = (0, r.useMemo)(() => {
                const e = H.map((e) => ({
                  task: e,
                  sortKey:
                    (e.date ? (0, g.H)(e.date).getTime() : 0) +
                    36e5 * (e.startHour || 0),
                }));
                return (
                  e.sort((e, t) =>
                    "asc" === M ? e.sortKey - t.sortKey : t.sortKey - e.sortKey,
                  ),
                  e.map((e) => {
                    let { task: t } = e;
                    return t;
                  })
                );
              }, [H, M]),
              F = () => m(null);
            return r.createElement(
              "section",
              { id: "list", className: "min-h-full bg-[#000000]" },
              r.createElement(i, {
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
                        $.length,
                        " of ",
                        j.length,
                        " tasks",
                      ),
                    ),
                    r.createElement(
                      k,
                      {
                        size: "sm",
                        onClick: () => {
                          if (a) return a();
                          m({
                            task: null,
                            hour: new Date().getHours(),
                            date: (0, d.GP)(new Date(), "yyyy-MM-dd"),
                          });
                        },
                      },
                      r.createElement(p.A, { className: "mr-2 h-4 w-4" }),
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
                        value: b,
                        onChange: (e) => h(e.target.value),
                        className:
                          "h-8 rounded-lg border border-border bg-secondary/40 px-2 text-sm text-foreground [color-scheme:dark] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                      },
                      r.createElement(
                        "option",
                        { value: rr },
                        "All categories",
                      ),
                      P.map((e) => {
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
                        value: x,
                        onChange: (e) => E(e.target.value),
                        className:
                          "h-8 rounded-lg border border-border bg-secondary/40 px-2 text-sm text-foreground capitalize [color-scheme:dark] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                      },
                      r.createElement(
                        "option",
                        { value: rr },
                        "All priorities",
                      ),
                      O.map((e) =>
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
                      r.createElement("option", { value: rr }, "All statuses"),
                      z.map((e) =>
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
                        onChange: (e) => A(e.target.value),
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
                          ("asc" === M ? "ascending" : "descending"),
                      },
                      "asc" === M
                        ? r.createElement(er.A, { className: "h-3.5 w-3.5" })
                        : r.createElement(tr.A, { className: "h-3.5 w-3.5" }),
                      "Date",
                      r.createElement(ar.A, {
                        className: "h-3 w-3 opacity-50",
                      }),
                    ),
                    B &&
                      r.createElement(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            (h(rr), E(rr), N(rr), C(""), A(""));
                          },
                          className:
                            "flex h-8 items-center gap-1 rounded-lg px-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                        },
                        r.createElement(Ce.A, { className: "h-3.5 w-3.5" }),
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
                    0 === $.length &&
                      r.createElement(
                        "div",
                        {
                          className:
                            "p-6 text-center text-sm text-muted-foreground",
                        },
                        0 === j.length
                          ? "No tasks yet."
                          : "No tasks match the current filters.",
                      ),
                    $.map((e) => {
                      const a = _(e.category),
                        [n, l] = L(e),
                        o = u === e.id;
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
                            className: y(
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
                              (0, d.GP)((0, g.H)(e.date), "MMM d, yyyy"),
                            ),
                          r.createElement("span", null, D(n), " – ", D(l)),
                        ),
                        r.createElement(
                          "div",
                          { className: "hidden items-center gap-1.5 lg:flex" },
                          r.createElement("span", {
                            className: y(
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
                          r.createElement(or, {
                            value: e.priority,
                            styleMap: nr,
                          }),
                        ),
                        r.createElement(
                          "div",
                          null,
                          r.createElement(or, {
                            value: e.status,
                            styleMap: lr,
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
                            r.createElement(ia.A, { className: "h-3.5 w-3.5" }),
                          ),
                          r.createElement(
                            "button",
                            {
                              type: "button",
                              onClick: () => {
                                return (
                                  (t = e.id),
                                  void (u === t ? (s(t), f(null)) : f(t))
                                );
                                var t;
                              },
                              onBlur: () => f(null),
                              "aria-label": o
                                ? `Confirm delete ${e.name}`
                                : `Delete ${e.name}`,
                              className: y(
                                "flex h-7 w-7 items-center justify-center rounded-md transition-colors",
                                o
                                  ? "bg-destructive/20 text-destructive"
                                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                              ),
                            },
                            r.createElement(da.A, { className: "h-3.5 w-3.5" }),
                          ),
                        ),
                      );
                    }),
                  ),
                ),
              ),
              r.createElement(Te, {
                open: Boolean(c),
                task: c?.task ?? null,
                defaultHour: c?.hour,
                defaultDate: c?.date,
                existingTasks: j,
                onClose: F,
                onSubmit: (e) => {
                  (c?.task
                    ? o(c.task.id, e)
                    : null === c?.task && e.date && l(e.date, e),
                    F());
                },
                onDelete: (e) => {
                  (s(e), F());
                },
              }),
            );
          },
          cr = [
            { id: "timeline", label: "Timeline", icon: va.A },
            { id: "calendar", label: "Calendar", icon: $a.A },
            { id: "list", label: "List", icon: Fa.A },
          ],
          ir = function () {
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
                    cr.map((a) => {
                      let { id: n, label: l, icon: o } = a;
                      const s = e === n;
                      return r.createElement(
                        "button",
                        {
                          key: n,
                          type: "button",
                          onClick: () => t(n),
                          "aria-pressed": s,
                          className: y(
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
              "timeline" === e && r.createElement(Ia, null),
              "calendar" === e &&
                r.createElement(Xa, {
                  onNavigateToTimeline: () => t("timeline"),
                }),
              "list" === e && r.createElement(sr, null),
            );
          };
        var dr = a(6221),
          mr = a(4485),
          ur = a(9754),
          fr = a(131);
        const gr =
            "https://script.google.com/macros/s/AKfycbwpiIoQE77nRCv6AKTJqzfWRWEJj_HxcFd6Y8HCpbYbKksj6Ynub7_DFIV_YsVPj1g5/exec",
          br = async (e, t) => {
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
          pr = async (e, t) => {
            const a = await fetch(gr, {
                method: "POST",
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify(e),
              }),
              r = await br(a, t);
            if (!1 === r?.success)
              throw new Error(
                "That resource no longer exists in the sheet. Refresh and try again.",
              );
            return r;
          };
        function hr() {
          return (
            (hr = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                      ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                  }
                  return e;
                }),
            hr.apply(null, arguments)
          );
        }
        const xr = "Dev Resource",
          Er = (e) =>
            Array.isArray(e)
              ? e.filter(Boolean)
              : String(e ?? "")
                  .split(",")
                  .map((e) => e.trim())
                  .filter(Boolean),
          yr = (e) => {
            try {
              return new URL(e).hostname.replace(/^www\./, "");
            } catch {
              return "";
            }
          },
          vr = (e) => {
            const t = yr(e);
            if (!t) return e || "Untitled";
            const a = t.split(".")[0];
            return a.charAt(0).toUpperCase() + a.slice(1);
          },
          Nr = (e) =>
            e
              ? new Date(e).toLocaleDateString(void 0, {
                  month: "short",
                  year: "numeric",
                })
              : "",
          wr = (e, t) => {
            const a = e.resource_timestamp
              ? new Date(e.resource_timestamp).getTime()
              : 0;
            return {
              id: e.resource_url || `row-${e._row ?? t}`,
              title:
                String(e.resource_title || "").trim() || vr(e.resource_url),
              types: Er(e.resource_type),
              subCategories: Er(e.resource_sub_category),
              url: e.resource_url || "",
              description: e.resource_desc || "",
              rating: Number(e.resource_rating) || 0,
              addedAt: Number.isNaN(a) ? 0 : a,
            };
          },
          kr = (e) =>
            e.url && e.types.some((e) => e.toLowerCase() === xr.toLowerCase()),
          Cr = (e, t) => ({
            resource_title: e.title.trim(),
            resource_type: t,
            resource_sub_category: e.subCategories,
            resource_desc: e.description,
            resource_rating: "" === e.rating ? "" : Number(e.rating),
          }),
          Sr = {
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
          Ar = {
            h1: (e) => {
              let { node: t, children: a, ...n } = e;
              return r.createElement(
                "h1",
                hr(
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
                hr(
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
                hr(
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
                hr(
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
                hr({ className: "mb-4 last:mb-0" }, a),
              );
            },
            a: (e) => {
              let { node: t, children: a, ...n } = e;
              return r.createElement(
                "a",
                hr(
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
                hr({ className: "font-semibold text-white" }, a),
              );
            },
            em: (e) => {
              let { node: t, ...a } = e;
              return r.createElement("em", hr({ className: "italic" }, a));
            },
            del: (e) => {
              let { node: t, ...a } = e;
              return r.createElement(
                "del",
                hr({ className: "line-through opacity-70" }, a),
              );
            },
            ul: (e) => {
              let { node: t, className: a, ...n } = e;
              return r.createElement(
                "ul",
                hr(
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
                hr(
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
              return r.createElement("li", hr({ className: "pl-1" }, a));
            },
            input: (e) => {
              let { node: t, ...a } = e;
              return r.createElement(
                "input",
                hr(
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
                hr(
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
                hr({ className: "my-6 border-[#c2ccaa]/20" }, a),
              );
            },
            pre: (e) => {
              let { node: t, ...a } = e;
              return r.createElement(
                "pre",
                hr(
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
                hr(
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
                  hr({ className: "w-full text-sm border-collapse" }, a),
                ),
              );
            },
            th: (e) => {
              let { node: t, ...a } = e;
              return r.createElement(
                "th",
                hr(
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
                hr({ className: "border-b border-[#c2ccaa]/10 px-3 py-2" }, a),
              );
            },
            img: (e) => {
              let { node: t, alt: a, ...n } = e;
              return r.createElement(
                "img",
                hr(
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
          Mr = (e) => {
            let { children: t } = e;
            return r.createElement(
              ur.oz,
              { remarkPlugins: [fr.A], components: Ar },
              t,
            );
          },
          Lr = ["strong", "em", "del", "code"],
          Tr = (e) => {
            let { children: t } = e;
            return r.createElement(
              ur.oz,
              {
                remarkPlugins: [fr.A],
                allowedElements: Lr,
                unwrapDisallowed: !0,
                components: {
                  strong: Ar.strong,
                  em: Ar.em,
                  del: Ar.del,
                  code: Ar.code,
                },
              },
              t,
            );
          },
          Dr = (e) => {
            let { url: t, title: a } = e;
            const [n, l] = (0, r.useState)(!1),
              o = yr(t);
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
          jr = (e) => {
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
          Pr = () =>
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
          Or = (e) => {
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
          _r = (e) => {
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
                subCategories: d,
                url: m,
                description: u,
                rating: f,
                addedAt: g,
              } = t,
              b = yr(m),
              p = Nr(g);
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
                  r.createElement(Dr, { url: m, title: i }),
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
                    b &&
                      r.createElement(
                        "p",
                        { className: "text-sm text-[#c2ccaa]/70 truncate" },
                        b,
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
                  u ? r.createElement(Tr, null, u) : "No description yet.",
                ),
                d.length > 0 &&
                  r.createElement(
                    "div",
                    { className: "flex flex-wrap gap-2 mb-5" },
                    d.map((e) =>
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
                        ? r.createElement(Or, { className: "w-4 h-4" })
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
                  m &&
                    r.createElement(
                      "a",
                      {
                        href: m,
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
        let zr = 0;
        const Br = (e) => {
            let {
              onClose: t,
              labelledBy: a,
              initialFocusRef: n,
              dismissible: o = !0,
              className: s = "max-w-xl",
              children: c,
            } = e;
            const i = (0, r.useRef)(null),
              d = (0, r.useRef)(!1),
              m = (0, r.useRef)(t),
              u = (0, r.useRef)(o);
            return (
              (m.current = t),
              (u.current = o),
              (0, r.useEffect)(() => {
                const e = document.activeElement;
                ((zr += 1),
                  (document.body.style.overflow = "hidden"),
                  (n?.current || i.current)?.focus());
                const t = (e) => {
                  "Escape" === e.key && u.current && m.current();
                };
                return (
                  window.addEventListener("keydown", t),
                  () => {
                    (window.removeEventListener("keydown", t),
                      (zr -= 1),
                      0 === zr && (document.body.style.overflow = ""));
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
                    d.current = e.target === e.currentTarget;
                  },
                  onClick: (e) => {
                    d.current && e.target === e.currentTarget && o && t();
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
          Hr = r.forwardRef((e, t) => {
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
          $r = (e) => {
            let { resource: t, onClose: a, onEdit: n, onDelete: l } = e;
            const o = (0, r.useRef)(null),
              {
                title: s,
                types: c,
                subCategories: i,
                url: d,
                description: m,
                rating: u,
                addedAt: f,
              } = t,
              g = yr(d),
              b = Nr(f);
            return r.createElement(
              Br,
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
                  r.createElement(Dr, { url: d, title: s }),
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
                    g &&
                      r.createElement(
                        "p",
                        { className: "text-sm text-[#c2ccaa]/70 break-all" },
                        g,
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
                  m
                    ? r.createElement(Mr, null, m)
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
                      b || "Unknown",
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
                    r.createElement(ia.A, {
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
                    r.createElement(da.A, {
                      className: "w-4 h-4",
                      "aria-hidden": "true",
                    }),
                    "Delete",
                  ),
                ),
              ),
            );
          },
          Fr =
            "w-full bg-[#1a0a0a] border border-[#c2ccaa]/30 rounded-lg py-2.5 px-3.5 text-white placeholder:text-[#c2ccaa]/40 focus:outline-none focus:border-[#8cfcfb] focus:ring-1 focus:ring-[#8cfcfb] transition-colors aria-[invalid=true]:border-red-400",
          Rr = "block text-sm font-semibold text-white mb-1.5",
          Ir = (e) => {
            let { id: t, children: a } = e;
            return a
              ? r.createElement(
                  "p",
                  { id: t, className: "mt-1.5 text-sm text-red-300" },
                  a,
                )
              : null;
          },
          Ur = (e) => {
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
              [d, m] = (0, r.useState)(""),
              [u, f] = (0, r.useState)("write"),
              [g, b] = (0, r.useState)({}),
              [p, h] = (0, r.useState)(""),
              [x, E] = (0, r.useState)(!1),
              y = (0, r.useRef)(null),
              v = (e) => (t) => {
                const { value: a } = t.target;
                (i((t) => ({ ...t, [e]: a })),
                  b((t) => ({ ...t, [e]: void 0 })));
              },
              N = (e) => {
                const t = Er(e);
                (t.length &&
                  i((e) => ({
                    ...e,
                    subCategories: [...new Set([...e.subCategories, ...t])],
                  })),
                  m(""));
              },
              w = (e) =>
                i((t) => ({
                  ...t,
                  subCategories: t.subCategories.filter((t) => t !== e),
                })),
              k = a.filter((e) => "All" !== e && !c.subCategories.includes(e)),
              C = s ? "Edit resource" : "Add resource";
            return r.createElement(
              Br,
              {
                onClose: l,
                labelledBy: "resource-form-title",
                initialFocusRef: y,
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
                          ...new Set([...c.subCategories, ...Er(d)]),
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
                    if ((b(r), !Object.keys(r).length)) {
                      (E(!0), h(""));
                      try {
                        await o(a);
                      } catch (e) {
                        (h(e.message), E(!1));
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
                  r.createElement(Hr, { onClick: l, disabled: x }),
                ),
                r.createElement(
                  "fieldset",
                  { disabled: x, className: "space-y-5" },
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "label",
                      { htmlFor: "rf-title", className: Rr },
                      "Title",
                    ),
                    r.createElement("input", {
                      ref: y,
                      id: "rf-title",
                      type: "text",
                      value: c.title,
                      onChange: v("title"),
                      placeholder: "e.g. UI Verse",
                      className: Fr,
                    }),
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "label",
                      { htmlFor: "rf-url", className: Rr },
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
                      "aria-invalid": Boolean(g.url),
                      "aria-describedby": g.url ? "rf-url-error" : void 0,
                      className: Fr,
                    }),
                    r.createElement(Ir, { id: "rf-url-error" }, g.url),
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      "label",
                      { htmlFor: "rf-sub", className: Rr },
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
                      value: d,
                      onChange: (e) => {
                        const { value: t } = e.target;
                        t.includes(",") ? N(t) : m(t);
                      },
                      onKeyDown: (e) => {
                        "Enter" === e.key
                          ? (e.preventDefault(), N(d))
                          : "Backspace" === e.key &&
                            !d &&
                            c.subCategories.length &&
                            w(c.subCategories[c.subCategories.length - 1]);
                      },
                      onBlur: () => N(d),
                      placeholder: "Type a category and press Enter",
                      "aria-describedby": "rf-sub-hint",
                      className: Fr,
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
                          className: `${Fr} font-mono text-sm leading-relaxed resize-y min-h-[9rem]`,
                        })
                      : r.createElement(
                          "div",
                          {
                            className:
                              "min-h-[9rem] max-h-80 overflow-y-auto rounded-lg border border-[#c2ccaa]/30 bg-[#1a0a0a] p-4 text-[#c2ccaa] leading-relaxed break-words",
                          },
                          c.description.trim()
                            ? r.createElement(Mr, null, c.description)
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
                      { htmlFor: "rf-rating", className: Rr },
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
                      "aria-invalid": Boolean(g.rating),
                      "aria-describedby": g.rating ? "rf-rating-error" : void 0,
                      className: Fr,
                    }),
                    r.createElement(Ir, { id: "rf-rating-error" }, g.rating),
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
          Gr = (e) => {
            let { resource: t, onClose: a, onConfirm: n } = e;
            const [l, o] = (0, r.useState)(!1),
              [s, c] = (0, r.useState)(""),
              i = (0, r.useRef)(null);
            return r.createElement(
              Br,
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
                  r.createElement(da.A, {
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
          Wr = (e) => {
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
                dr.N,
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
          qr = () => {
            const [e, t] = (0, r.useState)([]),
              [a, n] = (0, r.useState)(!0),
              [o, s] = (0, r.useState)(null),
              [c, i] = (0, r.useState)(""),
              [d, m] = (0, r.useState)("All"),
              [u, f] = (0, r.useState)("newest"),
              [g, b] = (0, r.useState)(null),
              h = (0, r.useCallback)(() => b(null), []),
              [x, E] = (0, r.useState)(null),
              [y, v] = (0, r.useState)(null),
              [N, w] = (0, r.useState)(null),
              [k, C] = (0, r.useState)(() => new Set()),
              [S, A] = (0, r.useState)(null),
              M = (0, r.useCallback)(
                (e, t) => A({ type: e, message: t, id: Date.now() }),
                [],
              );
            (0, r.useEffect)(() => {
              if (!S) return;
              const e = setTimeout(() => A(null), 4500);
              return () => clearTimeout(e);
            }, [S]);
            const L = (0, r.useRef)(0),
              T = (0, r.useCallback)(
                async function () {
                  let { signal: e, silent: a = !1 } =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  const r = ++L.current;
                  a || (n(!0), s(null));
                  try {
                    const a = await (async function () {
                      let { signal: e } =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      const t = await fetch(gr, { signal: e }),
                        a = await br(
                          t,
                          "Couldn't load resources. Please try again.",
                        );
                      if (!Array.isArray(a))
                        throw new Error("Unexpected response from the server.");
                      return a;
                    })({ signal: e });
                    if (r !== L.current) return;
                    (C(
                      new Set(
                        a
                          .map((e) => String(e.resource_url ?? "").trim())
                          .filter(Boolean),
                      ),
                    ),
                      t(a.map(wr).filter(kr)),
                      s(null));
                  } catch (e) {
                    if ("AbortError" === e.name || r !== L.current) return;
                    a
                      ? M("error", `Couldn't refresh the list. ${e.message}`)
                      : s(e.message);
                  } finally {
                    a || r !== L.current || e?.aborted || n(!1);
                  }
                },
                [M],
              );
            (0, r.useEffect)(() => {
              const e = new AbortController();
              return (T({ signal: e.signal }), () => e.abort());
            }, [T]);
            const D = (0, r.useCallback)((e) => {
                (b(null), E({ resource: e }));
              }, []),
              j = (0, r.useCallback)((e) => {
                (b(null), v(e));
              }, []),
              P = (0, r.useMemo)(
                () => ["All", ...new Set(e.flatMap((e) => e.subCategories))],
                [e],
              ),
              O = (0, r.useMemo)(() => {
                const t = c.trim().toLowerCase();
                return e
                  .filter(
                    (e) =>
                      !("All" !== d && !e.subCategories.includes(d)) &&
                      (!t ||
                        [e.title, e.description, yr(e.url), ...e.subCategories]
                          .join(" ")
                          .toLowerCase()
                          .includes(t)),
                  )
                  .sort(Sr[u].fn);
              }, [e, c, d, u]),
              _ = c || "All" !== d,
              z = () => {
                (i(""), m("All"));
              };
            return r.createElement(
              mr.x,
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
                        onClick: () => E({ resource: null }),
                        "aria-haspopup": "dialog",
                        className:
                          "mt-6 inline-flex items-center gap-2 py-2.5 px-5 rounded-full bg-[#8cfcfb] text-black font-semibold hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                      },
                      r.createElement(p.A, {
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
                        value: c,
                        onChange: (e) => i(e.target.value),
                        className:
                          "w-full bg-[#1a0a0a] border border-[#c2ccaa]/30 rounded-full py-3 pl-12 pr-11 text-white placeholder:text-[#c2ccaa]/50 focus:outline-none focus:border-[#8cfcfb] focus:ring-1 focus:ring-[#8cfcfb] transition-all",
                      }),
                      c &&
                        r.createElement(
                          "button",
                          {
                            type: "button",
                            onClick: () => i(""),
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
                        value: u,
                        onChange: (e) => f(e.target.value),
                        className:
                          "bg-[#1a0a0a] border border-[#c2ccaa]/30 rounded-full py-3 px-5 text-white focus:outline-none focus:border-[#8cfcfb] focus:ring-1 focus:ring-[#8cfcfb]",
                      },
                      Object.entries(Sr).map((e) => {
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
                    !o &&
                    e.length > 0 &&
                    r.createElement(
                      "div",
                      { className: "max-w-4xl mx-auto mb-8 space-y-3" },
                      P.length > 2 &&
                        r.createElement(
                          "div",
                          {
                            className: "flex flex-wrap justify-center gap-2",
                            role: "group",
                            "aria-label": "Filter by sub-category",
                          },
                          P.map((e) =>
                            r.createElement(
                              jr,
                              { key: e, active: d === e, onClick: () => m(e) },
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
                        O.length,
                        " of ",
                        e.length,
                        " ",
                        "resources",
                        _ &&
                          r.createElement(
                            r.Fragment,
                            null,
                            " ",
                            r.createElement(
                              "button",
                              {
                                type: "button",
                                onClick: z,
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
                          r.createElement(Pr, { key: t }),
                        ),
                      )
                    : o
                      ? r.createElement(
                          "div",
                          { className: "py-12 text-center", role: "alert" },
                          r.createElement(
                            "p",
                            { className: "text-xl text-red-400 mb-2" },
                            o,
                          ),
                          r.createElement(
                            "button",
                            {
                              type: "button",
                              onClick: () => T(),
                              className:
                                "text-[#8cfcfb] underline underline-offset-2 hover:text-white",
                            },
                            "Try again",
                          ),
                        )
                      : O.length > 0
                        ? r.createElement(
                            "div",
                            {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            },
                            r.createElement(
                              dr.N,
                              { mode: "popLayout" },
                              O.map((e, t) =>
                                r.createElement(_r, {
                                  key: e.id,
                                  resource: e,
                                  index: t,
                                  onOpen: b,
                                  onEdit: D,
                                  onDelete: j,
                                  isDeleting: N === e.id,
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
                                : c
                                  ? `No resources match "${c}".`
                                  : "No resources in this category yet.",
                            ),
                            _ &&
                              r.createElement(
                                "button",
                                {
                                  type: "button",
                                  onClick: z,
                                  className:
                                    "text-[#8cfcfb] underline underline-offset-2 hover:text-white",
                                },
                                "Clear filters",
                              ),
                          ),
                ),
                r.createElement(
                  dr.N,
                  null,
                  g &&
                    r.createElement($r, {
                      key: g.id,
                      resource: g,
                      onClose: h,
                      onEdit: D,
                      onDelete: j,
                    }),
                ),
                r.createElement(
                  dr.N,
                  null,
                  x &&
                    r.createElement(Ur, {
                      key: x.resource ? `edit-${x.resource.id}` : "add",
                      resource: x.resource,
                      subOptions: P,
                      takenUrls: k,
                      onClose: () => E(null),
                      onSubmit: async (e) => {
                        const a = x?.resource;
                        if (a) {
                          const r = a.types.length ? a.types : [xr],
                            n = Cr(e, r);
                          (e.url !== a.url && (n.new_resource_url = e.url),
                            await ((e, t) =>
                              pr(
                                { ...t, action: "update", resource_url: e },
                                "Couldn't save your changes. Please try again.",
                              ))(a.url, n));
                          const l = wr({
                            ...n,
                            resource_url: e.url,
                            resource_timestamp: a.addedAt
                              ? new Date(a.addedAt).toISOString()
                              : "",
                          });
                          (t((e) => e.map((e) => (e.id === a.id ? l : e))),
                            M("success", "Resource updated."));
                        } else {
                          const a = {
                            ...Cr(e, [xr]),
                            resource_url: e.url,
                            resource_timestamp: new Date().toISOString(),
                          };
                          (await ((e) =>
                            pr(
                              e,
                              "Couldn't add the resource. Please try again.",
                            ))(a),
                            t((e) => [wr(a), ...e]),
                            M("success", "Resource added."));
                        }
                        (C((t) => {
                          const r = new Set(t);
                          return (a && r.delete(a.url), r.add(e.url), r);
                        }),
                          E(null),
                          T({ silent: !0 }));
                      },
                    }),
                ),
                r.createElement(
                  dr.N,
                  null,
                  y &&
                    r.createElement(Gr, {
                      key: `delete-${y.id}`,
                      resource: y,
                      onClose: () => v(null),
                      onConfirm: async (e) => {
                        w(e.id);
                        try {
                          await ((a = e.url),
                          pr(
                            { action: "delete", resource_url: a },
                            "Couldn't delete the resource. Please try again.",
                          ));
                        } finally {
                          w(null);
                        }
                        var a;
                        (t((t) => t.filter((t) => t.id !== e.id)),
                          C((t) => {
                            const a = new Set(t);
                            return (a.delete(e.url), a);
                          }),
                          v(null),
                          M("success", `Deleted “${e.title}”.`),
                          T({ silent: !0 }));
                      },
                    }),
                ),
                r.createElement(Wr, { toast: S, onDismiss: () => A(null) }),
              ),
            );
          };
        function Zr(e) {
          let {
            checked: t,
            onChange: a,
            disabled: n,
            labelledBy: l,
            describedBy: o,
            label: s,
            className: c,
          } = e;
          return r.createElement(
            "button",
            {
              type: "button",
              role: "switch",
              "aria-checked": t,
              "aria-label": s,
              "aria-labelledby": l,
              "aria-describedby": o,
              disabled: n,
              onClick: () => a(!t),
              className: y(
                "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors",
                "outline-none focus-visible:ring-[3px] focus-visible:ring-brand-fg/40",
                "disabled:cursor-not-allowed",
                t ? "bg-brand-fg" : "bg-muted-foreground/50",
                c,
              ),
            },
            r.createElement("span", {
              className: y(
                "inline-block h-5 w-5 rounded-full bg-white shadow transition-transform",
                t ? "translate-x-[22px]" : "translate-x-0.5",
              ),
            }),
          );
        }
        const Jr = "rounded-xl border border-border bg-card",
          Vr = [
            { value: "all", label: "All" },
            { value: "unread", label: "Unread" },
            { value: "success", label: "Success" },
            { value: "info", label: "Info" },
            { value: "warning", label: "Warnings" },
            { value: "error", label: "Errors" },
          ],
          Yr = function () {
            const {
                notifications: e,
                unreadCount: t,
                markAllRead: a,
                clearAll: n,
                restore: l,
                prefs: o,
                setPrefs: s,
              } = St(),
              [c, i] = (0, r.useState)("all"),
              d = e.filter(
                (e) => "all" === c || ("unread" === c ? !e.read : e.type === c),
              );
            return r.createElement(
              "div",
              { className: "container mx-auto px-4 py-6 md:px-6" },
              r.createElement(
                "header",
                { className: "mb-6" },
                r.createElement(
                  "h1",
                  {
                    className:
                      "font-display text-2xl font-semibold text-foreground md:text-3xl",
                  },
                  "Notifications",
                ),
                r.createElement(
                  "p",
                  { className: "text-sm text-muted-foreground" },
                  "Task sync results and other updates",
                ),
              ),
              r.createElement(
                "div",
                { className: "grid gap-6 xl:grid-cols-3" },
                r.createElement(
                  "section",
                  { className: y(Jr, "overflow-hidden xl:col-span-2") },
                  r.createElement(
                    "div",
                    { className: "px-6 pb-4 pt-5" },
                    r.createElement(
                      "h2",
                      {
                        className:
                          "flex items-center gap-2 text-base font-semibold",
                      },
                      r.createElement(ze.A, {
                        className: "h-4 w-4 text-brand-fg",
                      }),
                      "Inbox",
                      t > 0 &&
                        r.createElement(
                          "span",
                          {
                            className:
                              "rounded-full bg-brand-soft px-2 py-0.5 text-xs font-medium text-brand-fg",
                          },
                          t,
                          " unread",
                        ),
                    ),
                    r.createElement(
                      "p",
                      { className: "mt-1 text-sm text-muted-foreground" },
                      "Kept in this browser for your account. The newest 50 are saved.",
                    ),
                  ),
                  r.createElement(
                    "div",
                    {
                      className:
                        "flex flex-wrap items-center justify-between gap-3 border-y border-border px-6 py-3",
                    },
                    r.createElement(
                      "div",
                      {
                        role: "group",
                        "aria-label": "Filter notifications",
                        className: "flex flex-wrap gap-1",
                      },
                      Vr.map((e) =>
                        r.createElement(
                          "button",
                          {
                            key: e.value,
                            type: "button",
                            "aria-pressed": c === e.value,
                            onClick: () => i(e.value),
                            className: y(
                              "rounded-md px-2.5 py-1 text-xs font-medium outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-brand-fg/40",
                              c === e.value
                                ? "bg-brand-soft text-brand-fg ring-1 ring-brand-fg/25"
                                : "text-muted-foreground hover:bg-white/10 hover:text-foreground",
                            ),
                          },
                          e.label,
                        ),
                      ),
                    ),
                    r.createElement(
                      "div",
                      { className: "flex gap-2" },
                      r.createElement(
                        k,
                        {
                          variant: "outline",
                          size: "sm",
                          onClick: a,
                          disabled: 0 === t,
                        },
                        r.createElement(Xe.A, { className: "h-4 w-4" }),
                        "Mark all read",
                      ),
                      r.createElement(
                        k,
                        {
                          variant: "outline",
                          size: "sm",
                          onClick: function () {
                            const t = e;
                            (n(),
                              xe.info("Notifications cleared", {
                                action: { label: "Undo", onClick: () => l(t) },
                              }));
                          },
                          disabled: 0 === e.length,
                        },
                        r.createElement(da.A, { className: "h-4 w-4" }),
                        "Clear all",
                      ),
                    ),
                  ),
                  r.createElement(Mt, {
                    items: d,
                    emptyTitle:
                      0 === e.length
                        ? "You're all caught up"
                        : "Nothing matches this filter",
                    emptyDescription:
                      0 === e.length
                        ? "New notifications will show up here."
                        : "Try a different filter.",
                  }),
                ),
                r.createElement(
                  "section",
                  { className: y(Jr, "self-start p-6") },
                  r.createElement(
                    "h2",
                    { className: "text-base font-semibold" },
                    "Preferences",
                  ),
                  r.createElement(
                    "p",
                    { className: "mt-1 text-sm text-muted-foreground" },
                    "Choose how notifications reach you",
                  ),
                  r.createElement(
                    "div",
                    {
                      className:
                        "mt-4 flex items-center justify-between gap-4 rounded-lg border border-border p-4",
                    },
                    r.createElement(
                      "div",
                      null,
                      r.createElement(
                        "div",
                        {
                          id: "popups-label",
                          className: "text-sm font-medium",
                        },
                        "Pop-up notifications",
                      ),
                      r.createElement(
                        "p",
                        {
                          id: "popups-desc",
                          className: "text-xs text-muted-foreground",
                        },
                        "When off, only errors pop up. Your inbox still fills up as usual.",
                      ),
                    ),
                    r.createElement(Zr, {
                      checked: o.popups,
                      onChange: (e) => s({ popups: e }),
                      labelledBy: "popups-label",
                      describedBy: "popups-desc",
                    }),
                  ),
                ),
              ),
            );
          },
          Kr = function () {
            return r.createElement(
              "div",
              {
                className:
                  "flex flex-col items-center justify-center min-h-screen bg-[#000000] text-[#c2ccaa]",
              },
              r.createElement("h1", null, "Notes"),
              r.createElement(
                "a",
                {
                  href: "https://docs.google.com/document/d/1YI_R4m_rr6TnaQ9K3qSY26MExzZiM2dJlJwaXSVM438/edit?usp=sharing",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "inline-block mt-4 px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors",
                },
                "Open Nec Doc",
              ),
            );
          },
          Qr = function () {
            const { isAuthenticated: e } = bt(),
              t = (0, s.zy)();
            return e
              ? r.createElement(s.sv, null)
              : r.createElement(s.C5, {
                  to: "/login",
                  replace: !0,
                  state: { from: t },
                });
          },
          Xr = () => {
            const e = (0, s.zy)(),
              t = "/login" === e.pathname || "/signup" === e.pathname;
            return r.createElement(
              "div",
              {
                className:
                  "flex min-h-screen min-w-0 flex-col bg-[#000000] text-[#c2ccaa]",
              },
              !t && r.createElement(Ft, null),
              r.createElement(
                "main",
                { className: "min-w-0 flex-1" },
                r.createElement(
                  s.BV,
                  null,
                  r.createElement(s.qh, {
                    path: "/login",
                    element: r.createElement(na, null),
                  }),
                  r.createElement(s.qh, {
                    path: "/signup",
                    element: r.createElement(ca, null),
                  }),
                  r.createElement(
                    s.qh,
                    { element: r.createElement(Qr, null) },
                    r.createElement(s.qh, {
                      path: "/",
                      element: r.createElement(_e, null),
                    }),
                    r.createElement(s.qh, {
                      path: "/time-planner",
                      element: r.createElement(ir, null),
                    }),
                    r.createElement(s.qh, {
                      path: "/project-track",
                      element: r.createElement(fa, null),
                    }),
                    r.createElement(s.qh, {
                      path: "/todo-list",
                      element: r.createElement(Ha, null),
                    }),
                    r.createElement(s.qh, {
                      path: "/nec-doc",
                      element: r.createElement(Kr, null),
                    }),
                    r.createElement(s.qh, {
                      path: "/dev-res-admin",
                      element: r.createElement(qr, null),
                    }),
                    r.createElement(s.qh, {
                      path: "/notifications",
                      element: r.createElement(Yr, null),
                    }),
                  ),
                ),
              ),
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
                    ". v2.0.14 All rights reserved.",
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
                      r.createElement(o.hL4, { className: "w-6 h-6" }),
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
                      r.createElement(o.QEs, { className: "w-6 h-6" }),
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
                      r.createElement(o.iYk, { className: "w-6 h-6" }),
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
                      r.createElement(o.ao$, { className: "w-6 h-6" }),
                    ),
                  ),
                ),
              ),
            );
          },
          en = function () {
            return r.createElement(
              "div",
              { className: "App" },
              r.createElement(
                gt,
                null,
                r.createElement(
                  Ct,
                  null,
                  r.createElement(we, null, r.createElement(Xr, null)),
                ),
              ),
            );
          };
        var tn;
        (n
          .createRoot(document.getElementById("root"))
          .render(r.createElement(s.I9, null, r.createElement(en, null))),
          tn &&
            tn instanceof Function &&
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
                (t(tn), a(tn), r(tn), n(tn), l(tn));
              }));
      },
    },
    o = {};
  function s(e) {
    var t = o[e];
    if (void 0 !== t) return t.exports;
    var a = (o[e] = { exports: {} });
    return (l[e].call(a.exports, a, a.exports, s), a.exports);
  }
  ((s.m = l),
    (e = []),
    (s.O = (t, a, r, n) => {
      if (!a) {
        var l = 1 / 0;
        for (d = 0; d < e.length; d++) {
          ((a = e[d][0]), (r = e[d][1]), (n = e[d][2]));
          for (var o = !0, c = 0; c < a.length; c++)
            (!1 & n || l >= n) && Object.keys(s.O).every((e) => s.O[e](a[c]))
              ? a.splice(c--, 1)
              : ((o = !1), n < l && (l = n));
          if (o) {
            e.splice(d--, 1);
            var i = r();
            void 0 !== i && (t = i);
          }
        }
        return t;
      }
      n = n || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > n; d--) e[d] = e[d - 1];
      e[d] = [a, r, n];
    }),
    (a = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (s.t = function (e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ("object" == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && "function" == typeof e.then) return e;
      }
      var n = Object.create(null);
      s.r(n);
      var l = {};
      t = t || [null, a({}), a([]), a(a)];
      for (var o = 2 & r && e; "object" == typeof o && !~t.indexOf(o); o = a(o))
        Object.getOwnPropertyNames(o).forEach((t) => (l[t] = () => e[t]));
      return ((l.default = () => e), s.d(n, l), n);
    }),
    (s.d = (e, t) => {
      for (var a in t)
        s.o(t, a) &&
          !s.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (s.f = {}),
    (s.e = (e) =>
      Promise.all(Object.keys(s.f).reduce((t, a) => (s.f[a](e, t), t), []))),
    (s.u = (e) => "bundle.49239971958313ee0ec7.js"),
    (s.miniCssF = (e) => {}),
    (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r = {}),
    (n = "react-taskplanner:"),
    (s.l = (e, t, a, l) => {
      if (r[e]) r[e].push(t);
      else {
        var o, c;
        if (void 0 !== a)
          for (
            var i = document.getElementsByTagName("script"), d = 0;
            d < i.length;
            d++
          ) {
            var m = i[d];
            if (
              m.getAttribute("src") == e ||
              m.getAttribute("data-webpack") == n + a
            ) {
              o = m;
              break;
            }
          }
        (o ||
          ((c = !0),
          ((o = document.createElement("script")).charset = "utf-8"),
          (o.timeout = 120),
          s.nc && o.setAttribute("nonce", s.nc),
          o.setAttribute("data-webpack", n + a),
          (o.src = e)),
          (r[e] = [t]));
        var u = (t, a) => {
            ((o.onerror = o.onload = null), clearTimeout(f));
            var n = r[e];
            if (
              (delete r[e],
              o.parentNode && o.parentNode.removeChild(o),
              n && n.forEach((e) => e(a)),
              t)
            )
              return t(a);
          },
          f = setTimeout(
            u.bind(null, void 0, { type: "timeout", target: o }),
            12e4,
          );
        ((o.onerror = u.bind(null, o.onerror)),
          (o.onload = u.bind(null, o.onload)),
          c && document.head.appendChild(o));
      }
    }),
    (s.r = (e) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (s.p = "./"),
    (() => {
      var e = { 792: 0 };
      ((s.f.j = (t, a) => {
        var r = s.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) a.push(r[2]);
          else {
            var n = new Promise((a, n) => (r = e[t] = [a, n]));
            a.push((r[2] = n));
            var l = s.p + s.u(t),
              o = new Error();
            s.l(
              l,
              (a) => {
                if (s.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var n = a && ("load" === a.type ? "missing" : a.type),
                    l = a && a.target && a.target.src;
                  ((o.message =
                    "Loading chunk " + t + " failed.\n(" + n + ": " + l + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = n),
                    (o.request = l),
                    r[1](o));
                }
              },
              "chunk-" + t,
              t,
            );
          }
      }),
        (s.O.j = (t) => 0 === e[t]));
      var t = (t, a) => {
          var r,
            n,
            l = a[0],
            o = a[1],
            c = a[2],
            i = 0;
          if (l.some((t) => 0 !== e[t])) {
            for (r in o) s.o(o, r) && (s.m[r] = o[r]);
            if (c) var d = c(s);
          }
          for (t && t(a); i < l.length; i++)
            ((n = l[i]), s.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
          return s.O(d);
        },
        a = (self.webpackChunkreact_taskplanner =
          self.webpackChunkreact_taskplanner || []);
      (a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a))));
    })(),
    (s.nc = void 0));
  var c = s.O(void 0, [685], () => s(8305));
  c = s.O(c);
})();
