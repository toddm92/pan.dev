module.exports = {
  prismacloudapi: [
    "prisma-cloud/api/api-reference-home",
    {
      type: "category",
      label: "Cloud Security Posture Management",
      collapsed: true,
      items: [
        "prisma-cloud/api/cspm/cspm-api",
        "prisma-cloud/api/cspm/api-urls",
        "prisma-cloud/api/cspm/api-headers",
        "prisma-cloud/api/cspm/rate-limits",
        "prisma-cloud/api/cspm/api-time-range-model",
        "prisma-cloud/api/cspm/api-integration-config",
        "prisma-cloud/api/cspm/api-errors",
        require("./api/cspm/sidebar"),
      ],
    },
    {
      type: "category",
      label: "Cloud Workload Protection",
      collapsed: true,
      items: [
        "prisma-cloud/api/cwpp/cwpp-home",
        "prisma-cloud/api/cwpp/access-api-saas",
        "prisma-cloud/api/cwpp/stable-endpoints",
        require("./api/cwpp/sidebar"),
      ],
    },
    {
      type: "category",
      label: "Cloud Code Security",
      collapsed: true,
      items: [
        "prisma-cloud/api/code/code",
        "prisma-cloud/api/code/basic-request",
        "prisma-cloud/api/code/api-headers",
        require("./api/code/sidebar"),
      ],
    },
  ],
  cwpp_30: [
    {
      type: "category",
      label: "Prisma Cloud Enterprise Edition - 30.00",
      collapsed: true,
      items: [
        "prisma-cloud/api/cwpp/30-00/stable-endpoints",
        require("./api/cwpp/30-00/sidebar"),
      ],
    },
  ],

  cwpp_3001: [
    {
      type: "category",
      label: "Prisma Cloud Enterprise Edition - 30.01",
      collapsed: true,
      items: [
        "prisma-cloud/api/cwpp/30-01/stable-endpoints",
        require("./api/cwpp/30-01/sidebar"),
      ],
    },
  ],

  clouddocs: [
    "prisma-cloud/docs/home",
    {
      type: "category",
      label: "Cloud Security Posture Management",
      items: [
        {
          type: "autogenerated",
          dirName: "prisma-cloud/docs/cspm",
        },
      ],
    },
    {
      type: "category",
      label: "Cloud Workload Protection Platform",
      items: [
        {
          type: "autogenerated",
          dirName: "prisma-cloud/docs/cwpp",
        },
      ],
    },
    "prisma-cloud/docs/cspm-postman-collection",
    {
      type: "category",
      label: "Other Documentation",
      items: [
        {
          type: "link",
          label: "Administrator's Guide",
          href: "https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-admin.html",
        },
        {
          type: "link",
          label: "Release Information",
          href: "https://docs.paloaltonetworks.com/content/techdocs/en_US/prisma/prisma-cloud/prisma-cloud-release-notes/prisma-cloud-release-information.html",
        },
        {
          type: "link",
          label: "Resource Query Language (RQL)",
          href: "https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-rql-reference/rql-reference.html",
        },
        "prisma-cloud/docs/twistcli_gs",
        {
          type: "category",
          label: "RQL",
          items: [
            {
              type: "autogenerated",
              dirName: "prisma-cloud/docs/rql",
            },
          ],
        },
        {
          type: "category",
          label: "Terraform Provider",
          items: [
            {
              type: "autogenerated",
              dirName: "prisma-cloud/docs/tf",
            },
          ],
        },
        {
          type: "category",
          label: "Compute 30.00",
          items: [
            {
              type: "link",
              label: "Administrator's Guide",
              href: "https://docs.paloaltonetworks.com/content/techdocs/en_US/prisma/prisma-cloud/30/prisma-cloud-compute-edition-admin.html",
            },
            {
              type: "link",
              label: "Release Notes",
              href: "https://docs.paloaltonetworks.com/prisma/prisma-cloud/30/prisma-cloud-compute-edition-release-notes/release-information",
            },
          ],
        },
        {
          type: "category",
          label: "Compute 22.12",
          items: [
            {
              type: "link",
              label: "Administrator's Guide",
              href: "https://docs.paloaltonetworks.com/content/techdocs/en_US/prisma/prisma-cloud/22-12/prisma-cloud-compute-edition-admin.html",
            },
            {
              type: "link",
              label: "Release Notes",
              href: "https://docs.paloaltonetworks.com/prisma/prisma-cloud/22-12/prisma-cloud-compute-edition-release-notes/release-information",
            },
          ],
        },
        {
          type: "category",
          label: "Compute 22.06",
          items: [
            {
              type: "link",
              label: "Administrator's Guide",
              href: "https://docs.paloaltonetworks.com/content/techdocs/en_US/prisma/prisma-cloud/22-06/prisma-cloud-compute-edition-admin.html",
            },
            {
              type: "link",
              label: "Release Notes",
              href: "https://docs.paloaltonetworks.com/prisma/prisma-cloud/22-06/prisma-cloud-compute-edition-release-notes/release-information",
            },
          ],
        },
        {
          type: "category",
          label: "CWPP",
          items: [
            {
              type: "link",
              label: "Administrator's Guide",
              href: "https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-admin-compute.html",
            },
          ],
        },
      ],
    },
  ],
};
